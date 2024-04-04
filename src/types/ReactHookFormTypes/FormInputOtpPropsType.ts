import { OtpInputProps } from 'react18-input-otp';
import { FormInputPropsType } from './FormInputPropsType';

export type FormInputOtpPropsType = Omit<
  FormInputPropsType,
  'label' | 'placeholder'
> &
  Partial<Omit<OtpInputProps, 'value' | 'onChange'>>;
