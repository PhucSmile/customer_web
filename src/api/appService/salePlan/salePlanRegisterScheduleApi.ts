import { UseMutationOptionsType } from '@/types/ReactQueryHookOptionsType';
import { basePut } from '../../base/baseApi';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from '@/types/APIResponseType';
import { SalePlanRegisterScheduleType } from '@/schemas/SalePlanSchemas/SalePlanRegisterScheduleDraftSchemas copy/SalePlanRegisterScheduleSchema';

//Queries
const confirmSalePlanRegisterScheduleMutationFn = async (
  data: SalePlanRegisterScheduleType,
) =>
  basePut<SalePlanRegisterScheduleType, string>(
    `app_service/sale_plan_schedule_draft/${data?.id}/confirm`,
    data,
  );

//Hooks
export const useConfirmSalePlanRegisterScheduleMutation = (
  data: SalePlanRegisterScheduleType,
  options?: UseMutationOptionsType<SalePlanRegisterScheduleType, string>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<string>>,
    AxiosError,
    SalePlanRegisterScheduleType
  >(async () => confirmSalePlanRegisterScheduleMutationFn(data), options);
