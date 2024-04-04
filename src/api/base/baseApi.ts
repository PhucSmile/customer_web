import { APIResponseType } from '@/types/APIResponseType';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from './baseAxiosInstance';

export const baseGet = <TData extends Record<string, any> | string | boolean>(
  url: string,
  config?: AxiosRequestConfig<TData>,
) =>
  axiosInstance.get<string, AxiosResponse<APIResponseType<TData>>>(url, config);

export const basePost = <
  DBody extends Record<string, any> | boolean | number | string,
  TData extends Record<string, any> | boolean | number | string,
>(
  url: string,
  data: DBody,
  config?: AxiosRequestConfig<DBody>,
) =>
  axiosInstance.post<TData, AxiosResponse<APIResponseType<TData>>, DBody>(
    url,
    data,
    config,
  );

export const basePut = <
  DBody extends Record<string, any> | boolean | number | string,
  TData extends Record<string, any> | boolean | number | string,
>(
  url: string,
  data?: DBody,
  config?: AxiosRequestConfig<DBody>,
) =>
  axiosInstance.put<DBody, AxiosResponse<APIResponseType<TData>>>(
    url,
    data,
    config,
  );

export const baseDelete = <
  TData extends Record<string, any> | boolean | number | string,
>(
  url: string,
  config?: AxiosRequestConfig<TData>,
) =>
  axiosInstance.delete<string, AxiosResponse<APIResponseType<TData>>>(
    url,
    config,
  );
