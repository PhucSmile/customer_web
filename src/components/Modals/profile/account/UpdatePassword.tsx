'use client';
import { FC, useState } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {
  SendOtpSmsType,
  SendOtpSmsSchema,
} from '@/schemas/AuthSchemas/SendOtpSmsSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '../../BaseModal';
import { Button } from '@/components/MaterialTailwind';
import { FormInputPhoneNumber } from '@/components/ReactHookForm/FormInputPhoneNumber';
import { FormInputText } from '@/components/ReactHookForm/FormInputText';

type UpdatePasswordModalTypeProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export const UpdatePasswordModal: FC<UpdatePasswordModalTypeProps> = ({
  isOpen,
  handleClose,
}) => {
  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(SendOtpSmsSchema),
  });
  const { handleSubmit } = methods;

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      size="xs"
      title="Cập nhật mật khẩu"
      modalClassName="min-w-fit max-w-xs"
      modalFooter={
        <div className="flex justify-end gap-2">
          <Button
            variant="text"
            color="gray"
            size="md"
            className="btn-secondary normal-case hover:text-white hover:!bg-inactive text-black"
            onClick={() => {
              handleClose();
            }}
          >
            Hủy
          </Button>
          <Button
            className="btn-primary normal-case bg-primary"
            color="green"
            size="md"
            onClick={() => {
              handleClose();
            }}
          >
            Lưu thay đổi
          </Button>
        </div>
      }
    >
      <div className="p-4 text-center">
        <FormProvider {...methods}>
          <div className="flex flex-col gap-2">
            <FormInputText name="text" label="Mật khẩu cũ" />
            <FormInputText name="text" label="Mật khẩu mới" />
            <FormInputText name="text" label="Nhập lại mật khẩu" />
          </div>
        </FormProvider>
      </div>
    </BaseModal>
  );
};
