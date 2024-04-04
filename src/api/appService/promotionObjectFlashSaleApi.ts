import { PromotionObjectFlashSaleType } from '@/schemas/PromotionObjectFlashSaleSchema';
import { baseGet } from '../base/baseApi';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { UseQueryOptionsType } from '@/types/ReactQueryHookOptionsType';

//Queries
const getAllPromotionObjectFlashSaleQueryFn = async () =>
  baseGet<PromotionObjectFlashSaleType[]>(
    `app_service/promotion_object_flash_sale`,
  );

const getPromotionObjectFlashSaleByIdQueryFn = async (id: string) =>
  baseGet<PromotionObjectFlashSaleType>(
    `app_service/promotion_object_flash_sale/${id}`,
  );

//Prefetches
export const PrefetchGetAllPromotionObjectFlashSaleQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['promotion_object_flash_sale'],
    getAllPromotionObjectFlashSaleQueryFn,
  );

  return dehydrate(queryClient);
};

//Hooks
export const useGetAllPromotionObjectFlashSaleQuery = (
  options?: UseQueryOptionsType<PromotionObjectFlashSaleType[]>,
) =>
  useQuery(
    ['promotion_object_flash_sale'],
    getAllPromotionObjectFlashSaleQueryFn,
    options,
  );

export const useGetPromotionObjectFlashSaleByIdQuery = (
  id: string,
  options?: UseQueryOptionsType<PromotionObjectFlashSaleType>,
) =>
  useQuery(
    ['promotion_object_flash_sale', id],
    () => getPromotionObjectFlashSaleByIdQueryFn(id),
    options,
  );
