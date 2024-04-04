'use client';
import { formatCurrencyVN } from '@/utils/numberUtils';
import Image from 'next/image';
import { Typography, Button } from '@/components/MaterialTailwind';

const OrderFailed = ({ params }: { params: { plan_register_id: string } }) => {
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
                  className="text-red-500 font-medium py-2"
                >
                  Thanh toán thất bại!
                </Typography>
                <div className="bg-red-100 p-2 text-left rounded-md">
                  <Typography variant="small" className="">
                    Order payment failed. Please try again!
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
            <Button
              onClick={() => {
                sessionStorage.removeItem('sale-plan');
              }}
              color="green"
              size="sm"
              className="btn-primary font-semibold block mx-auto normal-case bg-primary w-3/5 lg:text-sm lg:w-2/5"
            >
              Retry to pay
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderFailed;
