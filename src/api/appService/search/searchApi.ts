import { basePost } from '@/api/base/baseApi';
import {
  GetSuggestSearchTagType,
  SuggestSearchTagType,
} from '@/schemas/SearchSchemas/SuggestSearchTagSchema';
import { APIResponseType } from '@/types/APIResponseType';
import {
  UseMutationOptionsType,
  UseQueryOptionsType,
} from '@/types/ReactQueryHookOptionsType';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueries } from '@tanstack/react-query';

//Queries
const getSuggestSearchTagMutationFn = async (data: GetSuggestSearchTagType) =>
  basePost<GetSuggestSearchTagType, SuggestSearchTagType[]>(
    `app_service/search/get_suggest_search_tags`,
    data,
  );

//Hooks
export const useGetSuggestSearchTagMutation = (
  options?: UseMutationOptionsType<
    GetSuggestSearchTagType,
    SuggestSearchTagType[]
  >,
) =>
  useMutation<
    AxiosResponse<APIResponseType<SuggestSearchTagType[]>>,
    AxiosError,
    GetSuggestSearchTagType
  >(getSuggestSearchTagMutationFn, options);

export const useGetSuggestSearchTagQuery = (
  keyword: string,
  scopeQueries: {
    scope_id: string;
    options?: Omit<UseQueryOptionsType<SuggestSearchTagType[]>, 'context'>;
  }[],
) =>
  useQueries({
    queries: scopeQueries.map(({ scope_id, options }) => ({
      ...options,
      queryKey: ['suggest_search_tag', scope_id],
      queryFn: () => getSuggestSearchTagMutationFn({ scope_id, keyword }),
    })),
  });
