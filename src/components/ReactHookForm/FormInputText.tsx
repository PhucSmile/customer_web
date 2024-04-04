'use client';
import { useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FormInputTextPropsType } from '@/types/ReactHookFormTypes/FormInputTextPropsType';
import { Input } from '@/components/MaterialTailwind';

export const FormInputText = ({
  name,
  label,
  placeholder = ' ',
  className,
  disabled,
  variant,
}: FormInputTextPropsType) => {
  const {
    field: { value, onChange: onFieldChange, onBlur: onFieldBlur, ref },
    fieldState: { error },
    formState: { errors },
  } = useController({ name });

  return (
    <div className="flex flex-col w-full">
      <Input
        ref={ref}
        label={label}
        value={value}
        color="green"
        size="md"
        onChange={onFieldChange}
        onBlur={onFieldBlur}
        disabled={disabled}
        placeholder={placeholder}
        className={`${className}`}
        error={Boolean(error)}
        variant={variant}
      />
      <ErrorMessage
        name={name}
        errors={errors}
        render={({ message }) => (
          <span className="text-sm text-red-500 mt-1">{message}</span>
        )}
      />
    </div>
  );
};
