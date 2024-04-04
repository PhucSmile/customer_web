import { useMutation, useQuery } from '@tanstack/react-query';
import { baseGet, basePost } from '../../base/baseApi';
import { SaleObjectDetailsType } from '@/schemas/SaleObjectSchemas/SaleObjectDetailsSchema';
import {
  UseMutationOptionsType,
  UseQueryOptionsType,
} from '@/types/ReactQueryHookOptionsType';
import { SaleObjectGetManyPricesType } from '@/schemas/SaleObjectSchemas/SaleObjectGetManyPricesSchema';
import { APIResponseType } from '@/types/APIResponseType';
import { AxiosResponse, AxiosError } from 'axios';

//Queries
const getSaleObjectDetailsBySaleObjectComboIdQueryFn = async (
  combo_id: string,
) =>
  baseGet<SaleObjectDetailsType[]>(
    `app_service/sale_object/${combo_id}/details`,
  );

const GetManyPricesSaleObjectMutationFn = async (data: string[]) =>
  basePost<string[], SaleObjectGetManyPricesType[]>(
    `app_service/sale_object/get_many_prices`,
    data,
  );

const getSaleObjectTopPurchasedQueryFn = async () =>
  baseGet<SaleObjectDetailsType[]>(`app_service/sale_object/top_purchased`);

//Hooks
export const useGetSaleObjectDetailsBySaleObjectComboIdQuery = (
  combo_id: string,
  options?: UseQueryOptionsType<SaleObjectDetailsType[]>,
) =>
  useQuery(
    ['sale_object_details', combo_id],
    async () => await getSaleObjectDetailsBySaleObjectComboIdQueryFn(combo_id),
    options,
  );

export const useGetManyPricesSaleObjectMutation = (
  options?: UseMutationOptionsType<string[], SaleObjectGetManyPricesType[]>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<SaleObjectGetManyPricesType[]>>,
    AxiosError,
    string[]
  >(GetManyPricesSaleObjectMutationFn, options);

export const useGetSaleObjectTopPurchasedQuery = (
  options?: UseQueryOptionsType<SaleObjectDetailsType[]>,
) =>
  useQuery(
    ['sale_object_top_purchased'],
    async () => await getSaleObjectTopPurchasedQueryFn(),
    options,
  );
