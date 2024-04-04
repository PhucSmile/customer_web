import { useGetSalePlanRegisterPackagePurchasedQuery } from '@/api/appService/salePlan/salePlanRegisterApi';
import { Button, Chip, Typography } from '@/components/MaterialTailwind';
import { formatFromISO8601 } from '@/utils/dateUtils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const PurchasedPlans = () => {
  const router = useRouter();
  const { data: PurchasedPlansResponse } =
    useGetSalePlanRegisterPackagePurchasedQuery();

  const handleNextShipment = () => {
    router.push('profile/my-plans/next-shipment');
  };

  return (
    <div className="">
      <div className="flexStart gap-2">
        <Button
          variant="outlined"
          color="gray"
          className="rounded-full py-1 px-2 normal-case text-gray-600 bg-underground hover:bg-primary hover:text-white"
        >
          Active
        </Button>
        <Button
          variant="outlined"
          color="gray"
          className="rounded-full py-1 px-2 normal-case text-gray-600 bg-underground hover:bg-primary hover:text-white"
        >
          Expired
        </Button>
        <Button
          variant="outlined"
          color="gray"
          className="rounded-full py-1 px-2 normal-case text-gray-600 bg-underground hover:bg-primary hover:text-white"
        >
          Time
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PurchasedPlansResponse?.data?.data?.map((item, index) => (
          <div
            key={item.plan_id + index}
            className="border shadow-md rounded-md m-2 p-2 lg:p-4"
          >
            <Chip
              value={'Incomplete'}
              size="sm"
              className="inline-block bg-orange-50 normal-case text-secondary"
            />
            <div className="my-2">
              <div className="flex justify-start gap-4">
                <Image
                  src="/img/plans/plan5.png"
                  alt="profile"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-24 h-full max-h-24 rounded-md object-fill"
                />
                <div>
                  <Typography variant="h5">{item.plan_name}</Typography>
                  <Typography variant="small">
                    Expires on {formatFromISO8601(item.expire)}
                  </Typography>
                </div>
              </div>
              <div>
                <div className="flex justify-center text-center m-2">
                  <div className="p-2 border-r">
                    <Typography variant="small" className="normal-case">
                      Confirmed
                    </Typography>
                    <Typography className="font-semibold">
                      {item.confirmed}
                    </Typography>
                  </div>
                  <div className="p-2 ">
                    <Typography variant="small" className="normal-case">
                      Unused
                    </Typography>
                    <Typography className="font-semibold">
                      {item.unused}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-2">
              <Button
                variant="outlined"
                color="green"
                size="sm"
                className="!outline-primary hover:opacity-100 p-2 normal-case text-primary hover:!bg-primary hover:text-white !transition-primary !duration-300"
                onClick={() => handleNextShipment()}
              >
                Complete order
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
