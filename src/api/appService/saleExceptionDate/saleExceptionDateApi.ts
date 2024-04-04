import { baseGet } from '@/api/base/baseApi';
import { SaleExceptionDateType } from '@/schemas/SaleExceptionDateSchemas/SaleExceptionDateSchema';
import { UseQueryOptionsType } from '@/types/ReactQueryHookOptionsType';
import { useQuery } from '@tanstack/react-query';

//Queries
const getSaleExceptionDateQueryFn = async () =>
  baseGet<SaleExceptionDateType[]>('app_service/sale_exception_date');

//Hooks
export const useGetSaleExceptionDateQuery = (
  options?: UseQueryOptionsType<SaleExceptionDateType[]>,
) => useQuery(['sale_exception_date'], getSaleExceptionDateQueryFn, options);
