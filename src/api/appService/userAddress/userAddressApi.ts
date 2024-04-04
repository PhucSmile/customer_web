import { baseDelete, baseGet, basePost, basePut } from '../../base/baseApi';
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
import {
  AddUserAddressType,
  UserAddressType,
} from '@/schemas/UserSchemas/UserAddressSchemas/UserAddressSchema';
import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from '@/types/APIResponseType';

//Queries
const getUserAddressQueryFn = async () =>
  baseGet<UserAddressType[]>(`app_service/user_address`);

const getUserAddressByIdQueryFn = async (id: string) =>
  baseGet<UserAddressType>(`app_service/user_address/${id}`);

const addUserAddressMutationFn = async (data: AddUserAddressType) =>
  basePost<AddUserAddressType, UserAddressType[]>(
    `app_service/user_address`,
    data,
  );

const updateUserAddressMutationFn = async (data: UserAddressType) =>
  basePut<UserAddressType, string>(
    `app_service/user_address/${data?.id}`,
    data,
  );

const deleteUserAddressMutationFn = async (id: string) =>
  baseDelete<boolean>(`app_service/user_address/${id}`);

const updateUserAddressDefaultMutationFn = async (id: string) =>
  basePut<string, boolean>(`app_service/user_address/${id}/address_default`);

//Prefetches
export const PrefetchUserAddressQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['user_address'], getUserAddressQueryFn);

  return dehydrate(queryClient);
};

//Hooks
export const useGetUserAddressQuery = (
  options?: UseQueryOptionsType<UserAddressType[]>,
) => useQuery(['user_address'], getUserAddressQueryFn, options);

export const useGetUserAddressByIdQuery = (
  id: string,
  options?: UseQueryOptionsType<UserAddressType>,
) =>
  useQuery(['user_address', id], () => getUserAddressByIdQueryFn(id), options);

export const useAddUserAddressMutation = (
  options?: UseMutationOptionsType<AddUserAddressType, UserAddressType[]>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<UserAddressType[]>>,
    AxiosError,
    AddUserAddressType
  >(addUserAddressMutationFn, options);

export const useUpdateUserAddressMutation = (
  options?: UseMutationOptionsType<UserAddressType, string>,
) =>
  useMutation<
    AxiosResponse<APIResponseType<string>>,
    AxiosError,
    UserAddressType
  >(updateUserAddressMutationFn, options);

export const useDeleteUserAddressMutation = (
  options?: UseMutationOptionsType<string, boolean>,
) =>
  useMutation<AxiosResponse<APIResponseType<boolean>>, AxiosError, string>(
    deleteUserAddressMutationFn,
    options,
  );

export const useUpdateUserAddressDefaultMutation = (
  options?: UseMutationOptionsType<string, boolean>,
) =>
  useMutation<AxiosResponse<APIResponseType<boolean>>, AxiosError, string>(
    updateUserAddressDefaultMutationFn,
    options,
  );
