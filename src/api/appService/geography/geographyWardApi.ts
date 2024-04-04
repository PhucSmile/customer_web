import { useQuery } from '@tanstack/react-query';
import { UseQueryOptionsType } from '@/types/ReactQueryHookOptionsType';
import { baseGet, basePost } from '../../base/baseApi';
import { GeographyCoordinatesType } from '@/schemas/GeographySchemas/GeographyCoordinatesSchema';
import { GeographyCoordinatesResponseType } from '@/types/GeographyTypes/GeographyCoordinatesResponseType';
import { GeographyWardType } from '@/schemas/GeographySchemas/GeographyWardSchema';

//Queries
const getGeographyWardByDistrictIdQueryFn = async (district_id: string) =>
  baseGet<GeographyWardType[]>(
    `app_service/geography_district/${district_id}/geography_ward`,
  );

// const detectWardByCoordinatesMutationFn = async (
//   data: GeographyCoordinatesType
// ) =>
//   basePost<GeographyCoordinatesType, GeographyCoordinatesResponseType>(
//     'app_service/geography_ward/detect_by_coordinates',
//     data
//   );

const detectWardByCoordinatesQueryFn = async (data: GeographyCoordinatesType) =>
  basePost<GeographyCoordinatesType, GeographyCoordinatesResponseType>(
    'app_service/geography_ward/detect_by_coordinates',
    data,
  );

//Hooks
export const useGetGeographyWardByDistrictIdQuery = (
  district_id: string,
  options?: UseQueryOptionsType<GeographyWardType[]>,
) =>
  useQuery(
    ['geography_ward', district_id],
    () => getGeographyWardByDistrictIdQueryFn(district_id),
    options,
  );

export const useDetectWardByCoordinatesQuery = (
  data: GeographyCoordinatesType,
  options?: UseQueryOptionsType<GeographyCoordinatesResponseType>,
) =>
  useQuery(
    ['geography_ward_coordinates'],
    async () => detectWardByCoordinatesQueryFn(data),
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
//   >(detectWardByCoordinatesMutationFn, options);
