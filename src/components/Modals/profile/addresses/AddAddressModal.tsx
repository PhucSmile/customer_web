import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FormInputText } from '@/components/ReactHookForm/FormInputText';
import { Button } from '@/components/MaterialTailwind';
import { BaseModal } from '../../BaseModal';
import { FormInputAddressSelect } from '@/components/ReactHookForm/FormInputAddressSelect';
import {
  AddUserAddressSchema,
  AddUserAddressType,
} from '@/schemas/UserSchemas/UserAddressSchemas/UserAddressSchema';
import { FormInputSwitch } from '@/components/ReactHookForm/FormInputSwitch';
import { useLoginContext } from '@/components/Context/LoginContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkEmpty } from '@/utils/checkEmpty';
import { useAddUserAddressMutation } from '@/api/appService/userAddress/userAddressApi';
import { FormInputPhoneNumber } from '@/components/ReactHookForm/FormInputPhoneNumber';
import { AnimatePresence, motion } from 'framer-motion';

type AddModalPropsType = {
  isOpen: boolean;
  handleClose: () => void;
  onSuccess?: () => void;
};

const defaultValues: AddUserAddressType = {
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

export const AddAddressModal: FC<AddModalPropsType> = ({
  isOpen,
  onSuccess,
  handleClose,
}) => {
  const { loginData } = useLoginContext();
  const methods = useForm({
    defaultValues: {
      ...defaultValues,
      user_id: loginData?.user_id ?? '',
    },
    mode: 'all',
    resolver: zodResolver(AddUserAddressSchema),
  });
  const { handleSubmit, reset, watch } = methods;

  const { mutateAsync } = useAddUserAddressMutation();

  const onSubmit: SubmitHandler<AddUserAddressType> = async (data) => {
    await mutateAsync(data);
    onSuccess?.();
    handleClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      size="sm"
      handleClose={() => {
        reset();
        handleClose();
      }}
      onCloseButtonClick={() => {
        reset();
        handleClose();
      }}
      title={'Thêm địa chỉ'}
      modalBodyClassName="py-8"
      modalFooter={
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="btn-secondary text-xs uppercase px-10"
            onClick={() => {
              reset();
              handleClose();
            }}
          >
            Quay lại
          </button>
          <Button
            className="btn-primary bg-primary px-10"
            color="green"
            size="md"
            onClick={handleSubmit(onSubmit, (error) => console.error(error))}
          >
            Lưu
          </Button>
        </div>
      }
    >
      <FormProvider {...methods}>
        <div className="flex flex-col gap-6">
          <div className="flexColStart lg:flexBetween gap-6">
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
                  className={`flexBetween gap-6`}
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
