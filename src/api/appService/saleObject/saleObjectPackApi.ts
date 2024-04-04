import { useMutation, useQuery } from '@tanstack/react-query';
import { baseGet, basePost } from '../../base/baseApi';
import {
  UseMutationOptionsType,
  UseQueryOptionsType,
} from '@/types/ReactQueryHookOptionsType';
import { SaleObjectPackDescriptionType } from '@/schemas/SaleObjectSchemas/SaleObjectPackSchemas/SaleObjectPackDescriptionSchema';

import { APIResponseType } from '@/types/APIResponseType';
import { AxiosError, AxiosResponse } from 'axios';
import {
  SaleObjectPackSearchDetailsType,
  SaleObjectPackSearchType,
} from '@/schemas/SaleObjectSchemas/SaleObjectPackSchemas/SaleObjectPackSearchDetailsSchema';

//Queries
const getSaleObjectPackDescriptionByPackIdQueryFn = async (pack_id: string) =>
  baseGet<SaleObjectPackDescriptionType>(
    `app_service/sale_object_pack/${pack_id}/description`,
  );

const searchSaleObjectPackMutationFn = async (data: SaleObjectPackSearchType) =>
  basePost<SaleObjectPackSearchType, SaleObjectPackSearchDetailsType[]>(
    `app_service/sale_object_pack/search`,
    data,
  );

const getSaleObjectPackTopPurchasedQueryFn = async () =>
  baseGet<SaleObjectPackSearchDetailsType>(
    `app_service/sale_object_pack/top_purchased`,
  );

//Hooks
export const useGetSaleObjectDetailsBySaleObjectPackIdQuery = (
  pack_id: string,
  options?: UseQueryOptionsType<SaleObjectPackDescriptionType>,
) =>
  useQuery(
    ['sale_object_pack_description', pack_id],
    async () => await getSaleObjectPackDescriptionByPackIdQueryFn(pack_id),
    options,
  );

export const useSearchSaleObjectPackMutation = (
  options?: UseMutationOptionsType<
    SaleObjectPackSearchType,
    SaleObjectPackSearchDetailsType[]
  >,
) =>
  useMutation<
    AxiosResponse<APIResponseType<SaleObjectPackSearchDetailsType[]>>,
    AxiosError,
    SaleObjectPackSearchType
  >(searchSaleObjectPackMutationFn, options);

export const useGetSaleObjectPackTopPurchasedQuery = (
  options?: UseQueryOptionsType<SaleObjectPackSearchDetailsType>,
) =>
  useQuery(
    ['sale_object_pack_top_purchased'],
    async () => await getSaleObjectPackTopPurchasedQueryFn(),
    options,
  );
