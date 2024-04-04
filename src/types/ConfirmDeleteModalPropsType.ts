import { UseMutationResult } from '@tanstack/react-query';
import { UseMutationOptionsType } from './ReactQueryHookOptionsType';
import { AxiosError, AxiosResponse } from 'axios';
import { APIResponseType } from './APIResponseType';

export type ConfirmDeleteModalPropsType<
  TData extends Record<string, any> | string | boolean | number,
> = {
  handleClose: () => void;
  onTransitionEnd?: () => void;
  isOpen: boolean;
  title?: React.ReactNode;
  message?: string;
  delete_id: string;
  onSuccess?: () => void;
  useDeleteMutation: (
    options?: UseMutationOptionsType<string, TData>,
  ) => UseMutationResult<
    AxiosResponse<APIResponseType<TData>, any>,
    AxiosError,
    string,
    unknown
  >;
};
