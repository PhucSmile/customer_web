'use client';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SendOtpSmsSchema } from '@/schemas/AuthSchemas/SendOtpSmsSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Rating, Textarea } from '@/components/MaterialTailwind';
import { BaseModal } from '../BaseModal';

type ReviewModalTypeProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export const ReviewModal: FC<ReviewModalTypeProps> = ({
  isOpen,
  handleClose,
}) => {
  const [rated, setRated] = useState(5);
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
      title="Thêm đánh giá"
      modalClassName="min-w-fit max-w-xs"
      size="sm"
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
            Gửi
          </Button>
        </div>
      }
    >
      <div className="text-center">
        <FormProvider {...methods}>
          <div className="flexStart gap-2 pb-2">
            <Rating value={5} onChange={(value) => setRated(value)} />
            <span color="blue-gray" className="font-medium">
              {rated}.0 Rated
            </span>
          </div>
          <div className="w-full">
            <Textarea color="green" label="Message" />
          </div>
        </FormProvider>
      </div>
    </BaseModal>
  );
};
