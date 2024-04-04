import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FormInputText } from '@/components/ReactHookForm/FormInputText';
import { Button } from '@/components/MaterialTailwind';
import { BaseModal } from '../../BaseModal';
import { FormInputAddressSelect } from '@/components/ReactHookForm/FormInputAddressSelect';
import { checkEmpty } from '@/utils/checkEmpty';
import { FormInputSwitch } from '@/components/ReactHookForm/FormInputSwitch';
import {
  UserAddressSchema,
  UserAddressType,
} from '@/schemas/UserSchemas/UserAddressSchemas/UserAddressSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useGetUserAddressByIdQuery,
  useUpdateUserAddressMutation,
} from '@/api/appService/userAddress/userAddressApi';
import { FormInputPhoneNumber } from '@/components/ReactHookForm/FormInputPhoneNumber';
import { AnimatePresence, motion } from 'framer-motion';

type UpdateModalPropsType = {
  isOpen: boolean;
  update_id: string;
  onSuccess?: () => void;
  handleClose: () => void;
};

const defaultValues: UserAddressType = {
  id: '',
  user_id: '',
  person_name: '',
  province_id: '',
  district_id: '',
  ward_id: '',
  alias: '',
  line1: '',
  line2: '',
  ordering: 1,
  phone: '',
  is_default: false,
  type_id: '',
  latitude: 0,
  longitude: 0,
};

export const UpdateAddressModal: FC<UpdateModalPropsType> = ({
  isOpen,
  update_id,
  onSuccess,
  handleClose,
}) => {
  const { data: userAddressByIdData } = useGetUserAddressByIdQuery(update_id, {
    enabled: isOpen && !checkEmpty(update_id),
  });

  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(UserAddressSchema),
    values: {
      ...defaultValues,
      ...userAddressByIdData?.data?.data,
    },
  });
  const { handleSubmit, watch } = methods;

  const { mutateAsync } = useUpdateUserAddressMutation();

  const onSubmit: SubmitHandler<UserAddressType> = async (data) => {
    await mutateAsync(data);
    onSuccess?.();
    handleClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      size="sm"
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      title={'Cập nhật địa chỉ'}
      modalFooter={
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="btn-secondary text-xs uppercase px-10"
            onClick={() => {
              handleClose();
            }}
          >
            Quay lại
          </button>
          <Button
            className="btn-primary bg-primary px-10"
            color="green"
            size="md"
            onClick={handleSubmit(onSubmit)}
          >
            Lưu
          </Button>
        </div>
      }
    >
      <FormProvider {...methods}>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-6">
            <FormInputText name="person_name" label="Tên người nhận" />
            <FormInputPhoneNumber name="phone" label="Số điện thoại" />
          </div>
          <FormInputAddressSelect
            name="address"
            label="Tỉnh - Thành, Quận - Huyện, Phường - Xã"
            provinceField={'province_id'}
            districtField={'district_id'}
            wardField={'ward_id'}
          />
          <AnimatePresence>
            {!checkEmpty(watch('province_id')) &&
              !checkEmpty(watch('district_id')) &&
              !checkEmpty(watch('ward_id')) && (
                <motion.div
                  className={`flex justify-between gap-6`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FormInputText name="line1" label="Dịa chỉ 1" />
                  <FormInputText name="line2" label="Địa chỉ 2 (Nếu có)" />
                </motion.div>
              )}
          </AnimatePresence>
          <FormInputText name="alias" label="Tên gợi nhớ" />
          <FormInputSwitch
            color="green"
            name="is_default"
            label="Địa chỉ mặc định"
          />
        </div>
      </FormProvider>
    </BaseModal>
  );
};
