import { ConfirmDeleteModalPropsType } from '@/types/ConfirmDeleteModalPropsType';
import { BaseModal } from './BaseModal';
import { Button, Typography } from '@/components/MaterialTailwind';

export const ConfirmDeleteModal = <
  TData extends Record<string, any> | string | boolean | number,
>({
  isOpen,
  handleClose,
  title,
  message,
  delete_id,
  onSuccess,
  onTransitionEnd,
  useDeleteMutation,
}: ConfirmDeleteModalPropsType<TData>) => {
  const { mutateAsync, isLoading: isDeleteLoading } = useDeleteMutation({
    onSuccess: () => onSuccess?.(),
  });

  const handleDelete = async () => {
    await mutateAsync(delete_id);
    handleClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      size="sm"
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      onTransitionEnd={onTransitionEnd}
      title={title}
      isLoading={isDeleteLoading}
      modalFooter={
        <div className="flex justify-end gap-2">
          <Button
            type="button"
            className="btn-secondary text-xs uppercase px-10"
            onClick={handleClose}
          >
            Quay lại
          </Button>
          <Button
            className="btn-primary bg-primary px-10"
            color="green"
            size="md"
            onClick={() => {
              handleDelete();
            }}
          >
            Xác nhận
          </Button>
        </div>
      }
    >
      <Typography>{message}</Typography>
    </BaseModal>
  );
};
