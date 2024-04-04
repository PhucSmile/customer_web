'use client';
import { FormInputDatePropsType } from '@/types/ReactHookFormTypes/FormInputDatePropsType';
import { useController } from 'react-hook-form';
import DatePicker from 'react-tailwindcss-datepicker';
import dayjs from 'dayjs';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';

export const FormInputDate = ({
  name,
  label,
  ...props
}: FormInputDatePropsType) => {
  const {
    field: { onChange: onFieldChange, onBlur: onFieldBlur, value, ref },
    fieldState: { error },
    formState: { isSubmitting, errors },
  } = useController({ name });

  const formattedValue: DateValueType = {
    endDate: dayjs(value, 'YYYY-MM-DD[T]HH:mm:ssZ')?.format('YYYY-MM-DD'),
    startDate: dayjs(value, 'YYYY-MM-DD[T]HH:mm:ssZ')?.format('YYYY-MM-DD'),
  };

  return (
    <div className="flex flex-col">
      <DatePicker
        primaryColor="green"
        displayFormat={'DD/MM/YYYY'}
        i18n="vi"
        {...props}
        useRange={false}
        asSingle
        classNames={props?.classNames}
        disabled={isSubmitting || props?.disabled}
        value={formattedValue}
        onChange={(value) => {
          onFieldChange(
            value?.endDate
              ? dayjs(value?.endDate, 'YYYY-MM-DD')?.format(
                  'YYYY-MM-DD[T]HH:mm:ssZ',
                )
              : '',
          );
        }}
      />
      {error && (
        <span className="text-sm text-red-500 mt-1">{error?.message}</span>
      )}
    </div>
  );
};
