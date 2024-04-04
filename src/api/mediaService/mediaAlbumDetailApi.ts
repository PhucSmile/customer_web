import { baseGet } from '../base/baseApi';
import {
  UseMutationOptionsType,
  UseQueryOptionsType,
} from '@/types/ReactQueryHookOptionsType';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MediaAlbumDetailType } from '@/schemas/MediaAlbumSchemas/MediaAlbumDetailSchema';
import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from '@/types/APIResponseType';

//Queries
export const getMediaAlbumDetailByAlbumIdQueryFn = (album_id: string) =>
  baseGet<MediaAlbumDetailType[]>(
    `media_service/media_album/${album_id}/media_album_detail`,
  );

export const getMediaAlbumDetailByIdQueryFn = (album_detail_id: string) =>
  baseGet<MediaAlbumDetailType>(
    `media_service/media_album_detail/${album_detail_id}`,
  );

export const getMediaAlbumDetailFileByAlbumIdByIdMutationFn = ({
  album_id,
  album_detail_id,
  secret_key,
}: {
  album_id: string;
  album_detail_id: string;
  secret_key: string;
}) =>
  baseGet<Blob>(
    `media_service/media_album/${album_id}/media_album_detail/${album_detail_id}/get_file?secret_key=${secret_key}`,
    {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    },
  );

//Hooks
export const useGetMediaAlbumDetailByAlbumIdQuery = (
  album_id: string,
  options?: UseQueryOptionsType<MediaAlbumDetailType[]>,
) =>
  useQuery({
    ...options,
    queryKey: ['media_album_detail', album_id],
    queryFn: () => getMediaAlbumDetailByAlbumIdQueryFn(album_id),
  });

export const useGetMediaAlbumByIdQuery = (
  album_detail_id: string,
  options?: UseQueryOptionsType<MediaAlbumDetailType>,
) =>
  useQuery({
    ...options,
    queryKey: ['media_album_detail', album_detail_id],
    queryFn: () => getMediaAlbumDetailByIdQueryFn(album_detail_id),
  });

export const useGetMediaAlbumDetailFileByAlbumIdByIdMutation = (
  options?: UseMutationOptionsType<
    {
      album_id: string;
      album_detail_id: string;
      secret_key: string;
    },
    Blob
  >,
) =>
  useMutation<
    AxiosResponse<APIResponseType<Blob>>,
    AxiosError,
    {
      album_id: string;
      album_detail_id: string;
      secret_key: string;
    }
  >(getMediaAlbumDetailFileByAlbumIdByIdMutationFn, options);
