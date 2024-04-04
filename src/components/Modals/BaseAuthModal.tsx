import { BaseModalPropsType } from '@/types/BaseModalPropsType';
import {
  Dialog,
  DialogBody,
  IconButton,
  Typography,
} from '@/components/MaterialTailwind';
import { FC } from 'react';
import CloseLine from '../SvgComponents/line/CloseLine';

export const BaseAuthModal: FC<BaseModalPropsType> = ({
  handleClose,
  onCloseButtonClick,
  isOpen = false,
  children,
  isLoading = false,
  size,
  onTransitionEnd,
  modalClassName,
  modalTitleClassName,
  modalBodyClassName,
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
    className={`flex flex-col max-h-[92vh] rounded-2xl relative duration-0 ${modalClassName}`}
    open={isOpen}
    // handler={handleClose}
    handler={() => {}}
  >
    <IconButton
      color="gray"
      className="!absolute z-50 -right-5 -top-5 rounded-full shadow-lg btn-secondary bg-white hover:text-white"
      disabled={isLoading}
      onClick={onCloseButtonClick}
    >
      <CloseLine className="text-black w-6 h-6" />
    </IconButton>
    <DialogBody
      className={`overflow-auto p-0 rounded-2xl ${modalBodyClassName}`}
    >
      {children}
    </DialogBody>
  </Dialog>
);
