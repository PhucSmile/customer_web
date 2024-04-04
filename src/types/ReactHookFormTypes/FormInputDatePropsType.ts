import { DatepickerType } from 'react-tailwindcss-datepicker/dist/types';
import { FormInputPropsType } from './FormInputPropsType';

export type FormInputDatePropsType = FormInputPropsType &
  Omit<DatepickerType, 'value' | 'onChange'>;
