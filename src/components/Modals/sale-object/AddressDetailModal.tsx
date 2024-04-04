'use client';
import { AddressType } from '@/types/AddressType';
import { addressData } from '@/utils/dataTest/addressData';
import { FC, Fragment, useState } from 'react';
import { BaseModal } from '../BaseModal';
import { Button } from '@/components/MaterialTailwind';
import AddLine from '@/components/SvgComponents/line/AddLine';

type ModalAddressTypeProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleSelect: (selecting?: AddressType) => void;
  selected?: AddressType;
};
const AddressModal: FC<ModalAddressTypeProps> = ({
  isOpen,
  selected, // sử dụng thuộc tính address thay vì selected
  handleClose,
  handleSelect,
}) => {
  const [selecting, setSelecting] = useState<AddressType>();

  const handleSelecting = (selecting?: AddressType) => {
    setSelecting(selecting);
  };

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      title={'Địa chỉ của tôi'}
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
      <div className="max-h-[400px] overflow-auto px-5">
        {addressData?.map((addressDetail) => (
          <div
            key={addressDetail.id}
            className="flexBetween border-b border-underground"
          >
            <label className="flex cursor-pointer items-center justify-between gap-4">
              <input
                type="radio"
                name="address"
                className="transition-primary cursor-pointer text-primary focus:ring-0"
                value={addressDetail.id}
                checked={selecting?.id === addressDetail.id}
                onChange={() => handleSelecting(addressDetail)}
              />

              <div className="flex justify-between py-3">
                <div className="">
                  <div className="flex justify-start gap-2">
                    <h1 className="font-semibold">{addressDetail.name}</h1>
                    <div className="border-l"></div>
                    <p className="font-normal text-gray-600">
                      {addressDetail.phoneNumber}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {addressDetail.address}
                  </p>
                  {addressDetail.isDefault ? (
                    <span className="rounded-md bg-quaternary px-2 py-1 text-xs text-white">
                      Mặc định
                    </span>
                  ) : null}
                </div>
              </div>
            </label>
            <button className="text-sm text-blue-500 hover:text-blue-700">
              Cập nhật
            </button>
          </div>
        ))}
        <div
          className="flex cursor-pointer items-center justify-start gap-4"
          onClick={() => {
            alert('modal add address');
          }}
        >
          <AddLine className="w-5 h-5text-primary" />
          <div className="flexColStart py-3">
            <h1 className="font-semibold">Thêm địa chỉ</h1>
            <p className="text-sm">Thêm địa chỉ mà bạn muốn nhận hàng</p>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default AddressModal;
