import { SalePlanCategoryType } from '@/schemas/SalePlanSchemas/SalePlanCategorySchema';
import { baseGet } from '../../base/baseApi';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { UseQueryOptionsType } from '@/types/ReactQueryHookOptionsType';

const getAllSalePlanCategoryQueryFn = async () =>
  baseGet<SalePlanCategoryType[]>('app_service/sale_plan_category');

export const PrefetchSalePlanCategoryQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['sale_plan_category'],
    getAllSalePlanCategoryQueryFn,
  );

  return dehydrate(queryClient);
};

export const useGetSalePlanCategoryQuery = (
  options?: UseQueryOptionsType<SalePlanCategoryType[]>,
) => useQuery(['sale_plan_category'], getAllSalePlanCategoryQueryFn, options);
