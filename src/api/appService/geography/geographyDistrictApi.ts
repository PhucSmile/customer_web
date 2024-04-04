import { QueryFunction, useQuery } from '@tanstack/react-query';
import { UseQueryOptionsType } from '@/types/ReactQueryHookOptionsType';
import { baseGet, basePost } from '../../base/baseApi';
import { GeographyCoordinatesType } from '@/schemas/GeographySchemas/GeographyCoordinatesSchema';
import { GeographyCoordinatesResponseType } from '@/types/GeographyTypes/GeographyCoordinatesResponseType';
import { GeographyDistrictType } from '@/schemas/GeographySchemas/GeographyDistrictSchema';

//Queries
const getGeographyDistrictByProvinceIdQueryFn = (province_id: string) =>
  baseGet<GeographyDistrictType[]>(
    `app_service/geography_province/${province_id}/geography_district`,
  );
// const detectDistrictByCoordinatesMutationFn = async (
//   data: GeographyCoordinatesType
// ) =>
//   basePost<GeographyCoordinatesType, GeographyCoordinatesResponseType>(
//     'app_service/geography_district/detect_by_coordinates',
//     data
//   );

const detectDistrictByCoordinatesQueryFn = async (
  data: GeographyCoordinatesType,
) =>
  basePost<GeographyCoordinatesType, GeographyCoordinatesResponseType>(
    'app_service/geography_district/detect_by_coordinates',
    data,
  );

//Hooks
export const useGetGeographyDistrictByProvinceIdQuery = (
  province_id: string,
  options?: UseQueryOptionsType<GeographyDistrictType[]>,
) =>
  useQuery({
    queryKey: ['geography_district', province_id],
    queryFn: () => getGeographyDistrictByProvinceIdQueryFn(province_id),
    ...options,
  });

export const useDetectDistrictByCoordinatesQuery = (
  data: GeographyCoordinatesType,
  options?: UseQueryOptionsType<GeographyCoordinatesResponseType>,
) =>
  useQuery(
    ['geography_district_coordinates'],
    async () => detectDistrictByCoordinatesQueryFn(data),
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
//   >(detectDistrictByCoordinatesMutationFn, options);
