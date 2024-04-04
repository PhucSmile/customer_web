'use client';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SendOtpSmsSchema } from '@/schemas/AuthSchemas/SendOtpSmsSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '../../BaseModal';
import { Button, Typography } from '@/components/MaterialTailwind';
import { FormInputText } from '@/components/ReactHookForm/FormInputText';

type UpdateEmailModalTypeProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export const UpdateEmailModal: FC<UpdateEmailModalTypeProps> = ({
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
      title="Cập nhật email"
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
          <FormInputText name="email" label="Email" />
        </FormProvider>
        <Typography variant="small" className="text-left p-1">
          Mã xác minh (OTP) sẽ được gửi đến email này để xác minh lại!
        </Typography>
      </div>
    </BaseModal>
  );
};
