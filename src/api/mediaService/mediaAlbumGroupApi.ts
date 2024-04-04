import { baseGet } from '../base/baseApi';
import { UseQueryOptionsType } from '@/types/ReactQueryHookOptionsType';
import { useQuery } from '@tanstack/react-query';
import { MediaAlbumGroupType } from '@/schemas/MediaAlbumSchemas/MediaAlbumGroupSchema';

//Queries
export const getAllMediaAlbumGroupQueryFn = () =>
  baseGet<MediaAlbumGroupType[]>(`media_service/media_album_group`);

//Hooks
export const useAllMediaAlbumGroupQuery = (
  options?: UseQueryOptionsType<MediaAlbumGroupType[]>,
) =>
  useQuery({
    ...options,
    queryKey: ['media_album_group'],
    queryFn: getAllMediaAlbumGroupQueryFn,
  });
