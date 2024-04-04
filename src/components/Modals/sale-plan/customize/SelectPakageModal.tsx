'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useGetSalePlanComboDetailsBySalePlanIdQuery } from '@/api/appService/salePlan/salePlanApi';
import { Button, Typography } from '@/components/MaterialTailwind';
import { BaseModal } from '../../BaseModal';
import { useGetUserAddressQuery } from '@/api/appService/userAddress/userAddressApi';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  SalePlanRegisterScheduleSchema,
  SalePlanRegisterScheduleType,
} from '@/schemas/SalePlanSchemas/SalePlanRegisterScheduleDraftSchemas copy/SalePlanRegisterScheduleSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInputDate } from '@/components/ReactHookForm/FormInputDate';
import { FormInputRadio } from '@/components/ReactHookForm/FormInputRadio';
import { UpdateAddressModal } from '../../profile/addresses/UpdateAddressModal';
import { AddAddressModal } from '../../profile/addresses/AddAddressModal';
import { useConfirmSalePlanRegisterScheduleDraftMutation } from '@/api/appService/salePlan/salePlanRegisterScheduleDraftApi';
import { ErrorMessage } from '@hookform/error-message';
import { useSalePlanRegisterDraftContext } from '@/components/Context/SalePlanRegisterDraftContext';
import { SalePlanRegisterDraftType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/SalePlanRegisterDraftSchema';
import { checkEmpty } from '@/utils/checkEmpty';
import {
  ISO8601StringToDayJS,
  formatFromISO8601,
  formatToISO8601,
} from '@/utils/dateUtils';
import AddLine from '@/components/SvgComponents/line/AddLine';
import TimeLine from '@/components/SvgComponents/line/TimeLine';
import LocationLine from '@/components/SvgComponents/line/LocationLine';
import { useGetSaleExceptionDateQuery } from '@/api/appService/saleExceptionDate/saleExceptionDateApi';

type ModalSelectSaleObjectComboTypeProps = {
  isOpen: boolean;
  data: SalePlanRegisterDraftType;
  handleClose: () => void;
  onSuccess?: () => void;
  // handleSelect: (selecting?: SaleObjectComboType) => void;
  // selected?: SaleObjectComboType;
};

const defaultValues: SalePlanRegisterScheduleType = {
  id: '',
  combo_id: '',
  is_confirm: true,
  delivery_date: '',
  customer_address_id: '',
};

const SelectPakageModal: FC<ModalSelectSaleObjectComboTypeProps> = ({
  isOpen,
  data,
  onSuccess,
  handleClose,
  // handleSelect,
}) => {
  const {
    id,
    plan_id,
    package_number,
    combo_id,
    delivery_date,
    customer_address_id,
  } = data;
  const [selectedId, setSelectedId] = useState<string>('');

  const [isOpenUpdateAddressModal, setIsOpenUpdateAddressModalModal] =
    useState(false);

  const [isOpenAddAddressModal, setIsOpenAddAddressModalModal] =
    useState(false);

  const methods = useForm({
    mode: 'all',
    values: {
      ...defaultValues,
      id,
      combo_id,
      delivery_date,
      customer_address_id,
      is_confirm: true,
    },
    resolver: zodResolver(SalePlanRegisterScheduleSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const {
    data: salePlanComboDetailsResponse,
    isFetching: isSalePlanComboDetailsFetching,
  } = useGetSalePlanComboDetailsBySalePlanIdQuery(plan_id ?? '', {
    enabled: isOpen && !!plan_id,
  });

  const {
    data: saleExceptionDateResponse,
    isFetching: isGetSaleExceptionDateFetching,
  } = useGetSaleExceptionDateQuery();

  const { data: userAddressData, refetch: refetchGetUserAddress } =
    useGetUserAddressQuery();

  const handleCloseAddAddressModalModal = () => {
    setIsOpenAddAddressModalModal(false);
  };

  const handleOpenAddAddressModalModal = () => {
    setIsOpenAddAddressModalModal(true);
  };

  const handleCloseUpdateAddressModal = () => {
    setIsOpenUpdateAddressModalModal(false);
    setSelectedId('');
  };

  const handleOpenUpdateAddressModal = (Id: string) => {
    setSelectedId(Id);
    setIsOpenUpdateAddressModalModal(true);
  };

  const {
    mutateAsync,
    isLoading: isConfirmSalePlanRegisterScheduleDraftMutationLoading,
  } = useConfirmSalePlanRegisterScheduleDraftMutation();

  const onSubmit: SubmitHandler<SalePlanRegisterScheduleType> = async (
    values,
  ) => {
    const { data: responseData } = await mutateAsync(values);
    if (responseData?.status === 1) {
      onSuccess?.();
    }
    handleClose();
  };

  const isLoading =
    isConfirmSalePlanRegisterScheduleDraftMutationLoading ||
    isSalePlanComboDetailsFetching ||
    isGetSaleExceptionDateFetching;

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={() => {
        reset();
        handleClose();
      }}
      onCloseButtonClick={() => {
        reset();
        handleClose();
      }}
      size="md"
      title={`Package ${package_number}`}
      modalClassName="min-w-fit"
      modalFooter={
        <div className="flex justify-end gap-2">
          <Button
            variant="text"
            color="gray"
            size="md"
            className="btn-secondary hover:text-white hover:!bg-inactive text-black uppercase"
            disabled={isLoading}
            onClick={() => {
              reset();
              handleClose();
            }}
          >
            Hủy
          </Button>
          <Button
            className="btn-primary bg-primary"
            color="green"
            size="md"
            disabled={isLoading}
            onClick={handleSubmit(onSubmit, (error) => console.error(error))}
          >
            Xác nhận
          </Button>
        </div>
      }
    >
      <FormProvider {...methods}>
        <div className="grid grid-cols-1 lg:grid-cols-5 py-2">
          <div className="col-span-2 flex flex-col mx-auto">
            <ErrorMessage
              name={'combo_id'}
              errors={errors}
              render={({ message }) => (
                <span className="text-sm text-red-500 mt-1">{message}</span>
              )}
            />
            <div className="max-h-[600px] max-w-xl overflow-auto">
              {salePlanComboDetailsResponse?.data?.data?.map(
                ({ combo_id, combo_name, details }, index) => (
                  <label
                    key={combo_id}
                    className="my-2 flex cursor-pointer relative items-center justify-between rounded-md border border-underground p-2"
                    // onChange={() => handleSelecting(paymentMethodDetail)}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <Image
                          src={'/img/items/item5.png'}
                          alt=""
                          width={150}
                          height={150}
                          className="h-auto rounded-md bg-underground"
                        />
                      </div>
                      <div className="col-span-2">
                        <div className="flex justify-between">
                          <h1 className="font-medium self-center">
                            {combo_name}
                          </h1>
                          <FormInputRadio name="combo_id" value={combo_id} />
                        </div>
                        {details?.map((detail, index) => (
                          <div
                            key={detail.object_id + index}
                            className="flexBetween gap-4 text-sm"
                          >
                            <div className="flex justify-start gap-2">
                              <span>{detail.object_qty}x</span>
                              <span>{detail.object_name}</span>
                            </div>
                            <span>
                              {detail.net_weight}
                              {detail.unit_name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <input
                    type="radio"
                    name="saleObjectCombo"
                    value={combo_id}
                    className="transition-primary absolute right-2 top-2 cursor-pointer text-primary focus:ring-0"
                    checked={selecting?.id === saleObjectCombo.combo_id}
                    // onChange={() =>
                    //   // handleSelecting(paymentMethodDetail)
                    // }
                  /> */}
                  </label>
                ),
              )}
            </div>
          </div>
          <div className="col-span-3 md:px-4 border-t pt-2 mt-2 lg:mt-0 lg:pt-0 lg:border-t-0">
            <div className="my-2 border-b ">
              <div className="flexStart gap-2 whitespace-nowrap font-medium text-gray-600">
                <TimeLine className="w-5 h-5" />
                <Typography variant="h6">Ngày giao</Typography>
              </div>
              <div className="m-2">
                <FormInputDate
                  name="delivery_date"
                  disabledDates={saleExceptionDateResponse?.data?.data?.map(
                    (item) => ({
                      startDate: ISO8601StringToDayJS(item.day)?.format(
                        'YYYY-MM-DD',
                      ),
                      endDate: ISO8601StringToDayJS(item.day)?.format(
                        'YYYY-MM-DD',
                      ),
                    }),
                  )}
                />
              </div>
            </div>
            <div>
              <div className="flexStart gap-2 font-medium text-gray-600">
                <LocationLine className="w-5 h-5" />
                <Typography variant="h6">Địa chỉ nhận hàng</Typography>
                <ErrorMessage
                  name={'customer_address_id'}
                  errors={errors}
                  render={({ message }) => (
                    <Typography className="text-sm text-red-500 mt-1">
                      {message}
                    </Typography>
                  )}
                />
              </div>
              <div className="max-h-[400px] overflow-auto pr-5">
                {userAddressData?.data?.data
                  ?.sort((a, b) => (a?.is_default ? 0 : 1))
                  ?.map(
                    ({
                      id,
                      alias,
                      person_name,
                      phone,
                      line1,
                      ward_name,
                      district_name,
                      province_name,
                      is_default,
                    }) => (
                      <div
                        key={id}
                        className="flexBetween border-b border-underground"
                      >
                        <label className="flex cursor-pointer items-center justify-between gap-2 md:gap-4">
                          <FormInputRadio
                            name="customer_address_id"
                            value={id}
                            color="green"
                            className="p-2 text-primary"
                          />

                          <div className="flex justify-between py-3">
                            <div className="">
                              <div className="flex flex-col sm:flex-row justify-start sm:gap-2">
                                <h1 className="font-semibold">
                                  {alias ?? person_name}
                                </h1>
                                <div className="border-l"></div>
                                <p className="font-normal text-gray-600">
                                  {phone}
                                </p>
                              </div>
                              <div className="flex flex-col">
                                <p className="text-sm text-gray-600">{`${line1}`}</p>
                                <p className="text-sm text-gray-600">{`${ward_name}, ${district_name}, ${province_name}`}</p>
                              </div>
                              {is_default ? (
                                <span className="rounded-md bg-quaternary px-2 py-1 text-xs text-white">
                                  Mặc định
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </label>
                        <Button
                          variant="text"
                          color="green"
                          size="sm"
                          className="px-2 py-1 normal-case text-primary hover:text-green-700 whitespace-nowrap"
                          onClick={() => handleOpenUpdateAddressModal(id)}
                        >
                          Cập nhật
                        </Button>
                      </div>
                    ),
                  )}
                <div
                  className="flex cursor-pointer items-center justify-start gap-4"
                  onClick={handleOpenAddAddressModalModal}
                >
                  <AddLine className="w-6 h-6 text-primary" />
                  <div className="flexColStart py-3">
                    <h1 className="font-semibold">Thêm địa chỉ</h1>
                    <p className="text-sm">
                      Thêm địa chỉ mà bạn muốn nhận hàng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
      <AddAddressModal
        isOpen={isOpenAddAddressModal}
        onSuccess={refetchGetUserAddress}
        handleClose={handleCloseAddAddressModalModal}
      />
      <UpdateAddressModal
        isOpen={isOpenUpdateAddressModal}
        update_id={selectedId}
        onSuccess={refetchGetUserAddress}
        handleClose={handleCloseUpdateAddressModal}
      />
    </BaseModal>
  );
};

export default SelectPakageModal;
