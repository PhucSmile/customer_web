import { FormInputPropsType } from './FormInputPropsType';

export type FormInputCheckboxPropsType = Omit<
  FormInputPropsType,
  'placeholder'
> & {
  value: string;
};
