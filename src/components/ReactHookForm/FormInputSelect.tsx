'use client';
import { useController } from 'react-hook-form';
import { Option, Select } from '@/components/MaterialTailwind';
import { FormInputSelectPropsType } from '@/types/ReactHookFormTypes/FormInputSelectPropsType';
import { checkEmpty } from '@/utils/checkEmpty';
import { useEffectOnce, useUpdateEffect } from 'usehooks-ts';
import { useRef } from 'react';

export const FormInputSelect = <T extends Record<string, any>>({
  name,
  options,
  mapOption,
  ...props
}: FormInputSelectPropsType<T>) => {
  const isFirstSelected = useRef<boolean>(true);
  const {
    field: { value, onChange: onFieldChange, onBlur: onFieldBlur, ref },
    fieldState: { error },
  } = useController({ name: name ?? '' });

  useUpdateEffect(() => {
    if ((options?.length as number) > 0 && isFirstSelected.current) {
      isFirstSelected.current = false;
      onFieldChange(options?.map(mapOption)?.[0]?.value);
    }
  }, [options, mapOption]);

  return (
    <div className="flex flex-col w-full">
      <Select
        variant="standard"
        color="green"
        className="border-none ring-0"
        {...props}
        ref={ref}
        name={name}
        value={value}
        onChange={onFieldChange}
        onBlur={onFieldBlur}
        error={!checkEmpty(error)}
      >
        {options?.map(mapOption)?.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};
