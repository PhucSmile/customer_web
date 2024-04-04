'use client';
import Link from 'next/link';
import { formatCurrencyVN } from '@/utils/numberUtils';
import { useState } from 'react';
import PaymenMethodModal from '@/components/Modals/sale-object/PaymentMethodModal';
import Image from 'next/image';
import { ShippingListbox } from '@/components/Listbox/ShippingListbox';
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
import InfomationCircleLine from '@/components/SvgComponents/line/InfomationCircleLine';
import ChevronForwardLine from '@/components/SvgComponents/line/ChevronForwardLine';
import BookMarkSharp from '@/components/SvgComponents/sharp/BookMarkSharp';
import CardLine from '@/components/SvgComponents/line/CardLine';
import PriceTagLine from '@/components/SvgComponents/line/PriceTag';

const SaleObjectCheckout = () => {
  const [selectedAddress, setSelectedAddress] = useState<AddressType>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethodType>();
  const [selectedDiscount, setSelectedDiscount] = useState<DiscountType>();
  const [selectedShipping, setSelectedShipping] = useState<ShippingType>();
  const [isOpenAddressModal, setIsOpenAddressModal] = useState(false);
  const [isOpenPaymentMethodModal, setIsOpenPaymentMethodModal] =
    useState(false);
  const [isOpenDiscountModal, setIsOpenDiscountModal] = useState(false);

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

  const defaultAddress: AddressType = addressData[0];
  const defaultPaymentMethod: PaymentMethodType = paymentMethodData[0];

  const calculateTotal = () => {
    return cartData.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0,
    );
  };

  const totalPrice = () => {
    return;
  };

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="py-2">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-5 lg:gap-5">
            <div className="rounded-lg bg-white shadow-md col-span-1 p-4 lg:col-span-3 lg:px-10">
              <h1 className="pb-8 text-2xl font-semibold">
                Thông tin giao hàng
              </h1>
              <div className="border-b border-t py-3">
                <h1 className="pb-2 font-bold">Địa chỉ nhận hàng</h1>
                <div
                  onClick={handleOpenAddressModal}
                  className="flex cursor-pointer items-center justify-between"
                >
                  <div className="flex justify-between py-3">
                    {selectedAddress ? (
                      <div>
                        <div className="flex justify-start gap-2">
                          <h1 className="font-semibold">
                            {selectedAddress.name}
                          </h1>
                          <div className="border-l"></div>
                          <p className="font-normal text-gray-600">
                            {selectedAddress.phoneNumber}
                          </p>
                        </div>
                        <div className="text-sm text-gray-600">
                          {selectedAddress.address}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex justify-start gap-2">
                          <h1 className="font-semibold">
                            {defaultAddress.name}
                          </h1>
                          <div className="border-l"></div>
                          <p className="font-normal text-gray-600">
                            {defaultAddress.phoneNumber}
                          </p>
                        </div>
                        <div className="text-sm text-gray-600">
                          {defaultAddress.address}
                        </div>
                      </div>
                    )}
                  </div>
                  <button>
                    <ChevronForwardLine className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="py-3">
                <label className="mb-3 inline-block text-base font-bold ">
                  Phương thức vận chuyển
                </label>
                <ShippingListbox
                  shippingData={shippingData}
                  selected={selectedShipping}
                  handleSelect={handleShippingSelect}
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
                        <p className="text-xs">{selectedPaymentMethod.name}</p>
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
              <div className="mt-8 text-center">
                <div className="flexBetween py-6 text-sm font-semibold uppercase">
                  <div className="flexStart gap-2">
                    <span>Tổng tiền</span>
                    <InfomationCircleLine className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {formatCurrencyVN(calculateTotal())}
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md col-span-2 p-4 lg:px-10">
              <div className="flex items-end justify-between border-b pb-8">
                <h1 className="text-2xl font-semibold">Thông tin đơn hàng</h1>
                <h2 className="text-lg font-semibold">3 sản phẩm</h2>
              </div>
              <table
                className="w-full table-fixed text-sm lg:text-base"
                cellSpacing="0"
              >
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="text-left" colSpan={2}>
                      Sản phẩm
                    </th>
                    <th className="text-right">GIá</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((cartItem) => (
                    <tr key={cartItem.name}>
                      <td className="pb-4 md:table-cell" colSpan={2}>
                        <div className="transition-primary flex items-center gap-2">
                          <div className="flex items-center">
                            <div className="indicator h-20 w-20 rounded-md border border-primary">
                              <Image
                                src={cartItem.image_url}
                                width={80}
                                height={80}
                                className="place-items-center rounded"
                                alt={cartItem.name}
                              />

                              <span className="badge-success badge indicator-item text-white">
                                {cartItem.quantity}
                              </span>
                            </div>
                            <p className="mb-2 md:ml-4 ">
                              {cartItem.name} - {cartItem.net_weight}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <span className="text-sm font-medium lg:text-base">
                          {formatCurrencyVN(cartItem.price * cartItem.quantity)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center m-2">
            <Button
              className="btn-primary w-3/5 lg:w-2/5 bg-primary"
              color="green"
              size="lg"
            >
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
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

export default SaleObjectCheckout;
