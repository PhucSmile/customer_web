import { useMutation, useQuery } from '@tanstack/react-query';
import { baseGet, basePost } from '../../base/baseApi';
import { SaleObjectComboDescriptionType } from '@/schemas/SaleObjectSchemas/SaleObjectComboSchemas/SaleObjectComboDescriptionSchema';
import {
  UseMutationOptionsType,
  UseQueryOptionsType,
} from '@/types/ReactQueryHookOptionsType';

import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from '@/types/APIResponseType';
import {
  SaleObjectComboSearchDetailsType,
  SaleObjectComboSearchType,
} from '@/schemas/SaleObjectSchemas/SaleObjectComboSchemas/SaleObjectComboSearchDetailsSchema';
//Queries

const getSaleObjectComboDescriptionBySaleObjectComboIdQueryFn = async (
  combo_id: string,
) =>
  baseGet<SaleObjectComboDescriptionType>(
    `app_service/sale_object_combo/${combo_id}/description`,
  );

const searchSaleObjectComboMutationFn = async (
  data: SaleObjectComboSearchType,
) =>
  basePost<SaleObjectComboSearchType, SaleObjectComboSearchDetailsType[]>(
    `app_service/sale_object_combo/search`,
    data,
  );

const getSaleObjectComboTopPurchasedQueryFn = async () =>
  baseGet<SaleObjectComboSearchDetailsType>(
    `app_service/sale_object_combo/top_purchased`,
  );

//Prefetches

//Hooks

export const useGetSaleObjectComboDescriptionBySaleObjectComboIdQuery = (
  combo_id: string,
  options?: UseQueryOptionsType<SaleObjectComboDescriptionType>,
) =>
  useQuery(
    ['sale_object_combo_description', combo_id],
    async () =>
      await getSaleObjectComboDescriptionBySaleObjectComboIdQueryFn(combo_id),
    options,
  );

export const useSearchSaleObjectComboMutation = (
  options?: UseMutationOptionsType<
    SaleObjectComboSearchType,
    SaleObjectComboSearchDetailsType[]
  >,
) =>
  useMutation<
    AxiosResponse<APIResponseType<SaleObjectComboSearchDetailsType[]>>,
    AxiosError,
    SaleObjectComboSearchType
  >(searchSaleObjectComboMutationFn, options);

export const useGetSaleObjectComboTopPurchasedQuery = (
  options?: UseQueryOptionsType<SaleObjectComboSearchDetailsType>,
) =>
  useQuery(
    ['sale_object_combo_top_purchased'],
    async () => await getSaleObjectComboTopPurchasedQueryFn(),
    options,
  );
