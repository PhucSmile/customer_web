import { FC } from 'react';
import { BaseModal } from '../../BaseModal';
import { Button, Typography } from '@/components/MaterialTailwind';

type ModalMissingConFirmTypeProps = {
  isOpen: boolean;
  handleClose: () => void;
};
const MissingConFirmModal: FC<ModalMissingConFirmTypeProps> = ({
  isOpen,
  handleClose,
}) => {
  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      modalClassName="min-w-fit"
      title={'If I missed confirming the packages before this plan expires?'}
      modalFooter={
        <div className="flex justify-end gap-2">
          <Button
            type="button"
            size="md"
            color="green"
            className="btn-primary bg-primary"
            onClick={() => {
              handleClose();
            }}
          >
            Ok, got it!
          </Button>
        </div>
      }
    >
      <Typography variant="paragraph" className="text-left">
        Explain some things here
      </Typography>
    </BaseModal>
  );
};

export default MissingConFirmModal;
