import { AxiosError, AxiosResponse } from 'axios';
import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { APIResponseType } from './APIResponseType';

export type UseQueryOptionsType<T extends Record<string, any>> = Omit<
  UseQueryOptions<
    AxiosResponse<APIResponseType<T>, any>,
    AxiosError<unknown, any>,
    AxiosResponse<APIResponseType<T>, any>,
    string[]
  >,
  'queryKey' | 'queryFn'
>;

export type UseMutationOptionsType<
  DBody extends Record<string, any> | string | boolean | number | void,
  TData extends Record<string, any> | string | boolean | number = {},
> = Omit<
  UseMutationOptions<
    AxiosResponse<APIResponseType<TData>, any>,
    AxiosError<unknown, any>,
    DBody,
    unknown
  >,
  'mutationFn'
>;
