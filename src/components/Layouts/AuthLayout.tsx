import Image from 'next/image';
import { ReactNode } from 'react';
type AuthLayoutProps = {
  title?: string;
  children?: ReactNode;
};
const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <>
      <div className="transition-primary mx-auto grid grid-cols-1 lg:grid-cols-5 overflow-hidden rounded-2xl text-center shadow-2xl">
        <div className="col-span-2 w-full hidden lg:block">
          <Image
            src="/img/authimage1.png"
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-full"
            priority
          />
        </div>
        <div className="col-span-3 mx-auto p-3">
          <Image
            src="/logosecond.png"
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-auto object-cover"
          />
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
