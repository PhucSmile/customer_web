'use client';

import Link from 'next/link';
import { formatCurrencyVN } from '@/utils/numberUtils';
import { useState } from 'react';
import PaymenMethodModal from '@/components/Modals/sale-object/PaymentMethodModal';
import Image from 'next/image';
import DiscountModal from '@/components/Modals/sale-object/DiscountModal';
import { addressData } from '@/utils/dataTest/addressData';
import { shippingData } from '@/utils/dataTest/shippingData';
import { AddressType } from '@/types/AddressType';
import { PaymentMethodType } from '@/types/PaymentMethodType';
import { DiscountType } from '@/types/DiscountType';
import { ShippingType } from '@/types/ShippingType';
import { paymentMethodData } from '@/utils/dataTest/paymentMethodData';
import { cartData } from '@/utils/dataTest/cartData';
import AddressModal from '@/components/Modals/sale-object/AddressDetailModal';

import { Button } from '@/components/MaterialTailwind';
import ChevronUpLine from '@/components/SvgComponents/line/ChevronUpLine';
import CheckmarkCircleSolid from '@/components/SvgComponents/solid/CheckmarkCircleSolid';
import InformationCircleSolid from '@/components/SvgComponents/solid/InformationCircleSolid';
import BoxUnusedSolid from '@/components/SvgComponents/solid/BoxUnusedSolid';
import ChevronForwardLine from '@/components/SvgComponents/line/ChevronForwardLine';
import CardLine from '@/components/SvgComponents/line/CardLine';
import { StepHeaderContext } from '../../../layout';
import PriceTagLine from '@/components/SvgComponents/line/PriceTag';
import { useGetSalePlanByIdQuery } from '@/api/appService/salePlan/salePlanApi';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FormInputSelect } from '@/components/ReactHookForm/FormInputSelect';
import { useRegisterSalePlanMutation } from '@/api/appService/salePlan/salePlanRegisterApi';
import { useRouter } from 'next/navigation';
import { useGetSalePlanRegisterDraftByRegisterDraftIdQuery } from '@/api/appService/salePlan/salePlanRegisterDraftApi';
import { RegisterSalePlanRequestType } from '@/schemas/SalePlanSchemas/SalePlanRegisterSchemas/RegisterSalePlanSchema';

type CheckoutType = {
  plan_register_draft_id: string;
  delivery_method_id?: string;
};

