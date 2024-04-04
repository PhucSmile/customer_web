import { InputProps } from '@/components/MaterialTailwind/types/input';
import { FormInputPropsType } from './FormInputPropsType';
import { UseQueryResult } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from '../APIResponseType';

export type TabType = {
  value: string;
  currentField: string;
  nextAction?: () => void;
  clearDependentFields?: () => void;
  queryResult: UseQueryResult<
    AxiosResponse<APIResponseType<{ id: string; name: string }[]>, any>,
    AxiosError
  >;
};

export type FormInputAddressSelectPropsType = FormInputPropsType &
  Omit<InputProps, 'value' | 'onChange' | 'onBlur' | 'ref'> & {
    // useQuery: (
    //   options?: UseQueryOptionsType<T[]>
    // ) => UseQueryResult<AxiosResponse<APIResponseType<T[]>, any>, AxiosError>;
    // mapOptions: (item: T) => {
    //   label: string;
    //   value: string;
    // };
    provinceField: string;
    districtField: string;
    wardField: string;
  };
