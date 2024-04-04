import { FormInputPropsType } from './FormInputPropsType';

export type FormInputRadioPropsType = Omit<
  FormInputPropsType,
  'placeholder'
> & {
  value: string;
};
