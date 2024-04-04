'use client';
import { useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Radio } from '@/components/MaterialTailwind';
import { FC, useId } from 'react';
import { FormInputRadioPropsType } from '@/types/ReactHookFormTypes/FormInputRadioPropsType';

export const FormInputRadio: FC<FormInputRadioPropsType> = ({
  name,
  label,
  value,
  className,
  disabled,
}) => {
  const {
    field: {
      value: radioValue,
      onChange: onFieldChange,
      onBlur: onFieldBlur,
      ref,
    },
    formState: { errors, isSubmitting },
  } = useController({ name });
  const id = useId();

  return (
    <>
      <Radio
        ref={ref}
        id={id}
        name={name}
        checked={radioValue === value}
        ripple={false}
        onChange={() => onFieldChange(value)}
        onBlur={onFieldBlur}
        className={`h-5 w-5 before:h-4 before:w-4 ${className}`}
        disabled={disabled || isSubmitting}
        label={label}
      />
    </>
  );
};
