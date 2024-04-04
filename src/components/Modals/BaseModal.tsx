import { BaseModalPropsType } from '@/types/BaseModalPropsType';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
} from '@/components/MaterialTailwind';
import { FC } from 'react';
import CloseLine from '../SvgComponents/line/CloseLine';

export const BaseModal: FC<BaseModalPropsType> = ({
  handleClose,
  onCloseButtonClick,
  isOpen = false,
  title = 'Modal',
  children,
  modalFooter,
  isLoading = false,
  size,
  onTransitionEnd,
  modalClassName,
  modalHeaderClassName,
  modalTitleClassName,
  modalBodyClassName,
  modalFooterClassName,
}) => (
  <Dialog
    size={size}
    animate={{
      mount: { scale: 1 },
      unmount: {
        scale: 0.9,
      },
    }}
    onTransitionEnd={onTransitionEnd}
    className={`flex flex-col max-h-[92vh] ${modalClassName}`}
    open={isOpen}
    // handler={handleClose}
    handler={() => {}}
  >
    <DialogHeader
      className={`flex font-bold justify-between relative py-1 ${modalHeaderClassName}`}
    >
      <Typography variant="h5" className={`${modalTitleClassName}`}>
        {title}
      </Typography>
      <IconButton
        variant="filled"
        color="gray"
        className="-top-8 -right-8 rounded-full shadow-lg btn-secondary bg-white hover:text-white"
        disabled={isLoading}
        onClick={onCloseButtonClick}
      >
        <CloseLine className="text-black w-6 h-6" />
      </IconButton>
    </DialogHeader>
    <DialogBody
      className={`overflow-auto p-4 border-b border-t ${modalBodyClassName}`}
    >
      {children}
    </DialogBody>
    <DialogFooter className={`px-4 py-1 ${modalFooterClassName}`}>
      {modalFooter}
    </DialogFooter>
  </Dialog>
);
