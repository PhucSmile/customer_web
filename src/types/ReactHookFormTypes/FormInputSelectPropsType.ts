import { ReactNode } from 'react';
import { FormInputPropsType } from './FormInputPropsType';
import {
  SelectColor,
  SelectVariant,
} from '@/components/MaterialTailwind/types/input';

export type FormInputSelectPropsType<T> = FormInputPropsType & {
  variant?: SelectVariant;
  color?: SelectColor;
  options: T[];
  mapOption: (value: T) => {
    label: ReactNode;
    value: string;
  };
};
