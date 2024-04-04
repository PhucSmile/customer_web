import Link from 'next/link';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  SendOtpSmsSchema,
  SendOtpSmsType,
} from '@/schemas/AuthSchemas/SendOtpSmsSchema';

import { zodResolver } from '@hookform/resolvers/zod';
import { GoogleLogin } from '@react-oauth/google';
import { LoginButton } from 'react-facebook';
import { Button } from '@/components/MaterialTailwind';
import { useLoginContext } from '@/components/Context/LoginContext';
import { useAuthModalContext } from '@/components/Modals/auth/AuthModal';
import LogoFacebookSolid from '@/components/SvgComponents/solid/LogoFacebookSolid';
import { FormInputText } from '../FormInputText';
import {
  useLoginGoogleMutation,
  useSendOtpSmsMutation,
} from '@/api/authService/authApi';

const defaultValues: SendOtpSmsType = {
  phone: '',
};

const FormLoginPhoneNumber = () => {
  const { mutateAsync: googleLoginAsync } = useLoginGoogleMutation();
  const methods = useForm<SendOtpSmsType>({
    defaultValues,
    resolver: zodResolver(SendOtpSmsSchema),
  });

  const { handleSubmit } = methods;
  const { mutateAsync } = useSendOtpSmsMutation();
  const { setPageModal, setPhone, setOtpResponse, handleClose } =
    useAuthModalContext();
  const { logIn } = useLoginContext();

  const onSubmit: SubmitHandler<SendOtpSmsType> = async ({ phone }) => {
    const {
      data: { data, status },
    } = await mutateAsync({ phone });
    if (status === 1) {
      setPhone(phone);
      setOtpResponse(data);
      setPageModal((prev) => prev + 1);
    }
  };
  return (
    <>
      <div className="mx-auto rounded-xl px-2 text-center sm:px-5">
        <div className="text-left">
          <h1 className="text-xl font-bold">Greeting from Moga!</h1>
          <p>
            Chúng tôi rất vui khi có bạn ở đây. Chúng tôi sẵn sàng giúp bạn tận
            dụng tối đa ứng dụng của chúng tôi.
          </p>
        </div>
        <div>
          <div className="mb-5 mt-2">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-5">
                <div className="group relative my-4 z-0 w-full">
                  <FormInputText
                    name="phone"
                    label="Số điện thoại"
                    variant="standard"
                    className="text-xl"
                  />
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    color="green"
                    size="lg"
                    className="bg-primary btn-primary w-3/5"
                  >
                    Tiếp tục
                  </Button>
                </div>
              </form>
            </FormProvider>
            <span
              className="text-sm text-primary hover:text-green-800 cursor-pointer"
              onClick={() => {
                setPageModal(2);
              }}
            >
              Đăng nhập bằng email
            </span>
          </div>
          <div className="my-2">
            <div className="my-2 flexCenter">
              <div className="h-[1px] w-full bg-gray-300"></div>
              <p className="mx-2 text-sm whitespace-nowrap text-gray-500">
                Hoặc bằng
              </p>
              <div className="h-[1px] w-full bg-gray-300"></div>
            </div>
            <div className="flexCenter gap-4">
              <GoogleLogin
                onSuccess={(credentialResponse) =>
                  googleLoginAsync(
                    {
                      idtoken: credentialResponse.credential ?? '',
                    },
                    {
                      onSuccess: (response) => {
                        if (
                          response?.data?.status === 1 &&
                          response?.data?.data
                        ) {
                          logIn(response.data.data);
                          handleClose();
                        }
                      },
                      onError: (error) => console.log(error),
                    },
                  )
                }
                type="icon"
                shape="circle"
              />
              {/* <button onClick={() => {}}>
            <FacebookIcon className="h-10 w-10 text-blue-700" />
          </button> */}
              <LoginButton
                scope="email"
                onError={(error) => console.log(error)}
                onSuccess={(response) => console.log(response)}
              >
                <LogoFacebookSolid className="h-10 w-10 text-blue-700" />
              </LoginButton>
              {/* <div>
            <Link href="">
              <img
                className="h-8 w-8 rounded-full hover:shadow-md"
                src="/Apple.png"
                alt=""
              />
            </Link>
          </div> */}
            </div>
          </div>
          <p className="text-xs">
            Bằng việc tiếp tục, bạn đã đồng ý với Moga về{' '}
            <Link href="" className="font-semibold text-primary">
              Điều khoản dịch vụ{' '}
            </Link>
            &
            <Link href="" className="font-semibold text-primary">
              {' '}
              Chính sách bảo mật.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default FormLoginPhoneNumber;
