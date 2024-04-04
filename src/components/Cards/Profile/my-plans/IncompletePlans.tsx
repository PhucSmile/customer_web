import { useGetSalePlanRegisterDraftPackageIncompleteDraftQuery } from '@/api/appService/salePlan/salePlanRegisterDraftApi';
import { Button, Chip, Typography } from '@/components/MaterialTailwind';
import { SalePlanRegisterDraftPackageIncompleteType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/SalePlanRegisterDraftPackageIncompleteSchema';
import { formatFromISO8601 } from '@/utils/dateUtils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const IncompletePlans = () => {
  const router = useRouter();
  const { data: IncompletePlansResponse } =
    useGetSalePlanRegisterDraftPackageIncompleteDraftQuery();

  const handleCompleteOrder = (
    item: SalePlanRegisterDraftPackageIncompleteType,
  ) => {
    router.push(
      `/sale-plan/customize/${item.plan_id}/${item.plan_register_draft_id}`,
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {IncompletePlansResponse?.data?.data?.map((item, index) => (
        <div
          key={item.plan_id + index}
          className="border shadow-md rounded-md p-2 lg:p-4"
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
              onClick={() => handleCompleteOrder(item)}
            >
              Complete order
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
