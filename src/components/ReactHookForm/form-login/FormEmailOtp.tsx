import { CSSProperties } from 'react';
import { useAuthModalContext } from '../../Modals/auth/AuthModal';
import { useCountdown, useEffectOnce, useUpdateEffect } from 'usehooks-ts';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  VerifyOtpEmailSchema,
  VerifyOtpEmailType,
} from '@/schemas/AuthSchemas/VerifyOtpEmailSchema';
import { FormInputOtp } from '../FormInputOtp';

import { useLoginContext } from '../../Context/LoginContext';
import { Button, IconButton } from '@/components/MaterialTailwind';
import ChevronBackLine from '../../SvgComponents/line/ChevronBackLine';
import {
  useSendOtpEmailMutation,
  useVerifyOtpEmailMutation,
} from '@/api/authService/authApi';

const FormEmailOtp = () => {
  const { setPageModal, email, otpResponse, setOtpResponse, handleClose } =
    useAuthModalContext();

  const { logIn } = useLoginContext();

  const methods = useForm<VerifyOtpEmailType>({
    resolver: zodResolver(VerifyOtpEmailSchema),
    values: {
      otp_id: otpResponse?.id ?? '',
      email: email ?? '',
      otp_code: '',
    },
  });

  const { handleSubmit } = methods;

  const { mutateAsync: resendEmail, isLoading: isSendOtpEmailLoading } =
    useSendOtpEmailMutation();

  const {
    mutateAsync: verifyOtpEmail,
    isLoading: isVerifyOtpEmailLoading,
    data: verifyEmailData,
  } = useVerifyOtpEmailMutation();

  const expireDate = otpResponse?.expire_at
    ? new Date(otpResponse.expire_at)
    : new Date();

  const currentDate = new Date();

  const remainingTime = (expireDate.getTime() - currentDate.getTime()) / 1000;

  const [timeleft, { startCountdown, resetCountdown }] = useCountdown({
    countStart: remainingTime,
    countStop: 0,
    intervalMs: 1000,
    isIncrement: false,
  });

  const showTime = new Date(timeleft * 1000).toISOString().substring(14, 19);

  useEffectOnce(() => {
    startCountdown();
  });

  useUpdateEffect(() => {
    resetCountdown();
    startCountdown();
  }, [otpResponse]);

  const onSubmit = async (values: VerifyOtpEmailType) => {
    const response = await verifyOtpEmail(values);

    if (response?.data?.data) {
      logIn(response?.data?.data);
      handleClose();
    }
  };

  const handleClickResend = () => {
    resendEmail(email ?? '').then((response) => {
      if (response?.data?.status === 1 && response?.data?.data) {
        setOtpResponse(response?.data?.data);
        // resetCountdown();
        // startCountdown();
      }
    });
  };

  const handleBackClick = () => {
    setPageModal((prev) => prev - 1);
  };

  return (
    <div className="mx-auto rounded-xl px-2 text-center sm:px-5">
      <div className="text-left ">
        <h1 className="text-2xl font-bold">Xác minh email của bạn</h1>
        <p className="text-gray-700">
          Nhập mã 6 chữ số được gửi đến cho bạn tại{' '}
          <span className="font-semibold text-black">{email}</span>
        </p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}>
          <FormInputOtp name="otp_code" />
          <p className="text-gray-700">
            Không nhận được mã?{' '}
            <button
              className={
                timeleft > 0
                  ? ''
                  : ' text-black loading cursor-pointer font-semibold'
              }
              type="button"
              disabled={isSendOtpEmailLoading || timeleft > 0}
              onClick={handleClickResend}
            >
              Gửi lại{' '}
              {isSendOtpEmailLoading && (
                <span
                  className="animate-spin radial-progress"
                  style={
                    {
                      '--value': 50,
                      '--size': '1rem',
                    } as CSSProperties
                  }
                />
              )}
            </button>{' '}
            {timeleft > 0 ? (
              <span className="text-primary">sau {showTime}</span>
            ) : null}
          </p>
          {verifyEmailData?.data?.status === 100 && (
            <span className="text-sm text-red-500 mt-1">
              OTP đã hết hạn, vui lòng gửi lại
            </span>
          )}
          <div className="mt-4">
            <Button
              disabled={isVerifyOtpEmailLoading}
              className={`btn-primary w-3/5 bg-primary ${
                isVerifyOtpEmailLoading && 'loading'
              }`}
              type="submit"
              color="green"
              size="lg"
            >
              Tiếp tục
            </Button>
          </div>
        </form>
      </FormProvider>
      <button
        className="text-left hover:text-primary cursor-pointer flex items-center normal-case whitespace-nowrap"
        onClick={handleBackClick}
      >
        <ChevronBackLine className="w-4 h-4 mr-1" />
        Quay lại
      </button>
    </div>
  );
};

export default FormEmailOtp;
