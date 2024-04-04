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

type UpdatePhoneModalTypeProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export const UpdatePhoneModal: FC<UpdatePhoneModalTypeProps> = ({
  isOpen,
  handleClose,
}) => {
  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(SendOtpSmsSchema),
  });
  const { handleSubmit } = methods;

  //const {} = useRegsiter

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      title="Cập nhật số điện thoại"
      size="xs"
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
      <div className="p-4 text-center animate-slideToLeft">
        <FormProvider {...methods}>
          <FormInputPhoneNumber name="phone" label="Số điện thoại" />
        </FormProvider>
        {/* <Typography variant="small" className="max-w-xs text-left">
          Mã xác minh (OTP) sẽ được gửi đến số điện thoại này để xác minh lại!
        </Typography> */}
      </div>
    </BaseModal>
  );
};
