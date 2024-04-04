'use client';
import { FormInputOtpPropsType } from '@/types/ReactHookFormTypes/FormInputOtpPropsType';
import { useController } from 'react-hook-form';
import InputOtp from 'react18-input-otp';

export const FormInputOtp = ({ name, ...props }: FormInputOtpPropsType) => {
  const {
    field: { onChange: onFieldChange, onBlur: onFieldBlur, value, ref },
    fieldState: { error },
    formState: { isSubmitting },
  } = useController({ name });

  const inputClassNames =
    '!w-10 h-10 sm:!w-12 sm:h-12 flex justify-center border-2 border-gray-300 rounded-lg text-center font-bold text-lg mx-1 md:mx-2';

  const containerClassNames = 'justify-center mt-4';

  return (
    <>
      <InputOtp
        numInputs={6}
        isDisabled={isSubmitting}
        {...props}
        value={value}
        onChange={onFieldChange}
        inputStyle={inputClassNames}
        containerStyle={containerClassNames}
      />
      {error && (
        <span className="text-sm text-red-500 mt-1">{error?.message}</span>
      )}
    </>
  );
};
