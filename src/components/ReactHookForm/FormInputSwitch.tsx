'use client';
import { useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Switch } from '@/components/MaterialTailwind';
import { FormInputSwitchPropsType } from '@/types/ReactHookFormTypes/FormInputSwitchPropsType';
import { FC } from 'react';

export const FormInputSwitch: FC<FormInputSwitchPropsType> = ({
  name,
  label,
  className,
  disabled,
  color,
}) => {
  const {
    field: { value, onChange: onFieldChange, onBlur: onFieldBlur, ref },
    formState: { errors, isSubmitting },
  } = useController({ name });

  return (
    <>
      <Switch
        ref={ref}
        name={name}
        checked={value}
        onChange={(event) => onFieldChange(event.currentTarget.checked)}
        onBlur={onFieldBlur}
        className={className}
        disabled={disabled || isSubmitting}
        label={label}
        color={color}
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
