import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { SalePlanRegisterStatusType } from '@/schemas/SalePlanSchemas/SalePlanRegisterStatusSchemas/SalePlanRegisterStatusSchema';
import { baseGet } from '../../base/baseApi';
import { UseQueryOptionsType } from '@/types/ReactQueryHookOptionsType';

//Queries
const getGetSalePlanRegisterStatusQueryFn = async () =>
  baseGet<SalePlanRegisterStatusType[]>(
    'app_service/sale_plan_register_status',
  );

//Prefetches
export const PrefetchSalePlanRegisterStatusQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['sale_plan_register', 'sale_plan_register_status'],
    getGetSalePlanRegisterStatusQueryFn,
  );
  return dehydrate(queryClient);
};

//Hooks
export const useGetSalePlanRegisterStatusQuery = (
  options?: UseQueryOptionsType<SalePlanRegisterStatusType[]>,
) =>
  useQuery(
    ['sale_plan_register', 'sale_plan_register_status'],
    getGetSalePlanRegisterStatusQueryFn,
    options,
  );
