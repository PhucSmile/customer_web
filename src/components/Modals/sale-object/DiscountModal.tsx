'use client';
import { DiscountType } from '@/types/DiscountType';
import { discountData } from '@/utils/dataTest/discountData';
import Image from 'next/image';
import { FC, Fragment, useState } from 'react';
import { BaseModal } from '../BaseModal';
import { Button } from '@/components/MaterialTailwind';

type ModalDiscountTypeProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleSelect: (selecting?: DiscountType) => void;
  selected?: DiscountType;
};
const DiscountModal: FC<ModalDiscountTypeProps> = ({
  isOpen,
  selected,
  handleClose,
  handleSelect,
}) => {
  const [selecting, setSelecting] = useState<DiscountType>();

  const handleSelecting = (selecting?: DiscountType) => {
    setSelecting(selecting);
  };

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      title={'Chọn mã giảm giá'}
      modalClassName="max-w-xl min-w-fit"
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
            className="transition-primary h-14 w-full rounded-lg border-2 border-gray-100 bg-underground pl-4 pr-28 text-sm font-medium placeholder:font-normal focus:border-green-400 focus:outline-none focus:ring-0"
            type="search"
            name="submitVoucher"
            placeholder="Nhập mã giảm giá"
          />
          <Button
            type="submit"
            size="sm"
            color="green"
            className="btn-primary absolute right-0 top-1 mr-4 bg-primary items-center"
          >
            Áp dụng
          </Button>
        </div>
        <div className="max-h-[400px] overflow-auto px-1">
          {discountData?.map((discountDetail) => (
            <label
              key={discountDetail.id}
              className="flex cursor-pointer items-center justify-between border-b border-underground"
              onChange={() => handleSelecting(discountDetail)}
            >
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex w-full items-center justify-start gap-2 py-3">
                  <div>
                    <Image
                      src={discountDetail.image_url}
                      alt=""
                      width={80}
                      height={80}
                      className="h-auto"
                    />
                  </div>
                  <div className="flex flex-col justify-start">
                    <h1 className="font-semibold">
                      Giảm {discountDetail.discountPercent}%
                    </h1>
                    <p className="font-normal text-gray-600">
                      {discountDetail.description}
                    </p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="discount"
                  className="transition-primary cursor-pointer text-primary focus:ring-primary"
                  value={discountDetail.id}
                  checked={selecting?.id === discountDetail.id}
                  onChange={() => handleSelecting(discountDetail)}
                />
              </div>
            </label>
          ))}
        </div>
      </div>
    </BaseModal>
  );
};

export default DiscountModal;
