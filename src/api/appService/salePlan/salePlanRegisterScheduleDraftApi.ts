import { UseMutationOptionsType } from '@/types/ReactQueryHookOptionsType';
import { basePut } from '../../base/baseApi';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from '@/types/APIResponseType';
import { SalePlanRegisterScheduleDraftType } from '@/schemas/SalePlanSchemas/SalePlanRegisterScheduleDraftSchemas/SalePlanRegisterScheduleDraftSchema';

//Queries
const confirmSalePlanRegisterScheduleDraftMutationFn = async (
  data: SalePlanRegisterScheduleDraftType,
) =>
  basePut<SalePlanRegisterScheduleDraftType, string>(
    `app_service/sale_plan_register_schedule_draft/${data?.id}/confirm`,
    data,
  );

//Hooks
export const useConfirmSalePlanRegisterScheduleDraftMutation = (
  options?: UseMutationOptionsType<SalePlanRegisterScheduleDraftType, string>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<string>>,
    AxiosError,
    SalePlanRegisterScheduleDraftType
  >(confirmSalePlanRegisterScheduleDraftMutationFn, options);
