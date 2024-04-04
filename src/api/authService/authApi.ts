import { baseGet, basePost } from '../base/baseApi';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from '@/types/APIResponseType';
import { VerifyOtpSmsType } from '@/schemas/AuthSchemas/VerifyOtpSmsSchema';
import { VerifyOtpEmailType } from '@/schemas/AuthSchemas/VerifyOtpEmailSchema';
import { UserSelfInfoType } from '@/schemas/AuthSchemas/UserSelfInfoSchema';
import {
  UseMutationOptionsType,
  UseQueryOptionsType,
} from '@/types/ReactQueryHookOptionsType';
import { SendOtpResponseType } from '@/types/AuthTypes/SendOtpResponseType';
import { SendOtpSmsType } from '@/schemas/AuthSchemas/SendOtpSmsSchema';
import { SendOtpEmailType } from '@/schemas/AuthSchemas/SendOtpEmailSchema';
import { LoginType } from '@/types/AuthTypes/LoginType';
import { LoginGoogleType } from '@/types/AuthTypes/LoginGoogleType';
import { SelfUpdateNameType } from '@/schemas/AuthSchemas/SelfUpdateNameSchema';

const sendOtpSmsMutationFn = async (data: SendOtpSmsType) =>
  basePost<SendOtpSmsType, SendOtpResponseType>(
    'authen_service/user/login_with_otp_sms/send_otp_sms',
    data,
  );

export const useSendOtpSmsMutation = (
  options?: UseMutationOptionsType<SendOtpSmsType, SendOtpResponseType>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<SendOtpResponseType>>,
    AxiosError,
    SendOtpSmsType
  >(sendOtpSmsMutationFn, options);

const sendOtpEmailMutationFn = async (email: string) =>
  basePost<SendOtpEmailType, SendOtpResponseType>(
    'authen_service/user/login_with_otp_email/send_otp_email',
    { email },
  );

export const useSendOtpEmailMutation = (
  options?: UseMutationOptionsType<string, SendOtpResponseType>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<SendOtpResponseType>>,
    AxiosError,
    string
  >(sendOtpEmailMutationFn, options);

const verifyOtpSmsMutationFn = async (data: VerifyOtpSmsType) =>
  basePost<VerifyOtpSmsType, LoginType>(
    'authen_service/user/login_with_otp_sms/verify_otp_sms',
    data,
  );

export const useVerifyOtpSmsMutation = (
  options?: UseMutationOptionsType<VerifyOtpSmsType, LoginType>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<LoginType>>,
    AxiosError,
    VerifyOtpSmsType
  >(verifyOtpSmsMutationFn, options);

const verifyOtpEmailMutationFn = async (data: VerifyOtpEmailType) =>
  basePost<VerifyOtpEmailType, LoginType>(
    'authen_service/user/login_with_otp_email/verify_otp_email',
    data,
  );

export const useVerifyOtpEmailMutation = (
  options?: UseMutationOptionsType<VerifyOtpEmailType, LoginType>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<LoginType>>,
    AxiosError,
    VerifyOtpEmailType
  >(verifyOtpEmailMutationFn, options);

const loginGoogleMutationFn = async (data: LoginGoogleType) =>
  basePost<LoginGoogleType, LoginType>(
    'authen_service/user/login_google',
    data,
  );

export const useLoginGoogleMutation = (
  options?: UseMutationOptionsType<LoginGoogleType, LoginType>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<LoginType>>,
    AxiosError,
    LoginGoogleType
  >(loginGoogleMutationFn, options);

const getUserSelfInfoQueryFn = () =>
  baseGet<UserSelfInfoType>('authen_service/user/self_info1');

export const useGetUserSelfInfoQuery = (
  options?: UseQueryOptionsType<UserSelfInfoType>,
) => useQuery(['self_info'], getUserSelfInfoQueryFn, options);

const logOutCurrentSessionMutationFn = () =>
  baseGet<boolean>('authen_service/user/log_out_current_session');

export const useLogOutCurrentSessionMutation = (
  options?: UseMutationOptionsType<void, boolean>,
) =>
  useMutation<AxiosResponse<APIResponseType<boolean>>, AxiosError, undefined>(
    logOutCurrentSessionMutationFn,
    options,
  );

const logOutAllSessionsMutationFn = () =>
  baseGet<boolean>('authen_service/user/log_out_all_sessions');

export const useLogOutAllSessionsMutation = (
  options?: UseMutationOptionsType<void, boolean>,
) =>
  useMutation<AxiosResponse<APIResponseType<boolean>>, AxiosError, undefined>(
    logOutAllSessionsMutationFn,
    options,
  );

const selfUpdateNameMutationFn = async (data: SelfUpdateNameType) =>
  basePost<SelfUpdateNameType, boolean>(
    'authen_service/user/self_update_name',
    data,
  );

export const useSelfUpdateNameMutation = (
  options?: UseMutationOptionsType<SelfUpdateNameType, boolean>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<boolean>>,
    AxiosError,
    SelfUpdateNameType
  >(selfUpdateNameMutationFn, options);
