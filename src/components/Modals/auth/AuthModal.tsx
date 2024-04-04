'use client';
import AuthLayout from '@/components/Layouts/AuthLayout';
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import FormEmailOtp from '@/components/ReactHookForm/form-login/FormEmailOtp';
import { SendOtpEmailResponseType } from '@/schemas/AuthSchemas/SendOtpEmailSchema';
import { useLoginContext } from '@/components/Context/LoginContext';
import { BaseAuthModal } from '../BaseAuthModal';
import { Button } from '@/components/MaterialTailwind';
import FormLoginEmail from '@/components/ReactHookForm/form-login/FormLoginEmail';
import FormLoginPhoneNumber from '@/components/ReactHookForm/form-login/FormLoginPhoneNumber';
import FormSmsOTP from '@/components/ReactHookForm/form-login/FormSmsOtp';

type ModalDiscountTypeProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const AuthModalContext = createContext<{
  pageModal: number;
  setPageModal: Dispatch<SetStateAction<number>>;
  email?: string | null;
  setEmail: Dispatch<SetStateAction<string | null | undefined>>;
  phone?: string | null;
  setPhone: Dispatch<SetStateAction<string | null | undefined>>;
  otpResponse?: SendOtpEmailResponseType | null;
  setOtpResponse: Dispatch<
    SetStateAction<SendOtpEmailResponseType | null | undefined>
  >;
  handleClose: () => void;
}>({
  pageModal: 0,
  setPageModal: () => {},
  email: '',
  setEmail: () => {},
  phone: '',
  setPhone: () => {},
  otpResponse: null,
  setOtpResponse: () => {},
  handleClose: () => {},
});

export const useAuthModalContext = () => useContext(AuthModalContext);
type CheckLoginPropsType = {
  children: ({
    isLogin,
    openAuthModal,
  }: {
    isLogin: boolean;
    openAuthModal: (onLoginSuccess?: () => void) => void;
  }) => ReactNode;
};

export const CheckLogin: FC<CheckLoginPropsType> = ({ children }) => {
  const { isLogin, setOnLoginSuccess } = useLoginContext();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState<boolean>(false);

  const handleCloseAuthModal = () => setIsOpenAuthModal(false);

  const openAuthModal: (onLoginSuccess?: () => void) => void = (
    onLoginSuccess,
  ) => {
    setOnLoginSuccess(onLoginSuccess);
    setIsOpenAuthModal(true);
  };

  return (
    <>
      {children({ isLogin, openAuthModal })}
      {!isLogin && (
        <AuthModal
          isOpen={isOpenAuthModal}
          handleClose={handleCloseAuthModal}
        />
      )}
    </>
  );
};

const AuthModal: FC<ModalDiscountTypeProps> = ({ isOpen, handleClose }) => {
  const [pageModal, setPageModal] = useState<number>(0);
  const [email, setEmail] = useState<string | null | undefined>('');
  const [phone, setPhone] = useState<string | null | undefined>('');
  const [otpResponse, setOtpResponse] = useState<
    SendOtpEmailResponseType | null | undefined
  >(null);

  return (
    <BaseAuthModal
      isOpen={isOpen}
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      modalClassName="min-w-fit"
      onTransitionEnd={() => {
        if (!isOpen) {
          setEmail('');
          setPhone('');
          setOtpResponse(null);

          if (pageModal > 0) setPageModal(0);
        }
      }}
      modalFooter={
        <div className="flex justify-end gap-2">
          <Button
            variant="text"
            color="gray"
            size="md"
            className="btn-secondary hover:text-white hover:!bg-inactive text-black uppercase"
            onClick={() => {
              handleClose();
            }}
          >
            Hủy
          </Button>
          <Button
            className="btn-primary bg-primary"
            color="green"
            size="md"
            onClick={() => {
              handleClose();
            }}
          >
            Xác nhận
          </Button>
        </div>
      }
    >
      <AuthLayout title="Đăng nhập">
        <AuthModalContext.Provider
          value={{
            pageModal,
            setPageModal,
            email,
            setEmail,
            phone,
            setPhone,
            otpResponse,
            setOtpResponse,
            handleClose,
          }}
        >
          {(pageModal === 0 && <FormLoginPhoneNumber />) ||
            (pageModal === 1 && <FormSmsOTP />) ||
            (pageModal === 2 && <FormLoginEmail />) ||
            (pageModal === 3 && <FormEmailOtp />)}
        </AuthModalContext.Provider>
      </AuthLayout>
    </BaseAuthModal>
  );
};

export default AuthModal;
