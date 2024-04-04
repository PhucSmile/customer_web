import { size } from '@/components/MaterialTailwind/types/dialog';

export type BaseModalPropsType = {
  handleClose: (value: any) => void;
  onCloseButtonClick: () => void;
  onTransitionEnd?: () => void;
  isOpen: boolean;
  title?: React.ReactNode;
  children: React.ReactNode;
  modalFooter?: React.ReactNode;
  isLoading?: boolean;
  size?: size;
  modalClassName?: string;
  modalHeaderClassName?: string;
  modalTitleClassName?: string;
  modalBodyClassName?: string;
  modalFooterClassName?: string;
};
