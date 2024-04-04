import { baseDelete, baseGet, basePost, basePut } from '@/api/base/baseApi';
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  UseMutationOptionsType,
  UseQueryOptionsType,
} from '@/types/ReactQueryHookOptionsType';
import { SaleShoppingCartDetailType } from '@/schemas/SaleShoppingCartDetailSchemas/SaleShoppingCartDetailSchema';
import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from '@/types/APIResponseType';

//Queries

const getSaleShoppingCartDetailQueryFn = async () =>
  baseGet<SaleShoppingCartDetailType[]>(
    `app_service/sale_shopping_cart_detail`,
  );

const addSaleShoppingCartDetailMutationFn = async (
  data: SaleShoppingCartDetailType,
) =>
  basePost<SaleShoppingCartDetailType, SaleShoppingCartDetailType>(
    `app_service/sale_shopping_cart_detail`,
    data,
  );

const updateSaleShoppingCartDetailMutationFn = async (
  data: SaleShoppingCartDetailType,
) =>
  basePut<SaleShoppingCartDetailType, boolean>(
    `app_service/sale_shopping_cart_detail/${data?.id}`,
  );

const deleteSaleShoppingCartDetailMutationFn = async (id: string) =>
  baseDelete<boolean>(`app_service/sale_shopping_cart_detail/${id}`);

const addSaleShoppingCartDetailDeleteItemsByIdsMutationFn = async (
  ids: string[],
) =>
  basePut<string[], number>(
    `app_service/sale_shopping_cart_detail/delete_items_by_ids,${ids}`,
  );

//Prefetches
export const PrefetchSaleShoppingCartDetailQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['sale_shopping_cart_detail'],
    getSaleShoppingCartDetailQueryFn,
  );

  return dehydrate(queryClient);
};

//Hooks
export const useGetSaleShoppingCartDetailQuery = (
  options?: UseQueryOptionsType<SaleShoppingCartDetailType[]>,
) =>
  useQuery(
    ['sale_shopping_cart_detail'],
    getSaleShoppingCartDetailQueryFn,
    options,
  );

export const useAddSaleShoppingCartDetailMutation = (
  options?: UseMutationOptionsType<
    SaleShoppingCartDetailType,
    SaleShoppingCartDetailType
  >,
) =>
  useMutation<
    AxiosResponse<APIResponseType<SaleShoppingCartDetailType>>,
    AxiosError,
    SaleShoppingCartDetailType
  >(addSaleShoppingCartDetailMutationFn, options);

export const useUpdateSaleShoppingCartDetailMutation = (
  data: SaleShoppingCartDetailType,
  options?: UseMutationOptionsType<SaleShoppingCartDetailType, boolean>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<boolean>>,
    AxiosError,
    SaleShoppingCartDetailType
  >(async () => updateSaleShoppingCartDetailMutationFn(data), options);

export const useDeleteSaleShoppingCartDetailMutation = (
  id: string,
  options?: UseMutationOptionsType<string, boolean>,
) =>
  useMutation<AxiosResponse<APIResponseType<boolean>>, AxiosError, string>(
    async () => deleteSaleShoppingCartDetailMutationFn(id),
    options,
  );

export const useDeleteSaleShoppingCartDetailDeleteItemsByIdsMutation = (
  ids: string[],
  options?: UseMutationOptionsType<string[], number>,
) =>
  useMutation<AxiosResponse<APIResponseType<number>>, AxiosError, string[]>(
    async () => addSaleShoppingCartDetailDeleteItemsByIdsMutationFn(ids),
    options,
  );
