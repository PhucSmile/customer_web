'use client';
import { FormInputPropsType } from '@/types/ReactHookFormTypes/FormInputPropsType';
import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@/components/MaterialTailwind';
import { InputProps } from '@/components/MaterialTailwind/types/input';
import { FC, Ref, forwardRef } from 'react';
import { useController } from 'react-hook-form';
import PhoneInputWithoutSelect from 'react-phone-number-input/input';
//import vi from 'react-phone-number-input/locale/vi.json';
import 'react-phone-number-input/style.css';

const CustomInput = forwardRef(
  (props: Omit<InputProps, 'ref'>, ref: Ref<HTMLInputElement>) => {
    return <Input inputRef={ref} {...props} color="green" size="md" />;
  },
);
CustomInput.displayName = 'CustomInput';

export const FormInputPhoneNumber: FC<FormInputPropsType> = ({
  name,
  label,
}) => {
  const {
    field: { value, onChange: onFieldChange, onBlur: onFieldBlur, ref },
    fieldState: { error },
    formState: { errors },
  } = useController({ name });

  return (
    <div className="flex flex-col">
      <PhoneInputWithoutSelect
        //labels={vi}
        country="VN"
        international
        withCountryCallingCode
        value={value}
        label={label}
        ref={ref}
        onChange={onFieldChange}
        onBlur={onFieldBlur}
        inputComponent={CustomInput}
        error={Boolean(error)}
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
