import { CSSProperties } from 'react';
import { useCountdown, useEffectOnce, useUpdateEffect } from 'usehooks-ts';
import {
  useSendOtpSmsMutation,
  useVerifyOtpSmsMutation,
} from '@/api/authService/authApi';
import { FormProvider, useForm } from 'react-hook-form';
import {
  VerifyOtpSmsSchema,
  VerifyOtpSmsType,
} from '@/schemas/AuthSchemas/VerifyOtpSmsSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/MaterialTailwind';
import { useLoginContext } from '@/components/Context/LoginContext';
import ChevronBackLine from '@/components/SvgComponents/line/ChevronBackLine';
import { FormInputOtp } from '../FormInputOtp';
import { useAuthModalContext } from '@/components/Modals/auth/AuthModal';

const FormSmsOTP = () => {
  const { setPageModal, otpResponse, setOtpResponse, phone, handleClose } =
    useAuthModalContext();

  const { logIn } = useLoginContext();

  const methods = useForm<VerifyOtpSmsType>({
    resolver: zodResolver(VerifyOtpSmsSchema),
    values: {
      otp_id: otpResponse?.id ?? '',
      phone: phone ?? '',
      otp_code: '',
    },
  });

  const { handleSubmit } = methods;

  const { mutateAsync: resendSms, isLoading: isSendOtpSmsLoading } =
    useSendOtpSmsMutation();

  const {
    mutateAsync: verifyOtpSms,
    isLoading: isVerifyOtpSmsLoading,
    data: verifySmsData,
  } = useVerifyOtpSmsMutation();

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

  const onSubmit = async (values: VerifyOtpSmsType) => {
    const response = await verifyOtpSms(values);

    if (response?.data?.data) {
      logIn(response?.data?.data);
      handleClose();
    }
  };

  const handleClickResend = () => {
    resendSms({ phone: phone ?? '' }).then((response) => {
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
        <h1 className="text-2xl font-bold">Xác minh số điện thoại của bạn</h1>
        <p className="text-gray-700">
          Nhập mã 6 chữ số được gửi đến cho bạn tại{' '}
          <span className="font-semibold text-black">{phone}</span>
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
              disabled={isSendOtpSmsLoading || timeleft > 0}
              onClick={handleClickResend}
            >
              Gửi lại{' '}
              {isSendOtpSmsLoading && (
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
          {verifySmsData?.data?.status === 100 && (
            <span className="text-sm text-red-500 mt-1">
              OTP đã hết hạn, vui lòng gửi lại
            </span>
          )}
          <div className="mt-4">
            <Button
              disabled={isVerifyOtpSmsLoading}
              className={`btn-primary bg-primary w-3/5 text-xs ${
                isVerifyOtpSmsLoading && 'loading'
              }`}
              color="green"
              size="lg"
              type="submit"
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

export default FormSmsOTP;
