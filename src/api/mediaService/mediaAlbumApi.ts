import { MediaAlbumType } from '@/schemas/MediaAlbumSchemas/MediaAlbumSchema';
import { baseGet } from '../base/baseApi';
import { UseQueryOptionsType } from '@/types/ReactQueryHookOptionsType';
import { useQuery } from '@tanstack/react-query';

//Queries
export const getAllMediaAlbumQueryFn = () =>
  baseGet<MediaAlbumType[]>(`media_service/media_album`);

export const getMediaAlbumByIdQueryFn = (album_id: string) =>
  baseGet<MediaAlbumType>(`media_service/media_album/${album_id}`);

//Hooks
export const useAllMediaAlbumQuery = (
  options?: UseQueryOptionsType<MediaAlbumType[]>,
) =>
  useQuery({
    ...options,
    queryKey: ['media_album'],
    queryFn: getAllMediaAlbumQueryFn,
  });
export const useGetMediaAlbumByIdQuery = (
  album_id: string,
  options?: UseQueryOptionsType<MediaAlbumType>,
) =>
  useQuery({
    ...options,
    queryKey: ['media_album', album_id],
    queryFn: () => getMediaAlbumByIdQueryFn(album_id),
  });
