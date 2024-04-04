import { SaleObjectCategoryType } from '@/schemas/SaleObjectSchemas/SaleObjectCategorySchemas/SaleObjectCategorySchema';
import { baseGet } from '../../base/baseApi';
import { QueryPagePropsType } from '@/types/QueryPagePropsType';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { UseQueryOptionsType } from '@/types/ReactQueryHookOptionsType';
import { SaleObjectPackCategoryType } from '@/schemas/SaleObjectSchemas/SaleObjectCategorySchemas/SaleObjectPackCategorySchema';
import { SaleObjectComboCategoryType } from '@/schemas/SaleObjectSchemas/SaleObjectCategorySchemas/SaleObjectComboCategorySchema';
import { SaleObjectPlanCategoryType } from '@/schemas/SaleObjectSchemas/SaleObjectCategorySchemas/SaleObjectPlanCategorySchema';

//Queries
const getAllSaleObjectCategoryQueryFn = async () =>
  baseGet<SaleObjectCategoryType[]>(`app_service/sale_object_category`);

const getSaleObjectCategoryQueryFn = async (props?: QueryPagePropsType) =>
  baseGet<SaleObjectCategoryType[]>(`app_service/sale_object_category`, {
    params: {
      ...props,
    },
  });

const getRootItemsSaleObjectCategoryQueryFn = async () =>
  baseGet<SaleObjectCategoryType[]>(
    `app_service/sale_object_category/get_root_items`,
  );

const getSaleObjectPackCategoryByRootCategoryIdQueryFn = async (
  root_category_id: string,
) =>
  baseGet<SaleObjectPackCategoryType[]>(
    `app_service/sale_object_category/${root_category_id}/pack`,
  );

const getItemsSaleObjectCategoryByRootIdQueryFn = async (root_id: string) =>
  baseGet<SaleObjectCategoryType[]>(
    `app_service/sale_object_category/get_items_by_root/${root_id}`,
  );

const getSaleObjectComboCategoryByRootCategoryIdQueryFn = async (
  root_category_id: string,
) =>
  baseGet<SaleObjectComboCategoryType[]>(
    `app_service/sale_object_category/${root_category_id}/combo`,
  );

const getSaleObjectPlanCategoryByRootCategoryIdQueryFn = async (
  root_category_id: string,
) =>
  baseGet<SaleObjectPlanCategoryType[]>(
    `app_service/sale_object_category/${root_category_id}/plan`,
  );

const getPacksByCategoryIdQueryFn = async (category_id: string) =>
  baseGet<SaleObjectPackCategoryType[]>(
    `app_service/sale_object_category/get_packs_by_category/${category_id}`,
  );

const getCombosByCategoryIdQueryFn = async (category_id: string) =>
  baseGet<SaleObjectComboCategoryType[]>(
    `app_service/sale_object_category/get_combos_by_category/${category_id}`,
  );

//Prefetches
export const PrefetchSaleObjectCategoryQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['sale_object_category'],
    getAllSaleObjectCategoryQueryFn,
  );

  return dehydrate(queryClient);
};

export const PrefetchRootItemsSaleObjectCategoryQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['sale_object_category_root_items'],
    getRootItemsSaleObjectCategoryQueryFn,
  );

  return dehydrate(queryClient);
};

//Hooks
export const useGetSaleObjectCategoryQuery = (
  props?: QueryPagePropsType,
  options?: UseQueryOptionsType<SaleObjectCategoryType[]>,
) =>
  useQuery(
    ['sale_object_category'],
    () => getSaleObjectCategoryQueryFn(props),
    options,
  );

export const useGetRootItemsSaleObjectCategoryQuery = (
  options?: UseQueryOptionsType<SaleObjectCategoryType[]>,
) =>
  useQuery(
    ['sale_object_category_root_items'],
    getRootItemsSaleObjectCategoryQueryFn,
    options,
  );

export const useGetItemsSaleObjectCategoryByRootIdQuery = (
  root_id: string,
  options?: UseQueryOptionsType<SaleObjectCategoryType[]>,
) =>
  useQuery(
    ['sale_object_category_items', root_id],
    async () => await getItemsSaleObjectCategoryByRootIdQueryFn(root_id),
    options,
  );

export const useGetSaleObjectPackCategoryByRootCategoryIdQuery = (
  root_category_id: string,
  options?: UseQueryOptionsType<SaleObjectPackCategoryType[]>,
) =>
  useQuery(
    ['sale_object_pack_category', root_category_id],
    async () =>
      await getSaleObjectPackCategoryByRootCategoryIdQueryFn(root_category_id),
    options,
  );

export const useGetSaleObjectComboCategoryByRootCategoryIdQuery = (
  root_category_id: string,
  options?: UseQueryOptionsType<SaleObjectComboCategoryType[]>,
) =>
  useQuery(
    ['sale_object_combo_category', root_category_id],
    async () =>
      await getSaleObjectComboCategoryByRootCategoryIdQueryFn(root_category_id),
    options,
  );

export const useGetSaleObjectPlanCategoryByRootCategoryIdQuery = (
  root_category_id: string,
  options?: UseQueryOptionsType<SaleObjectPlanCategoryType[]>,
) =>
  useQuery(
    ['sale_object_plan_category', root_category_id],
    async () =>
      await getSaleObjectPlanCategoryByRootCategoryIdQueryFn(root_category_id),
    options,
  );

export const useGetPacksByRootIdQuery = (
  root_id: string,
  options?: UseQueryOptionsType<SaleObjectPackCategoryType[]>,
) =>
  useQuery(
    ['sale_object_category', 'get_packs_by_category', root_id],
    async () => await getPacksByCategoryIdQueryFn(root_id),
    options,
  );

export const useGetCombosByRootIdQuery = (
  root_id: string,
  options?: UseQueryOptionsType<SaleObjectComboCategoryType[]>,
) =>
  useQuery(
    ['sale_object_category', 'get_combos_by_category', root_id],
    async () => await getCombosByCategoryIdQueryFn(root_id),
    options,
  );
