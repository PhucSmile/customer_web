'use client';
import { PaymentMethodType } from '@/types/PaymentMethodType';
import { paymentMethodData } from '@/utils/dataTest/paymentMethodData';
import Image from 'next/image';
import { FC, Fragment, useState } from 'react';
import { BaseModal } from '../BaseModal';
import { Button } from '@/components/MaterialTailwind';
import SearchLine from '@/components/SvgComponents/line/SearchLine';

type ModalPaymentMethodTypeProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleSelect: (selecting?: PaymentMethodType) => void;
  selected?: PaymentMethodType;
};
const PaymenMethodModal: FC<ModalPaymentMethodTypeProps> = ({
  isOpen,
  selected,
  handleClose,
  handleSelect,
}) => {
  const [selecting, setSelecting] = useState<PaymentMethodType>();

  const handleSelecting = (selecting?: PaymentMethodType) => {
    setSelecting(selecting);
  };

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      modalClassName="max-w-xl min-w-fit"
      title={'Chọn phương thức thanh toán'}
      modalFooter={
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="btn-secondary text-xs uppercase"
            onClick={() => {
              handleClose();
            }}
          >
            Hủy
          </button>
          <Button
            className="btn-primary bg-primary"
            color="green"
            size="md"
            onClick={() => {
              handleClose();
            }}
          >
            Xác nhận
          </Button>
        </div>
      }
    >
      <div className="">
        <div className="relative mx-auto mt-4 w-full text-gray-600">
          <input
            className="transition-primary h-10 w-full rounded-lg border-2 border-gray-100 bg-underground pl-4 pr-10 text-sm font-medium placeholder:font-normal focus:border-green-400 focus:outline-none focus:ring-0"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mr-4 mt-2">
            <SearchLine className="w-5 h-5" />
          </button>
        </div>
        <div className="max-h-[400px] overflow-auto px-1">
          {paymentMethodData?.map((paymentMethodDetail) => (
            <label
              key={paymentMethodDetail.name}
              className="flex cursor-pointer items-center justify-between border-b border-underground"
              onChange={() => handleSelecting(paymentMethodDetail)}
            >
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex w-full items-center justify-start gap-2 py-3">
                  <div>
                    <Image
                      src={paymentMethodDetail.image_url}
                      width={80}
                      height={80}
                      className="h-auto"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-start">
                    <h1 className="font-semibold">
                      {paymentMethodDetail.name}
                    </h1>
                    <p className="font-normal text-gray-600">
                      {paymentMethodDetail.description}
                    </p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value={paymentMethodDetail.id}
                  className="transition-primary cursor-pointer text-primary checked:text-primary focus:ring-0"
                  checked={selecting?.id === paymentMethodDetail.id}
                  onChange={() => handleSelecting(paymentMethodDetail)}
                />
              </div>
            </label>
          ))}
        </div>
      </div>
    </BaseModal>
  );
};

export default PaymenMethodModal;
