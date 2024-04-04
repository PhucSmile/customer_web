'use client';
import { useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Checkbox } from '@/components/MaterialTailwind';
import { FC } from 'react';
import { FormInputCheckboxPropsType } from '@/types/ReactHookFormTypes/FormInputCheckboxPropsType';
import { checkEqual } from '@/utils/checkEqual';

export const FormInputCheckbox: FC<FormInputCheckboxPropsType> = ({
  name,
  label,
  value,
  className,
  disabled,
}) => {
  const {
    field: {
      value: checkboxValue,
      onChange: onFieldChange,
      onBlur: onFieldBlur,
      ref,
    },
    formState: { errors, isSubmitting },
  } = useController({ name });

  return (
    <>
      <Checkbox
        ref={ref}
        name={name}
        checked={checkboxValue === value}
        ripple={false}
        onChange={(event) => onFieldChange(value)}
        onBlur={onFieldBlur}
        className={className}
        disabled={disabled || isSubmitting}
        label={label}
      />
      <ErrorMessage
        name={name}
        errors={errors}
        render={({ message }) => (
          <span className="text-sm text-red-500 mt-1">{message}</span>
        )}
      />
    </>
  );
};
