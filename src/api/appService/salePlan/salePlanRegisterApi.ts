import { RegisterSalePlanStatusSchema } from '../../../schemas/SalePlanSchemas/SalePlanRegisterSchemas/RegisterSalePlanStatusSchema';
import { baseGet, basePost, basePut } from '../../base/baseApi';
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
import { SalePlanRegisterType } from '@/schemas/SalePlanSchemas/SalePlanRegisterSchemas/SalePlanRegisterSchema';
import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from '@/types/APIResponseType';
import { SalePlanRegisterPackageBeforeExpiredPaidType } from '@/schemas/SalePlanSchemas/SalePlanRegisterSchemas/SalePlanRegisterPackageBeforeExpiredPaidSchema';
import { SalePlanRegisterPackagePurchasedType } from '@/schemas/SalePlanSchemas/SalePlanRegisterSchemas/SalePlanRegisterPackagePurchasedSchema';
import { SalePlanRegisterPurchasePlanOverviewType } from '@/schemas/SalePlanSchemas/SalePlanRegisterSchemas/SalePlanRegisterPurchasePlanOverviewSchema';
import { RegisterSalePlanStatusType } from '@/schemas/SalePlanSchemas/SalePlanRegisterSchemas/RegisterSalePlanStatusSchema';
import { SalePlanRegisterNextShipmentType } from '@/schemas/SalePlanSchemas/SalePlanRegisterSchemas/SalePlanRegisterNextShipmentSchema';
import {
  RegisterSalePlanRequestType,
  RegisterSalePlanResponseType,
} from '@/schemas/SalePlanSchemas/SalePlanRegisterSchemas/RegisterSalePlanSchema';
import {
  ReactiveRegisterSalePlanRequestType,
  ReactiveSalePlanRegisterResponseType,
} from '@/schemas/SalePlanSchemas/SalePlanRegisterSchemas/ReactiveSalePlanRegisterSchema';
//Queries
const getSalePlanRegisterPackageBeforeExpiredPaidQueryFn = async () =>
  baseGet<SalePlanRegisterPackageBeforeExpiredPaidType[]>(
    'app_service/sale_plan_register/package_before_expired_paid',
  );

const getSalePlanRegisterPackagePurchasedQueryFn = async () =>
  baseGet<SalePlanRegisterPackagePurchasedType[]>(
    'app_service/sale_plan_register/package_purchased',
  );

const getSalePlanRegisterByRegisterIdQueryFn = (register_id: string) =>
  baseGet<SalePlanRegisterType[]>(
    `app_service/sale_plan_register/${register_id}`,
  );

const getSalePlanRegisterPurchasePlanOverviewByRegisterIdQueryFn = async (
  register_id: string,
) =>
  baseGet<SalePlanRegisterPurchasePlanOverviewType>(
    `app_service/sale_plan_register/${register_id}/purchase_plan_overview`,
  );

const getSalePlanRegisterNextShipmentQueryFn = async () =>
  baseGet<SalePlanRegisterNextShipmentType[]>(
    'app_service/sale_plan_register/next_shipment',
  );

const registerSalePlanStatusMutationFn = async (
  data: RegisterSalePlanStatusType,
) =>
  basePut<RegisterSalePlanStatusType, boolean>(
    `app_service/sale_plan_register/status`,
    data,
  );

const registerSalePlanMutationFn = async (data: RegisterSalePlanRequestType) =>
  basePost<RegisterSalePlanRequestType, RegisterSalePlanResponseType>(
    `app_service/sale_plan_register`,
    data,
  );

const reactiveSalePlanRegisterMutationFn = async (
  data: ReactiveRegisterSalePlanRequestType,
) =>
  basePost<
    ReactiveRegisterSalePlanRequestType,
    ReactiveSalePlanRegisterResponseType[]
  >(`app_service/sale_plan_register`, data);

//Prefetches
export const PrefetchSalePlanRegisterPackageBeforeExpirePaidQuery =
  async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
      ['sale_plan_register', 'sale_plan_register_package_before_expire'],
      getSalePlanRegisterPackageBeforeExpiredPaidQueryFn,
    );

    return dehydrate(queryClient);
  };

export const PrefetchSalePlanRegisterPackagePurchasedQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['sale_plan_register', 'sale_plan_register_package_purchased'],
    getSalePlanRegisterPackagePurchasedQueryFn,
  );

  return dehydrate(queryClient);
};

//Hooks
export const useGetSalePlanRegisterPackageBeforeExpiredPaidQuery = (
  options?: UseQueryOptionsType<SalePlanRegisterPackageBeforeExpiredPaidType[]>,
) =>
  useQuery(
    ['sale_plan_register', 'sale_plan_register_package_before_expire'],
    getSalePlanRegisterPackageBeforeExpiredPaidQueryFn,
    options,
  );

export const useGetSalePlanRegisterPackagePurchasedQuery = (
  options?: UseQueryOptionsType<SalePlanRegisterPackagePurchasedType[]>,
) =>
  useQuery(
    ['sale_plan_register', 'sale_plan_register_package_purchased'],
    getSalePlanRegisterPackagePurchasedQueryFn,
    options,
  );

export const useGetSalePlanRegisterByRegisterIdQuery = (
  register_id: string,
  options?: UseQueryOptionsType<SalePlanRegisterType[]>,
) =>
  useQuery(
    ['sale_plan_register', register_id],
    () => getSalePlanRegisterByRegisterIdQueryFn(register_id),
    options,
  );

export const useGetSalePlanRegisterPurchasePlanOverviewByRegisterIdQuery = (
  register_id: string,
  options?: UseQueryOptionsType<SalePlanRegisterPurchasePlanOverviewType>,
) =>
  useQuery(
    [
      'sale_plan_register',
      'sale_plan_register_purchase_plan_overview',
      register_id,
    ],
    async () =>
      await getSalePlanRegisterPurchasePlanOverviewByRegisterIdQueryFn(
        register_id,
      ),
    options,
  );

export const useGetSalePlanRegisterNextShipmentQuery = (
  options?: UseQueryOptionsType<SalePlanRegisterNextShipmentType[]>,
) =>
  useQuery(
    ['sale_plan_register', 'sale_plan_register_package_before_expire'],
    getSalePlanRegisterNextShipmentQueryFn,
    options,
  );

export const useRegisterSalePlanMutation = (
  options?: UseMutationOptionsType<
    RegisterSalePlanRequestType,
    RegisterSalePlanResponseType
  >,
) =>
  useMutation<
    AxiosResponse<APIResponseType<RegisterSalePlanResponseType>>,
    AxiosError,
    RegisterSalePlanRequestType
  >(registerSalePlanMutationFn, options);

export const useRegisterSalePlanStatusMutation = (
  options?: UseMutationOptionsType<RegisterSalePlanStatusType, boolean>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<boolean>>,
    AxiosError,
    RegisterSalePlanStatusType
  >(registerSalePlanStatusMutationFn, options);

export const useReactiveSalePlanRegisterMutation = (
  options?: UseMutationOptionsType<
    ReactiveRegisterSalePlanRequestType,
    ReactiveSalePlanRegisterResponseType[]
  >,
) =>
  useMutation<
    AxiosResponse<APIResponseType<ReactiveSalePlanRegisterResponseType[]>>,
    AxiosError,
    ReactiveRegisterSalePlanRequestType
  >(reactiveSalePlanRegisterMutationFn, options);
