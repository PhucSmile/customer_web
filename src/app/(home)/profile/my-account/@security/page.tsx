'use client';
import CallLine from '@/components/SvgComponents/line/CallLine';
import { Button } from '@/components/MaterialTailwind';
import MailLine from '@/components/SvgComponents/line/MailLine';
import LockClosedLine from '@/components/SvgComponents/line/LockClosedLine';
import { useState } from 'react';
import { UpdatePhoneModal } from '@/components/Modals/profile/account/UpdatePhoneModal';
import { UpdateEmailModal } from '@/components/Modals/profile/account/UpdateEmailModal';
import { UpdatePasswordModal } from '@/components/Modals/profile/account/UpdatePassword';
import GoogleLogo from '@/components/SvgComponents/other/GoogleLogo';

const Security = () => {
  const [isOpenUpdatePhoneModal, setIsOpenUpdatePhoneModal] =
    useState<boolean>(false);

  const [isOpenUpdateEmailModal, setIsOpenUpdateEmailModal] =
    useState<boolean>(false);

  const [isOpenUpdatePasswordModal, setIsOpenUpdatePasswordModal] =
    useState<boolean>(false);

  const handleCloseUpdatePhoneModal = () => {
    setIsOpenUpdatePhoneModal(false);
  };

  const handleOpenUpdatePhoneModal = () => {
    setIsOpenUpdatePhoneModal(true);
  };

  const handleCloseUpdateEmailModal = () => {
    setIsOpenUpdateEmailModal(false);
  };

  const handleOpenUpdateEmailModal = () => {
    setIsOpenUpdateEmailModal(true);
  };

  const handleCloseUpdatePasswordModal = () => {
    setIsOpenUpdatePasswordModal(false);
  };

  const handleOpenUpdatePasswordModal = () => {
    setIsOpenUpdatePasswordModal(true);
  };

  return (
    <>
      <div>
        <h1 className="font-medium text-textSecondary">
          Số điện thoại và Email
        </h1>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center py-2 border-b">
          <div className="flex justify-start items-start gap-2">
            <CallLine className="w-6 h-6 text-textSecondary" />
            <div className="flex flex-col items-start text-base">
              <span>Số điện thoại</span>
              <span>0399999999</span>
            </div>
          </div>
          <Button
            variant="outlined"
            color="green"
            size="sm"
            className="hover:!bg-primary p-2 normal-case text-primary hover:text-white !transition-primary"
            onClick={handleOpenUpdatePhoneModal}
          >
            Cập nhật
          </Button>
        </div>
        <div className="flex flex-col sm:flexBetween py-2">
          <div className="flex justify-start items-start gap-2">
            <MailLine className="w-6 h-6 text-textSecondary" />
            <div className="flex flex-col items-start text-base">
              <span>Địa chỉ email</span>
              <span>vuphan0804@gmail.com</span>
            </div>
          </div>
          <Button
            variant="outlined"
            color="green"
            size="sm"
            className="hover:!bg-primary p-2 normal-case text-primary hover:text-white !transition-primary"
            onClick={handleOpenUpdateEmailModal}
          >
            Cập nhật
          </Button>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-textSecondary">Bảo mật</h1>
        <div className="flexBetween py-2">
          <div className="flexStart gap-2">
            <LockClosedLine className="w-6 h-6 text-textSecondary" />
            <span>Đổi mật khẩu</span>
          </div>
          <Button
            variant="outlined"
            color="green"
            size="sm"
            className="hover:!bg-primary p-2 normal-case text-primary hover:text-white !transition-primary"
            onClick={handleOpenUpdatePasswordModal}
          >
            Cập nhật
          </Button>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-textSecondary">Liên kết mạng xã hội</h1>
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-start items-center gap-2">
            <GoogleLogo className="w-6 text-textSecondary" />
            <span>Google</span>
          </div>
          <Button
            variant="outlined"
            color="green"
            size="sm"
            className="hover:!bg-primary p-2 normal-case text-primary hover:text-white !transition-primary"
          >
            Cập nhật
          </Button>
        </div>
      </div>

      <UpdatePhoneModal
        isOpen={isOpenUpdatePhoneModal}
        handleClose={handleCloseUpdatePhoneModal}
      />
      <UpdateEmailModal
        isOpen={isOpenUpdateEmailModal}
        handleClose={handleCloseUpdateEmailModal}
      />
      <UpdatePasswordModal
        isOpen={isOpenUpdatePasswordModal}
        handleClose={handleCloseUpdatePasswordModal}
      />
    </>
  );
};

export default Security;
