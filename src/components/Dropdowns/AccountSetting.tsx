import { useState } from 'react';
import Link from 'next/link';
import AuthModal, { useAuthModalContext } from '../Modals/auth/AuthModal';
import { useLoginContext } from '../Context/LoginContext';
import { useGetUserSelfInfoQuery } from '@/api/authService/authApi';
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@/components/MaterialTailwind';
import LogOutLine from '../SvgComponents/line/LogOutLine';
import BagLine from '../SvgComponents/line/BagLine';
import ChevronDownLine from '../SvgComponents/line/ChevronDownLine';
import PersonLine from '../SvgComponents/line/PersonLine';
import { useIsFirstRender } from 'usehooks-ts';

const AccountSetting = () => {
  const isFirstRender = useIsFirstRender();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setPageModal } = useAuthModalContext();
  const { isLogin, logOut } = useLoginContext();

  const { data: selfInfoResponse, isFetching: isGetUserSelfInfoFetching } =
    useGetUserSelfInfoQuery({ enabled: !isFirstRender && isLogin });

  const closeMenu = () => setIsMenuOpen(false);

  const handleCloseAuthModal = () => {
    setIsOpenAuthModal(false);
  };

  const handleOpenAuthModal = () => {
    setIsOpenAuthModal(true);
  };

  const handleLogOut = () => {
    logOut();
  };

  return (
    <>
      {isLogin ? (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            {isGetUserSelfInfoFetching ? (
              <div className="animate-pulse flex space-x-4">
                <div className="relative rounded-full bg-slate-200 h-8 w-8"></div>
                <div className="h-2 bg-slate-200 rounded w-20 my-auto"></div>
              </div>
            ) : (
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
              >
                <Avatar
                  variant="circular"
                  alt="vu phan"
                  className="border border-green-500 p-0.5 cursor-pointer w-[32px] h-[32px]"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <Typography className="hidden md:block text-sm">
                  {selfInfoResponse?.data?.data?.name ?? ''}
                </Typography>
                <ChevronDownLine
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </Button>
            )}
          </MenuHandler>
          <MenuList className="p-1 z-[9999]">
            <Link href="/profile/my-account" className="font-normal">
              <MenuItem className="flex items-center gap-2 hover:!text-primary">
                <PersonLine className="h-4 w-4" />
                Thông tin tài khoản
              </MenuItem>
            </Link>
            <Link href="/profile/my-orders" className="font-normal">
              <MenuItem className="flex items-center gap-2 hover:!text-primary">
                <BagLine className="h-4 w-4" />
                Đơn Mua
              </MenuItem>
            </Link>
            <hr className="my-2 border-blue-gray-50" />
            <Link href={`/`}>
              <MenuItem
                className="flex items-center gap-2 hover:!text-red-400 hover:!bg-red-500/10"
                onClick={handleLogOut}
              >
                <LogOutLine className="h-4 w-4" />
                <Typography variant="small" className="font-normal">
                  Đăng xuất
                </Typography>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      ) : (
        <button
          className="flexStart gap-1 whitespace-nowrap py-2 px-2 md:px-4 rounded-md hover:bg-underground hover:text-primary"
          onClick={() => {
            handleOpenAuthModal();
            setPageModal(0);
          }}
        >
          <PersonLine className="w-6 h-6" />
          <span className="hidden text-sm md:block">Tài khoản</span>
        </button>
      )}
      <AuthModal isOpen={isOpenAuthModal} handleClose={handleCloseAuthModal} />
    </>
  );
};

export default AccountSetting;
