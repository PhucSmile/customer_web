import { SalePlanType } from '@/schemas/SalePlanSchemas/SalePlanSchema';
import { baseGet, basePost } from '../../base/baseApi';
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { SalePlanDescriptionType } from '@/schemas/SalePlanSchemas/SalePlanDescriptionSchema';
import { SalePlanComboType } from '@/schemas/SalePlanSchemas/SalePlanComboSchema';
import {
  UseMutationOptionsType,
  UseQueryOptionsType,
} from '@/types/ReactQueryHookOptionsType';
import { SalePlanComboDetailsType } from '@/schemas/SalePlanSchemas/SalePlanComboDetailsSchema';
import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from '@/types/APIResponseType';
import {
  SalePlanSearchDetailsType,
  SalePlanSearchType,
} from '@/schemas/SalePlanSchemas/SalePlanSearchDetailsSchema';
import { SalePlanDetailsType } from '@/schemas/SalePlanSchemas/SalePlanDetailsSchema';
import { SalePlanGetManyPricesType } from '@/schemas/SalePlanSchemas/SalePlanGetManyPricesSchema';

//Queries
const getSalePlanRecommendedQueryFn = async () =>
  baseGet<SalePlanType[]>('app_service/sale_plan/recommended');

const getAllSalePlanQueryFn = async () =>
  baseGet<SalePlanType[]>(`app_service/sale_plan/view_by_category`);

const getSalePlanByCategoryIdQueryFn = async (category_id: string) =>
  baseGet<SalePlanType[]>(
    `app_service/sale_plan/view_by_category?category_id=${category_id}`,
  );

const getSalePlanByIdQueryFn = async (plan_id: string) =>
  baseGet<SalePlanDetailsType>(`app_service/sale_plan/${plan_id}`);

const getSalePlanDescriptionBySalePlanIdQueryFn = async (plan_id: string) =>
  baseGet<SalePlanDescriptionType>(
    `app_service/sale_plan/${plan_id}/description`,
  );

const getSalePlanComboBySalePlanIdQueryFn = async (plan_id: string) =>
  baseGet<SalePlanComboType[]>(`app_service/sale_plan/${plan_id}/combo`);

const getSalePlanComboDetailsBySalePlanIdQueryFn = async (plan_id: string) =>
  baseGet<SalePlanComboDetailsType[]>(
    `app_service/sale_plan/${plan_id}/combo/details`,
  );

const searchSalePlanMutationFn = async (data: SalePlanSearchType) =>
  basePost<SalePlanSearchType, SalePlanSearchDetailsType[]>(
    `app_service/sale_plan/search`,
    data,
  );

const GetManyPricesSalePlanMutationFn = async (data: string[]) =>
  basePost<string[], SalePlanGetManyPricesType[]>(
    `app_service/sale_plan/get_many_prices`,
    data,
  );

const getSalePlanTopPurchasedQueryFn = async () =>
  baseGet<SalePlanType[]>('app_service/sale_plan/top_purchased');

//Prefetches
export const PrefetchSalePlanRecommendedQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['sale_plan_recommended'],
    getSalePlanRecommendedQueryFn,
  );

  return dehydrate(queryClient);
};

export const PrefetchSalePlanQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['sale_plan_view_by_category'],
    getAllSalePlanQueryFn,
  );

  return dehydrate(queryClient);
};

//Hooks
export const useGetSalePlanRecommendedQuery = (
  options?: UseQueryOptionsType<SalePlanType[]>,
) =>
  useQuery(['sale_plan_recommended'], getSalePlanRecommendedQueryFn, options);

export const useGetAllSalePlanQuery = (
  options?: UseQueryOptionsType<SalePlanType[]>,
) => useQuery(['sale_plan_view_by_category'], getAllSalePlanQueryFn, options);

export const useGetSalePlanByCategoryIdQuery = (
  category_id: string,
  options?: UseQueryOptionsType<SalePlanType[]>,
) =>
  useQuery(
    ['sale_plan_by_category_id', category_id],
    async () => await getSalePlanByCategoryIdQueryFn(category_id),
    options,
  );

export const useGetSalePlanByIdQuery = (
  plan_id: string,
  options?: UseQueryOptionsType<SalePlanDetailsType>,
) =>
  useQuery(
    ['sale_plan_details', plan_id],
    () => getSalePlanByIdQueryFn(plan_id),
    options,
  );

export const useGetSalePlanDescriptionBySalePlanIdQuery = (
  plan_id: string,
  options?: UseQueryOptionsType<SalePlanDescriptionType>,
) =>
  useQuery(
    ['sale_plan_description', plan_id],
    async () => await getSalePlanDescriptionBySalePlanIdQueryFn(plan_id),
    options,
  );

export const useGetSalePlanComboBySalePlanIdQuery = (
  plan_id: string,
  options?: UseQueryOptionsType<SalePlanComboType[]>,
) =>
  useQuery(
    ['sale_plan_combo', plan_id],
    async () => await getSalePlanComboBySalePlanIdQueryFn(plan_id),
    options,
  );

export const useGetSalePlanComboDetailsBySalePlanIdQuery = (
  plan_id: string,
  options?: UseQueryOptionsType<SalePlanComboDetailsType[]>,
) =>
  useQuery(
    ['sale_plan_combo_details'],
    async () => await getSalePlanComboDetailsBySalePlanIdQueryFn(plan_id),
    options,
  );

export const useSearchSalePlanMutation = (
  options?: UseMutationOptionsType<
    SalePlanSearchType,
    SalePlanSearchDetailsType[]
  >,
) =>
  useMutation<
    AxiosResponse<APIResponseType<SalePlanSearchDetailsType[]>>,
    AxiosError,
    SalePlanSearchType
  >(searchSalePlanMutationFn, options);

export const useGetManyPricesSalePlanMutation = (
  options?: UseMutationOptionsType<string[], SalePlanGetManyPricesType[]>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<SalePlanGetManyPricesType[]>>,
    AxiosError,
    string[]
  >(GetManyPricesSalePlanMutationFn, options);

export const useGetSalePlanTopPurchasedQuery = (
  options?: UseQueryOptionsType<SalePlanType[]>,
) =>
  useQuery(
    ['sale_plan_top_purchased'],
    getSalePlanTopPurchasedQueryFn,
    options,
  );
