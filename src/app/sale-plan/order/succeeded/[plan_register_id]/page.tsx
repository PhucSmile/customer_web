'use client';
import Link from 'next/link';
import { formatCurrencyVN } from '@/utils/numberUtils';
import { useState } from 'react';
import Image from 'next/image';
import { Typography, Button } from '@/components/MaterialTailwind';
import PlanOverviewModal from '@/components/Modals/sale-plan/order/PlanOverviewModal';
import { useParams } from 'next/navigation';
import { useGetSalePlanRegisterByRegisterIdQuery } from '@/api/appService/salePlan/salePlanRegisterApi';

const OrderSucceeded = ({
  params,
}: {
  params: { plan_register_id: string };
}) => {
  const [isOpenPlanOverviewModal, setIsOpenPlanOverviewModal] = useState(false);

  const param = useParams();

  const { data: salePlanByIdResponse, isFetching: isSalePlanByIdFetching } =
    useGetSalePlanRegisterByRegisterIdQuery(params.plan_register_id ?? '');

  const handleCloseSelectPakageModal = () => {
    setIsOpenPlanOverviewModal(false);
  };

  const handleOpenSelectPakageModal = () => {
    setIsOpenPlanOverviewModal(true);
  };
  return (
    <>
      <div className=" mx-auto py-10 text-center">
        <div className="rounded-lg max-w-[500px] bg-white mx-auto shadow-md py-2 text-center">
          <Typography
            variant="h4"
            className="border-b text-xl font-semibold pb-2"
          >
            Order
          </Typography>
          <div className="p-4">
            <div className="py-4">
              <div className="flex justify-center">
                <Image
                  src="/img/plans/plan4.png"
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              </div>
              <div className="mx-auto">
                <Typography
                  variant="h5"
                  className="text-primary font-medium py-2"
                >
                  Thanh toán thành công!
                </Typography>
                <div className="bg-green-100 p-2 text-left rounded-md">
                  <Typography variant="small" className="">
                    Thanks for supporting our vision of a safer agri-future in
                    Vietnam. Your purchase helps us make a positive impact.
                    Thank you!
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              <div className="flexBetween py-2 border-b">
                <Typography>OrderID</Typography>
                <Typography>1000001</Typography>
              </div>
              <div className="flexBetween py-2 border-b">
                <Typography>Paid via</Typography>
                <Typography>Ebills</Typography>
              </div>
              <div className="flexBetween py-2 border-b">
                <Typography>Total amount</Typography>
                <Typography className="font-medium text-xl">
                  {formatCurrencyVN(1000000)}
                </Typography>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/profile/my-plans">
              <Button
                onClick={() => {
                  sessionStorage.removeItem('sale-plan');
                }}
                color="green"
                size="sm"
                className="btn-primary font-semibold block mx-auto normal-case bg-primary w-3/5 lg:text-sm lg:w-2/5"
              >
                View order
              </Button>
            </Link>
            <Button
              onClick={() => {
                sessionStorage.removeItem('sale-plan');
                handleOpenSelectPakageModal();
              }}
              variant="outlined"
              color="green"
              size="sm"
              className="font-semibold text-primary hover:text-white hover:opacity-100 block mx-auto normal-case hover:!bg-primary !outline-primary w-3/5 lg:text-sm lg:w-2/5 !duration-300"
            >
              Plan overview
            </Button>
          </div>
        </div>
      </div>
      <PlanOverviewModal
        plan_register_id={params.plan_register_id}
        isOpen={isOpenPlanOverviewModal}
        handleClose={handleCloseSelectPakageModal}
      />
    </>
  );
};

export default OrderSucceeded;
