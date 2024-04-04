'use client';
import { SaleObjectComboType } from '@/types/SaleObjectTypes/SaleObjectComboType';
import { saleObjectComboData } from '@/utils/dataTest/saleObjectComboData';
import Image from 'next/image';
import { FC, Fragment, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import { addressData } from '@/utils/dataTest/addressData';
import { Button, Typography } from '@/components/MaterialTailwind';
import { BaseModal } from '../../BaseModal';
import AddLine from '@/components/SvgComponents/line/AddLine';
import CalendarLine from '@/components/SvgComponents/line/CalendarLine';
import ChevronForwardLine from '@/components/SvgComponents/line/ChevronForwardLine';
import ShuffleLine from '@/components/SvgComponents/line/ShuffleLine';
import TimeLine from '@/components/SvgComponents/line/TimeLine';
import LocationLine from '@/components/SvgComponents/line/LocationLine';

type ModalQuickConfirmSalePlanTypeProps = {
  isOpen: boolean;
  handleClose: () => void;
};
const QuickConfirmSalePlanModal: FC<ModalQuickConfirmSalePlanTypeProps> = ({
  isOpen,
  handleClose,
}) => {
  const [selecting, setSelecting] = useState<SaleObjectComboType>();

  const handleSelecting = (selecting?: SaleObjectComboType) => {
    setSelecting(selecting);
  };
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (
    newValue: DateValueType,
    event?: HTMLInputElement | null,
  ) => {
    setValue(newValue);
  };

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      title={'Xác nhận nhanh'}
      modalClassName="max-w-lg min-w-fit"
      modalBodyClassName="p-0"
      modalFooter={
        <div className="flex justify-end gap-2">
          <Button
            variant="text"
            color="gray"
            size="md"
            className="btn-secondary hover:text-white hover:!bg-inactive text-black uppercase"
            onClick={() => {
              handleClose();
            }}
          >
            Hủy
          </Button>
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
      <div className="flex flex-col lg:flex-row py-4">
        <div className="max-h-[500px] overflow-auto px-4 border-r">
          <div className="">
            <Typography variant="h5" className="font-medium">
              Chọn combo
            </Typography>
          </div>
          <div className="max-h-[300px] overflow-auto px-2 grid grid-cols-2 shadow-md md:grid-cols-3 lg:grid-cols-2">
            {saleObjectComboData?.map((saleObjectCombo) => (
              <div
                key={saleObjectCombo.id}
                className="flex flex-col items-center bg-white m-2 rounded-lg shadow-md cursor-pointer"
              >
                <div className="transition-primary relative h-36 w-36 overflow-hidden">
                  <Image
                    src={saleObjectCombo.image_url}
                    alt=""
                    height={120}
                    width={120}
                    className="duration-5000 absolute inset-0 mx-auto h-full rounded-full object-none text-center transition-opacity ease-in-out"
                  />
                </div>
                <span
                  title={saleObjectCombo.name}
                  className="text-sm p-2 w-full bg-underground rounded-b-lg whitespace-nowrap overflow-clip truncate"
                >
                  {saleObjectCombo.name}
                </span>
              </div>
            ))}
            <div className="flex flex-col items-center justify-between bg-white m-2 rounded-lg shadow-md border border-borderColor cursor-pointer">
              <div className="transition-primary relative text-center w-40 overflow-hidden">
                <ShuffleLine className="w-20 mx-auto" />
              </div>
              <Typography
                variant="small"
                className="w-full text-sm p-2 bg-underground rounded-b-lg whitespace-nowrap overflow-clip truncate"
              >
                Chọn ngẫu nhiên
              </Typography>
            </div>
          </div>
          <div className="my-4">
            <div className="flexStart gap-2">
              <CalendarLine className="w-5" />
              <Typography variant="h6" className="font-medium">
                Deliver frequency (every 1 week)
              </Typography>
            </div>
            <div className="flexBetween max-w-fit gap-2 py-2">
              <button className="bg-underground hover:border hover:border-quaternary rounded-md w-10 h-10 hover:bg-bgSelected">
                T2
              </button>
              <button className="bg-underground hover:border hover:border-quaternary rounded-md w-10 h-10 hover:bg-bgSelected">
                T3
              </button>
              <button className="bg-underground hover:border hover:border-quaternary rounded-md w-10 h-10 hover:bg-bgSelected">
                T4
              </button>
              <button className="bg-underground hover:border hover:border-quaternary rounded-md w-10 h-10 hover:bg-bgSelected">
                T5
              </button>
              <button className="bg-underground hover:border hover:border-quaternary rounded-md w-10 h-10 hover:bg-bgSelected">
                T6
              </button>
              <button className="bg-underground hover:border hover:border-quaternary rounded-md w-10 h-10 hover:bg-bgSelected">
                T7
              </button>
              <button className="bg-underground hover:border hover:border-quaternary rounded-md w-10 h-10 hover:bg-bgSelected">
                CN
              </button>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="bg-underground p-2 rounded-md max-w-xl">
            <div>
              You will receive{' '}
              <span className="font-medium text-primary">
                &quot;Trưa nay ăn gì&quot;
              </span>{' '}
              repeatedly every week on{' '}
              <span className="font-medium text-primary">T2, T4, T6 </span>
              with estimated delivery time 8:00 - 19:00 ar{' '}
              <span className="font-medium text-primary">Home</span> from
              01/04/2023 to 30/04/2024
            </div>
          </div>
          <div className="my-2 border-b">
            <div className="flexStart gap-2 whitespace-nowrap font-medium text-gray-600">
              <TimeLine className="w-5 h-5" />
              <Typography variant="h6">Ngày giao</Typography>
            </div>
            <div className="m-2">
              <Datepicker
                primaryColor="green"
                useRange={false}
                asSingle={true}
                value={value}
                displayFormat={'DD/MM/YYYY'}
                onChange={handleValueChange}
                i18n="vi"
              />
            </div>
          </div>
          <div className="min-w-fit">
            <div className="flexBetween font-medium text-gray-600 cursor-pointer">
              <div className="flexStart py-1 gap-2 font-medium text-gray-600">
                <LocationLine className="w-5 h-5" />
                <Typography variant="h6">Địa chỉ nhận hàng</Typography>
              </div>
              <ChevronForwardLine className="w-5" />
            </div>
            <div className="max-h-[300px] overflow-auto px-5">
              {addressData?.map((addressDetail) => (
                <div
                  key={addressDetail.id}
                  className="flexBetween border-b gap-2 border-underground"
                >
                  <label className="flex cursor-pointer items-center justify-between gap-4">
                    <input
                      type="radio"
                      name="address"
                      className="transition-primary cursor-pointer text-primary focus:ring-0"
                      value={addressDetail.id}
                      checked={selecting?.id === addressDetail.id}
                      // onChange={() => handleSelecting(addressDetail)}
                    />

                    <div className="flex justify-between py-3">
                      <div className="">
                        <div className="flex justify-start gap-2">
                          <h1 className="font-semibold">
                            {addressDetail.name}
                          </h1>
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
                  <button className="whitespace-nowrap text-sm text-blue-500 hover:text-blue-700">
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
                <AddLine className="w-6 h-6 text-primary" />
                <div className="flexColStart py-3">
                  <h1 className="font-semibold">Thêm địa chỉ</h1>
                  <p className="text-sm">Thêm địa chỉ mà bạn muốn nhận hàng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default QuickConfirmSalePlanModal;
