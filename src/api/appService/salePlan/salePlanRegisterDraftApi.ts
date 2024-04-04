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
import { SalePlanRegisterDraftType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/SalePlanRegisterDraftSchema';
import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from '@/types/APIResponseType';
import { SalePlanRegisterDraftPackageBeforeExpiredDraftType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/SalePlanRegisterDraftPackageBeforeExpiredDraftSchema';
import { SalePlanRegisterDraftPackageIncompleteType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/SalePlanRegisterDraftPackageIncompleteSchema';
import { RegisterSalePlanDraftType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/RegisterSalePlanDraftSchemas';
import { RegisterSalePlanDraftCheckStaleDeliveryDateType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/RegisterSalePlanDraftCheckStaleDeliveryDateSchema';
import { SalePlanRegisterDraftOrderSummaryByPlanType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/SalePlanRegisterDraftOrderSummaryByPlanSchema';
//Queries
const getSalePlanRegisterDraftPackageBeforeExpireDraftQueryFn = async () =>
  baseGet<SalePlanRegisterDraftPackageBeforeExpiredDraftType[]>(
    'app_service/sale_plan_register_draft/package_before_expired_draft',
  );

const getSalePlanRegisterDraftPackageIncompleteQueryFn = async () =>
  baseGet<SalePlanRegisterDraftPackageIncompleteType[]>(
    'app_service/sale_plan_register_draft/package_incomplete',
  );

const getSalePlanRegisterDraftByRegisterDraftIdQueryFn = async (
  register_draft_id: string,
) =>
  baseGet<SalePlanRegisterDraftType[]>(
    `app_service/sale_plan_register_draft/${register_draft_id}`,
  );

const getSalePlanRegisterDraftOrderSummaryByPlanByRegisterDraftIdQueryFn =
  async (register_draft_id: string) =>
    baseGet<SalePlanRegisterDraftOrderSummaryByPlanType>(
      `app_service/sale_plan_register_draft/${register_draft_id}/order_summary_by_plan`,
    );

const registerSalePlanDraftMutationFn = async (
  data: RegisterSalePlanDraftType,
) =>
  basePost<RegisterSalePlanDraftType, SalePlanRegisterDraftType[]>(
    `app_service/sale_plan_register_draft`,
    data,
  );

const registerSalePlanDraftCheckStaleDeliveryDateMutationFn = async (
  data: RegisterSalePlanDraftCheckStaleDeliveryDateType,
) =>
  basePost<RegisterSalePlanDraftCheckStaleDeliveryDateType, string[]>(
    `app_service/sale_plan_register_draft/check_stale_delivery_date`,
    data,
  );

const confirmSalePlanDraftMutationFn = async (
  id: string,
  is_success: boolean,
) =>
  basePut<string, boolean>(
    `app_service/sale_plan_register_draft/${id}/status?is_success=${is_success}`,
  );

//Prefetches
export const PrefetchSalePlanRegisterDraftPackageBeforeExpireDraftQuery =
  async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
      [
        'sale_plan_register_draft',
        'sale_plan_register_draft_package_before_expire_draft',
      ],
      getSalePlanRegisterDraftPackageBeforeExpireDraftQueryFn,
    );

    return dehydrate(queryClient);
  };

export const PrefetchSalePlanRegisterDraftPackageIncompleteQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['sale_plan_register_draft', 'sale_plan_register_draft_package_incomplete'],
    getSalePlanRegisterDraftPackageIncompleteQueryFn,
  );

  return dehydrate(queryClient);
};

//Hooks
export const useGetSalePlanRegisterDraftPackageBeforeExpireDraftQuery = (
  options?: UseQueryOptionsType<
    SalePlanRegisterDraftPackageBeforeExpiredDraftType[]
  >,
) =>
  useQuery(
    [
      'sale_plan_register_draft',
      'sale_plan_register_draft_package_before_expire_draft',
    ],
    getSalePlanRegisterDraftPackageBeforeExpireDraftQueryFn,
    options,
  );

export const useGetSalePlanRegisterDraftPackageIncompleteDraftQuery = (
  options?: UseQueryOptionsType<SalePlanRegisterDraftPackageIncompleteType[]>,
) =>
  useQuery(
    ['sale_plan_register_draft', 'sale_plan_register_draft_package_incomplete'],
    getSalePlanRegisterDraftPackageIncompleteQueryFn,
    options,
  );

export const useGetSalePlanRegisterDraftByRegisterDraftIdQuery = (
  register_draft_id: string,
  options?: UseQueryOptionsType<SalePlanRegisterDraftType[]>,
) =>
  useQuery(
    ['sale_plan_register_draft', register_draft_id],
    async () =>
      await getSalePlanRegisterDraftByRegisterDraftIdQueryFn(register_draft_id),
    options,
  );

export const useGetSalePlanRegisterDraftOrderSummaryByPlanByRegisterDraftIdQuery =
  (
    register_draft_id: string,
    options?: UseQueryOptionsType<SalePlanRegisterDraftOrderSummaryByPlanType>,
  ) =>
    useQuery(
      [
        'sale_plan_register_draft',
        'sale_plan_register_draft_order_summary_by_plan',
        register_draft_id,
      ],
      async () =>
        await getSalePlanRegisterDraftOrderSummaryByPlanByRegisterDraftIdQueryFn(
          register_draft_id,
        ),
      options,
    );

export const useRegisterSalePlanDraftMutation = (
  options?: UseMutationOptionsType<
    RegisterSalePlanDraftType,
    SalePlanRegisterDraftType[]
  >,
) =>
  useMutation<
    AxiosResponse<APIResponseType<SalePlanRegisterDraftType[]>>,
    AxiosError,
    RegisterSalePlanDraftType
  >(registerSalePlanDraftMutationFn, options);

export const useRegisterSalePlanDraftCheckStaleDeliveryDateMutation = (
  options?: UseMutationOptionsType<
    RegisterSalePlanDraftCheckStaleDeliveryDateType,
    string[]
  >,
) =>
  useMutation<
    AxiosResponse<APIResponseType<string[]>>,
    AxiosError,
    RegisterSalePlanDraftCheckStaleDeliveryDateType
  >(registerSalePlanDraftCheckStaleDeliveryDateMutationFn, options);

export const useConfirmSalePlanDraftMutation = (
  id: string,
  is_success: boolean,
  options?: UseMutationOptionsType<string, boolean>,
) =>
  useMutation<AxiosResponse<APIResponseType<boolean>>, AxiosError, string>(
    async () => confirmSalePlanDraftMutationFn(id, is_success),
    options,
  );
