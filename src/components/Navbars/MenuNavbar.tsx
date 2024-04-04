'use client';
import React from 'react';

import { MenuHeaderType } from '@/types/MenuHeader';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { List, MenuItem, Navbar } from '@/components/MaterialTailwind';
import NestedMenu from './MenuNested';

export const menuHeaderData: MenuHeaderType[] = [
  { id: 'home', name: 'Trang chủ', href: '/' },
  { id: 'plans', name: 'Plans', href: '/sale-plan/select' },
  { id: 'aboutUs', name: 'Giới thiệu', href: '/about-us' },
  { id: 'contact', name: 'Liên hệ', href: '/contact' },
];

export const NavList = () => {
  const pathname = usePathname();
  return (
    <List className="mt-1 mb-2 px-2 lg:mt-0 lg:mb-0 lg:flex-row lg:p-0 overflow-y-auto flex-1 text-base">
      <NestedMenu />
      {menuHeaderData.map((menuItem) => (
        <Link
          key={menuItem.id}
          href={menuItem.href}
          color="blue-gray"
          className="font-semibold"
        >
          <MenuItem
            className={`${
              menuItem.href === pathname ? 'text-primary' : ''
            } gap-2 py-2 pr-2 leading-relaxed hover:text-primary transition-primary active:text-primary focus:text-primary`}
          >
            {menuItem.name}
          </MenuItem>
        </Link>
      ))}
    </List>
  );
};

export const MenuNavbar = () => {
  const pathname = usePathname();

  return (
    // <Navbar className="mx-auto max-w-screen-lg px-4 py-0 shadow-none rounded-none overflow-auto">
    //   <div className="flexCenter text-blue-gray-900 overflow-auto">
    //     <div className="hidden lg:block">
    //       <NavList />
    //     </div>
    //   </div>
    // </Navbar>
    <Navbar className="mx-auto max-w-screen-lg px-4 py-0 shadow-none rounded-none overflow-auto">
      <div className="flexCenter text-blue-gray-900 overflow-auto">
        <div className="hidden lg:block">
          <List className="mt-1 mb-2 px-2 lg:mt-0 lg:mb-0 lg:flex-row lg:p-0 overflow-y-auto flex-1 text-base">
            <Link
              href={'/'}
              color="blue-gray"
              className="font-semibold whitespace-nowrap text-center px-2 "
            >
              <MenuItem
                className={`${
                  '/' === pathname ? 'text-primary' : ''
                }  gap-2 py-2 pr-2 leading-relaxed hover:text-primary transition-primary active:text-primary focus:text-primary`}
              >
                Trang chủ
              </MenuItem>
            </Link>
            <NestedMenu />
            <Link
              href={'/product'}
              color="blue-gray"
              className="font-semibold whitespace-nowrap"
            >
              <MenuItem
                className={`${
                  '/product' === pathname ? 'text-primary' : ''
                }  gap-2 py-2 pr-2 leading-relaxed hover:text-primary transition-primary active:text-primary focus:text-primary`}
              >
                Sản phẩm
              </MenuItem>
            </Link>
            <Link
              href={'/contact'}
              color="blue-gray"
              className="font-semibold whitespace-nowrap"
            >
              <MenuItem
                className={`${
                  '/contact' === pathname ? 'text-primary' : ''
                }  gap-2 py-2 pr-2 leading-relaxed hover:text-primary transition-primary active:text-primary focus:text-primary`}
              >
                Liên hệ
              </MenuItem>
            </Link>
            <Link
              href={'/about-us'}
              color="blue-gray"
              className="font-semibold whitespace-nowrap"
            >
              <MenuItem
                className={`${
                  '/about-us' === pathname ? 'text-primary' : ''
                }  gap-2 py-2 pr-2 leading-relaxed hover:text-primary transition-primary active:text-primary focus:text-primary`}
              >
                Giới thiệu
              </MenuItem>
            </Link>
          </List>
        </div>
      </div>
    </Navbar>
  );
};
