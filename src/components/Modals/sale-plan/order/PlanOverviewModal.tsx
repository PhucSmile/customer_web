'use client';
import { SaleObjectComboType } from '@/types/SaleObjectTypes/SaleObjectComboType';
import Image from 'next/image';
import { FC, useState } from 'react';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import { Button, Chip, Typography } from '@/components/MaterialTailwind';
import { BaseModal } from '../../BaseModal';
import TimeLine from '@/components/SvgComponents/line/TimeLine';
import LocationLine from '@/components/SvgComponents/line/LocationLine';
import { useGetSalePlanRegisterPurchasePlanOverviewByRegisterIdQuery } from '@/api/appService/salePlan/salePlanRegisterApi';
import { formatFromISO8601 } from '@/utils/dateUtils';
import { useRouter } from 'next/navigation';

type ModalPlanOverviewTypeProps = {
  plan_register_id: string;
  isOpen: boolean;
  handleClose: () => void;
};
const PlanOverviewModal: FC<ModalPlanOverviewTypeProps> = ({
  plan_register_id,
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

  const router = useRouter();

  const {
    data: purchasePlanOverviewResponse,
    isFetching: ispurchasePlanOverviewResponseFetching,
  } = useGetSalePlanRegisterPurchasePlanOverviewByRegisterIdQuery(
    plan_register_id ?? '',
  );

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      title={'Welcome!'}
      modalTitleClassName="mx-auto text-primary"
      modalClassName="w-fit"
      size="sm"
      modalBodyClassName="p-4 text-black"
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
            Trở lại
          </Button>
          <Button
            className="btn-primary bg-primary"
            color="green"
            size="md"
            onClick={() => {
              handleClose();
              router.push(`/`);
            }}
          >
            Quay về Trang chủ
          </Button>
        </div>
      }
    >
      <div className="mx-auto text-center max-w-lg">
        <div>
          <Typography variant="h6" className="pb-4">
            We emailed you details about your order
          </Typography>
        </div>
        <div className="mx-auto mb-4 p-4 flex justify-center items-start gap-4 border shadow-md rounded-md text-center">
          <div className="flex flex-col justify-start gap-2">
            <div className="h-40 w-40 relative overflow-hidden rounded-md">
              <Image
                src={`/img/plans/plan2.png`}
                alt=""
                fill
                priority
                className="absolute"
              />
            </div>
            <Typography className="font-semibold">
              {purchasePlanOverviewResponse?.data?.data?.plan_overview
                .plan_name ?? ''}
            </Typography>
          </div>
          <div className="text-start">
            <Typography>Giao 10 packages</Typography>
            <Typography className="text-secondary">
              Từ{' '}
              {formatFromISO8601(
                purchasePlanOverviewResponse?.data?.data?.plan_overview
                  .valid_from_date,
              )}{' '}
              - Đến{' '}
              {formatFromISO8601(
                purchasePlanOverviewResponse?.data?.data?.plan_overview
                  .valid_to_date,
              )}
            </Typography>
          </div>
        </div>
        <div className="p-4 border shadow-md rounded-md">
          <Typography variant="h6" className="">
            Overview
          </Typography>
          <div className="flex flex-col">
            <div>
              <Chip
                variant="ghost"
                value="Your first shipment"
                className="inline-block m-2 normal-case text-base rounded-full text-black bg-bgChip"
              />
              <div className="flexStart border rounded-md items-center">
                <div className="p-2 border-r">
                  <Typography>
                    #
                    {purchasePlanOverviewResponse?.data?.data
                      ?.first_package_delivery.package_number ?? ''}
                  </Typography>
                  <Chip
                    variant="ghost"
                    color="green"
                    value="Confirmed"
                    size="sm"
                    className="inline-block normal-case text-xs font-normal"
                  />
                </div>
                <div className="mx-auto grow p-2">
                  <div className="flexStart gap-2">
                    <div className="h-24 w-24 relative rounded-md overflow-hidden">
                      <Image
                        src={`/img/plans/plan2.png`}
                        alt=""
                        fill
                        priority
                        className="absolute"
                      />
                    </div>
                    <Typography>
                      {purchasePlanOverviewResponse?.data?.data
                        ?.first_package_delivery.combo_name ?? ''}
                    </Typography>
                  </div>
                  <div className="flexCenter gap-4">
                    <div className="flexStart gap-2 ">
                      <TimeLine className="w-5 h-5" />
                      <Typography>
                        {formatFromISO8601(
                          purchasePlanOverviewResponse?.data?.data
                            ?.first_package_delivery.delivery_date ?? '',
                        )}
                      </Typography>
                    </div>
                    <div className="flex justify-start gap-2 items-center">
                      <LocationLine className="w-5 h-5" />
                      <Typography>
                        {purchasePlanOverviewResponse?.data?.data
                          ?.first_package_delivery.customer_address_alias ?? ''}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Chip
                variant="ghost"
                value="Ongoing shipment"
                className="inline-block m-2 normal-case text-base rounded-full text-black bg-bgChip"
              />
              <div>
                <ul className="text-start">
                  <li>1. Leftover packages have Confirmed</li>
                  <li>
                    2. Dễ dàng thay đổi combo với điều kiện cách 3 ngày so với
                    ngày hiện tại
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default PlanOverviewModal;
