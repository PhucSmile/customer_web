import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { UseQueryOptionsType } from '@/types/ReactQueryHookOptionsType';
import { baseGet, basePost } from '../../base/baseApi';
import { GeographyCoordinatesType } from '@/schemas/GeographySchemas/GeographyCoordinatesSchema';
import { GeographyCoordinatesResponseType } from '@/types/GeographyTypes/GeographyCoordinatesResponseType';
import { GeographyProvinceType } from '@/schemas/GeographySchemas/GeographyProvinceSchema';

//Queries
const getAllGeographyProvinceQueryFn = async () =>
  baseGet<GeographyProvinceType[]>('app_service/geography_province');

// const detectProvinceByCoordinatesMutationFn = async (
//   data: GeographyCoordinatesType
// ) =>
// basePost<GeographyCoordinatesType, GeographyCoordinatesResponseType>(
//   'app_service/geography_province/detect_by_coordinates',
//   data
// );

const detectProvinceByCoordinatesQueryFn = async (
  data: GeographyCoordinatesType,
) =>
  basePost<GeographyCoordinatesType, GeographyCoordinatesResponseType>(
    'app_service/geography_province/detect_by_coordinates',
    data,
  );

//Prefetches
export const PrefetchGeographyProvinceQuery = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['geography_province'],
    getAllGeographyProvinceQueryFn,
  );

  return dehydrate(queryClient);
};

//Hooks
export const useGetAllGeographyProvinceQuery = (
  options?: UseQueryOptionsType<GeographyProvinceType[]>,
) => useQuery(['geography_province'], getAllGeographyProvinceQueryFn, options);

export const useDetectProvinceByCoordinatesQuery = (
  data: GeographyCoordinatesType,
  options?: UseQueryOptionsType<GeographyCoordinatesResponseType>,
) =>
  useQuery(
    ['geography_province_coordinates'],
    async () => detectProvinceByCoordinatesQueryFn(data),
    options,
  );

// export const useDetectByCoordinatesMutation = (
//   options?: UseMutationOptionsType<
//     GeographyCoordinatesType,
//     GeographyCoordinatesResponseType
//   >
// ) =>
//   useMutation<
//     AxiosResponse<APIResponseType<GeographyCoordinatesResponseType>>,
//     AxiosError,
//     GeographyCoordinatesType
//   >(detectProvinceByCoordinatesMutationFn, options);
