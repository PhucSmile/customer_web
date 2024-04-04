import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SendOtpEmailSchema,
  SendOtpEmailType,
} from '@/schemas/AuthSchemas/SendOtpEmailSchema';
import { Button, IconButton } from '@/components/MaterialTailwind';
import { useAuthModalContext } from '@/components/Modals/auth/AuthModal';
import ChevronBackLine from '@/components/SvgComponents/line/ChevronBackLine';
import { FormInputText } from '../FormInputText';
import { useSendOtpEmailMutation } from '@/api/authService/authApi';
import { commonAPIStatus } from '@/utils/CommonAPIStatus';

const defaultValues: SendOtpEmailType = {
  email: '',
};

const FormLoginEmail = () => {
  const methods = useForm<SendOtpEmailType>({
    defaultValues,
    resolver: zodResolver(SendOtpEmailSchema),
  });

  const { handleSubmit } = methods;
  const { setPageModal, setEmail, setOtpResponse } = useAuthModalContext();

  const {
    mutateAsync,
    isLoading,
    data: sendOtpMutationResponse,
  } = useSendOtpEmailMutation();

  const onSubmit: SubmitHandler<SendOtpEmailType> = async ({ email }) => {
    const {
      data: { data, status },
    } = await mutateAsync(email);
    if (status === 1) {
      setEmail(email);
      setOtpResponse(data ?? null);
      setPageModal((prev) => prev + 1);
    }
  };

  const handleBackClick = () => {
    setPageModal(0);
  };
  return (
    <>
      <div className="mx-auto pt-10 rounded-xl px-2 text-center sm:px-5">
        <div className="text-left">
          <h1 className="text-2xl font-bold">Nhập email của bạn</h1>
          <p className="text-gray-600">
            Email sẽ được sử dụng để đăng ký và đăng nhập vào Moga.
          </p>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto mt-5 text-center"
            >
              <div className="group relative z-0 mb-6 w-full">
                <FormInputText
                  name="email"
                  label="Email"
                  className="text-xl"
                  variant="standard"
                />
                {sendOtpMutationResponse?.data?.status !== 1 ? (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      commonAPIStatus?.find(
                        (item) =>
                          item.status === sendOtpMutationResponse?.data?.status,
                      )?.message
                    }
                  </span>
                ) : null}
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className={`btn-primary w-3/5 bg-primary ${
                  isLoading && 'loading'
                }`}
                color="green"
                size="lg"
              >
                Tiếp tục
              </Button>
            </form>
          </FormProvider>
        </div>
        <button
          className="text-left text-sm hover:text-primary cursor-pointer flex items-center normal-case whitespace-nowrap"
          onClick={handleBackClick}
        >
          <ChevronBackLine className="w-4 h-4 mr-1" />
          Quay lại
        </button>
      </div>
    </>
  );
};

export default FormLoginEmail;