const SalePlanCheckout = ({
  params,
}: {
  params: { plan_id: string; register_draft_id: string };
}) => {
  const [selectedAddress, setSelectedAddress] = useState<AddressType>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethodType>();
  const [selectedDiscount, setSelectedDiscount] = useState<DiscountType>();
  const [selectedShipping, setSelectedShipping] = useState<ShippingType>();
  const [isOpenAddressModal, setIsOpenAddressModal] = useState(false);
  const [isOpenPaymentMethodModal, setIsOpenPaymentMethodModal] =
    useState(false);
  const [isOpenDiscountModal, setIsOpenDiscountModal] = useState(false);

  const router = useRouter();

  const { data: salePlanByIdResponse, isFetching: isSalePlanByIdFetching } =
    useGetSalePlanByIdQuery(params.plan_id);

  const {
    data: salePlanRegisterDraftByRegisterDraftIdData,
    isFetching: isGetSalePlanRegisterDraftByRegisterDraftIdFetching,
  } = useGetSalePlanRegisterDraftByRegisterDraftIdQuery(
    params.register_draft_id,
  );

  const totalPackages =
    salePlanRegisterDraftByRegisterDraftIdData?.data?.data?.length;

  const confirmedPackages =
    salePlanRegisterDraftByRegisterDraftIdData?.data?.data?.filter(
      (item) => item.is_confirm,
    )?.length;

  const unusedPackages =
    salePlanRegisterDraftByRegisterDraftIdData?.data?.data?.filter(
      (item) => !item.is_confirm,
    )?.length;

  const planPrice =
    salePlanRegisterDraftByRegisterDraftIdData?.data?.data
      ?.map((item) => item.price)
      ?.reduce((item) => item) ?? 0;

  const methods = useForm<RegisterSalePlanRequestType>({
    mode: 'all',
    values: {
      plan_register_draft_id: params?.register_draft_id,
    },
  });

  const { handleSubmit } = methods;

  const handleCloseAddressModal = () => {
    setIsOpenAddressModal(false);
  };

  const handleOpenAddressModal = () => {
    setIsOpenAddressModal(true);
  };

  const handleClosePaymentMethodModal = () => {
    setIsOpenPaymentMethodModal(false);
  };

  const handleOpenPaymentMethodModal = () => {
    setIsOpenPaymentMethodModal(true);
  };

  const handleCloseDiscountModal = () => {
    setIsOpenDiscountModal(false);
  };

  const handleOpenDiscountModal = () => {
    setIsOpenDiscountModal(true);
  };

  const handleAddressSelect = (selectingAddress?: AddressType) => {
    setSelectedAddress(selectingAddress);
  };

  const handlePaymentMethodSelect = (
    selectingPaymentMethod?: PaymentMethodType,
  ) => {
    setSelectedPaymentMethod(selectingPaymentMethod);
  };

  const handleDiscountSelect = (selectingDiscount?: DiscountType) => {
    setSelectedDiscount(selectingDiscount);
  };

  const handleShippingSelect = (selectingShipping?: ShippingType) => {
    setSelectedShipping(selectingShipping);
  };

  const defaultPaymentMethod: PaymentMethodType = paymentMethodData[0];

  const calculateTotal = () => {
    return cartData.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0,
    );
  };

  const discountPrice = 10000;
  // ??
  // (salePlanByIdResponse?.data?.data?.name as number) - discountPrice;

  // const onSubmit = async () => {
  //   const { data: response } = await mutateAsync({
  //     plan_id,
  //     register_draft_id:
  //       salePlanRegisterDraftData?.[0]?.plan_register_draft_id ?? '',
  //   });

  //   if (checkEmpty(response?.data) || (response?.data?.length as number) <= 0) {
  //     router.push(`sale-plan/checkout/${salePlanByIdResponse?.data?.data?.id}`);
  //   }
  // };

  const { mutateAsync } = useRegisterSalePlanMutation();

  const onSubmit: SubmitHandler<RegisterSalePlanRequestType> = async (
    values,
  ) => {
    const { data: response } = await mutateAsync(values);

    if (response?.status !== 1) return;

    router.replace(
      `/sale-plan/order/succeeded/${response?.data?.plan_register_id}`,
    );
  };

  return (
    <>
      <StepHeaderContext.Consumer>
        {({ handleDispatchPlanId }) => (
          <div className="container mx-auto py-10">
            <div className="py-2">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-5 lg:gap-x-5">
                <div className="col-span-3 p-4 rounded-lg bg-white shadow-md">
                  <div className="flex items-end justify-between border-b pb-8">
                    <h1 className="text-2xl font-semibold">
                      Thông tin đơn hàng
                    </h1>
                  </div>
                  <div>
                    <div className="flexBetween font-bold text-xl py-2">
                      <h1>Sản phẩm</h1>
                      <h1>Giá</h1>
                    </div>
                    <div className="border-b py-4">
                      <div className="flex gap-2">
                        <div className="indicator relative h-36 w-40 rounded-md border border-primary">
                          <Image
                            src={'/img/plans/plan5.png'}
                            fill
                            className="place-items-center rounded absolute object-cover"
                            alt={salePlanByIdResponse?.data?.data?.name ?? ''}
                            priority
                          />
                        </div>
                        <div className="w-full flex flex-col">
                          <div className="flex justify-between items-start font-medium text-lg">
                            <span>
                              {salePlanByIdResponse?.data?.data?.name}
                            </span>
                            <span>
                              {/* {formatCurrencyVN(
                                salePlanByIdResponse?.data?.data?. ?? ''
                              )} */}
                            </span>
                          </div>
                          <div className="text-textSecondary">
                            <div className="flexBetween">
                              <div className="flexStart gap-2">
                                <span>
                                  Confirm packages ({confirmedPackages}/
                                  {totalPackages})
                                </span>
                                <InformationCircleSolid className="w-5" />
                              </div>
                              <ChevronUpLine className="w-5" />
                            </div>
                            <div className="flexBetween py-1">
                              <span>{confirmedPackages}x</span>
                              <div className="flexStart gap-2">
                                <CheckmarkCircleSolid className="w-5" />
                                <span>Confirmed</span>
                              </div>
                            </div>
                            <div className="flexBetween py-1">
                              <span>{unusedPackages}x</span>
                              <div className="flexStart gap-2">
                                <BoxUnusedSolid className="w-5" />
                                <span>Unused</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b py-4">
                      <div className="flexBetween py-1">
                        <span>Tạm tính</span>
                        <span>
                          {formatCurrencyVN(planPrice)}
                          {/* // salePlanByIdResponse?.data?.data?.name ?? '' */}
                        </span>
                      </div>
                      <div className="flexBetween py-1">
                        <span>Coupon</span>
                        <span className="text-primary">
                          -{formatCurrencyVN(discountPrice)}
                        </span>
                      </div>
                    </div>
                    <div className="flexBetween font-medium text-xl py-4">
                      <h1>Thành tiền</h1>
                      <span>{formatCurrencyVN(planPrice - discountPrice)}</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 rounded-lg bg-white shadow-md p-4 lg:col-span-2">
                  <FormProvider {...methods}>
                    <h1 className="pb-8 text-2xl font-semibold">
                      Thông tin giao hàng
                    </h1>
                    <div className="py-3">
                      <label className="mb-3 inline-block text-base font-bold ">
                        Phương thức vận chuyển
                      </label>
                      <FormInputSelect
                        name="delivery_method_id"
                        placeholder="Phương thức"
                        options={shippingData}
                        mapOption={(item) => ({
                          value: item.id,
                          label: (
                            <div className="text flexStart gap-2 truncate">
                              <Image
                                src={item.image_url}
                                width={40}
                                height={36}
                                alt={item.shipping_name}
                              />
                              <div className="flex flex-col">
                                <div
                                  className={`flexStart gap-4 truncate text-base`}
                                >
                                  <span>{item.shipping_name}</span>
                                  <span className="font-medium text-primary">
                                    {formatCurrencyVN(item.shipping_price)}
                                  </span>
                                </div>
                                <span className="text-sm">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                          ),
                        })}
                      />
                    </div>
                    <div className="py-3">
                      <h1 className="pb-2 font-bold">Phương thức thanh toán</h1>
                      <div
                        onClick={handleOpenPaymentMethodModal}
                        className="flex cursor-pointer items-center justify-between border-b py-2"
                      >
                        <div className="flexStart gap-2">
                          <CardLine className="w-5 h-5" />
                          {selectedPaymentMethod ? (
                            <div className="flex items-center gap-2">
                              <Image
                                width={48}
                                height={36}
                                src={selectedPaymentMethod.image_url}
                                alt={selectedPaymentMethod.name}
                              />
                              <p className="text-xs">
                                {selectedPaymentMethod.name}
                              </p>
                            </div>
                          ) : (
                            <p>Chọn phương thức thanh toán</p>
                          )}
                        </div>
                        <ChevronForwardLine className="w-5 h-5" />
                      </div>
                      <div
                        onClick={handleOpenDiscountModal}
                        className="flex cursor-pointer items-center justify-between border-b py-2"
                      >
                        <div className="flexStart gap-3">
                          <PriceTagLine className="w-5 h-5" />
                          {selectedDiscount ? (
                            <div className="flex items-center gap-2">
                              <Image
                                width={48}
                                height={36}
                                src={selectedDiscount.image_url}
                                alt={selectedDiscount.description}
                              />
                              <p className="text-xs">
                                Giảm {selectedDiscount.discountPercent}%
                              </p>
                            </div>
                          ) : (
                            <p>Chọn mã giảm giá</p>
                          )}
                        </div>
                        <ChevronForwardLine className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flexBetween py-6 text-sm font-semibold uppercase">
                        <div className="flexStart gap-2">
                          <span className="font-medium text-xl">Tổng tiền</span>
                          <InformationCircleSolid className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-bold text-primary">
                          {formatCurrencyVN(planPrice - discountPrice)}
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <Link
                        href="/sale-plan/order/succeeded"
                        onClick={() => {
                          handleDispatchPlanId(
                            salePlanByIdResponse?.data?.data?.id ?? '',
                          );
                        }}
                      >
                        <Button
                          type="button"
                          size="md"
                          color="green"
                          className="btn-primary bg-primary w-3/5"
                          onClick={handleSubmit(onSubmit)}
                        >
                          Thanh toán
                        </Button>
                      </Link>
                    </div>
                  </FormProvider>
                </div>
              </div>
            </div>
          </div>
        )}
      </StepHeaderContext.Consumer>
      <AddressModal
        isOpen={isOpenAddressModal}
        handleClose={handleCloseAddressModal}
        selected={selectedAddress}
        handleSelect={handleAddressSelect}
      />
      <PaymenMethodModal
        isOpen={isOpenPaymentMethodModal}
        handleClose={handleClosePaymentMethodModal}
        selected={selectedPaymentMethod}
        handleSelect={handlePaymentMethodSelect}
      />
      <DiscountModal
        isOpen={isOpenDiscountModal}
        handleClose={handleCloseDiscountModal}
        selected={selectedDiscount}
        handleSelect={handleDiscountSelect}
      />
    </>
  );
};

export default SalePlanCheckout;
