'use client';
import {
  useGetSalePlanRegisterPackageBeforeExpiredPaidQuery,
  useGetSalePlanRegisterPackagePurchasedQuery,
} from '@/api/appService/salePlan/salePlanRegisterApi';
import { useGetSalePlanRegisterDraftPackageBeforeExpireDraftQuery } from '@/api/appService/salePlan/salePlanRegisterDraftApi';
import WarningLine from '../SvgComponents/line/WarningLine';
import { useLoginContext } from '../Context/LoginContext';

const PlanNotification = () => {
  const { isLogin } = useLoginContext();

  // const {
  //   data: PackageBeforeExpiredPaidResponse,
  //   isFetching: isPackageBeforeExpiredPaidFetching,
  // } = useGetSalePlanRegisterPackageBeforeExpiredPaidQuery();

  // const {
  //   data: PackageBeforeExpiredDraftResponse,
  //   isFetching: isPackageBeforeExpiredDraftFetching,
  // } = useGetSalePlanRegisterDraftPackageBeforeExpireDraftQuery();

  return (
    <>
      {isLogin ? (
        <div className="flex h-10 items-center justify-center bg-[#FFEDD5]">
          <div className=" flexCenter gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FED7AA]">
              <WarningLine className="w-5 h-5 text-[#F97316]" />
            </div>

            <h1 className="text-base font-medium">
              Use packages leftover before it EXPIRED!
            </h1>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PlanNotification;
