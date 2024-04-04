import { ReactNode } from 'react';

const MyAccountLayout = ({
  personal_info,
  security,
}: {
  personal_info: ReactNode;
  security: ReactNode;
}) => {
  return (
    <>
      <h1 className="text-xl py-3">Thông tin tài khoản</h1>
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-2 sm:gap-y-5 lg:gap-x-5">
          <div className="col-span-2 bg-white p-2 rounded-md shadow-md lg:px-4">
            {personal_info}
          </div>
          <div className="col-span-3 bg-white rounded-md shadow-md p-2 lg:px-4">
            {security}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccountLayout;
