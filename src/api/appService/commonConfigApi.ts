import { CommonConfigType } from '@/schemas/CommonConfigSchemas/CommonConfigSchema';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { baseGet } from '@/api/base/baseApi';
import { UseQueryOptionsType } from '@/types/ReactQueryHookOptionsType';

export const getCommonConfigQuery = async () =>
  baseGet<CommonConfigType>('managed_service/common_config/customer_web');

export const PrefetchCommonConfigQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['common_config'], getCommonConfigQuery);

  return dehydrate(queryClient);
};

export const useGetCommonConfigQuery = (
  options?: UseQueryOptionsType<CommonConfigType>,
) => useQuery(['common_config'], getCommonConfigQuery, options);
