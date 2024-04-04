'use client';
import Link from 'next/link';
import { useIsFirstRender, useMediaQuery, useUpdateEffect } from 'usehooks-ts';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDetectProvinceByCoordinatesQuery } from '@/api/appService/geography/geographyProvinceApi';
import { motion } from 'framer-motion';
import { useDetectDistrictByCoordinatesQuery } from '@/api/appService/geography/geographyDistrictApi';
import { useDetectWardByCoordinatesQuery } from '@/api/appService/geography/geographyWardApi';
import {
  Drawer,
  IconButton,
  Tooltip,
  Typography,
} from '@/components/MaterialTailwind';

import AccountSetting from '../Dropdowns/AccountSetting';
import { MenuNavbar } from '../Navbars/MenuNavbar';
import MenuLine from '../SvgComponents/line/MenuLine';
import NotificationLine from '../SvgComponents/line/NotificationLine';
import CloseLine from '../SvgComponents/line/CloseLine';
import LocationLine from '../SvgComponents/line/LocationLine';
import SearchLine from '../SvgComponents/line/SearchLine';
import CartLine from '../SvgComponents/line/CartLine';
import { HeaderSearch } from './HeaderSearch';
import { useGeolocated } from 'react-geolocated';
import SidebarHeader from '../Sidebar/SidebarHeader';
import LocationOffLine from '../SvgComponents/line/LocationOffLine';

function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [openSearchTop, setOpenSearchTop] = useState(false);
  const isOpenDrawerQuery = useMediaQuery('(max-width: 1024px)');
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [headerFixed, setHeaderFixed] = useState<string>('');

  useUpdateEffect(() => {
    setFirstRender(false);
  }, []);

  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };
  const openDrawerSearchTop = () => setOpenSearchTop(true);
  const closeDrawerSearchTop = () => setOpenSearchTop(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const fixedClass = window.scrollY >= 100 ? '!h-14' : '';
    setHeaderFixed(fixedClass);
  };

  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled,
    positionError,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    //userDecisionTimeout: 5000,
    watchLocationPermissionChange: true,
    watchPosition: true,
  });

  const { data: provinceResponse } = useDetectProvinceByCoordinatesQuery(
    { latitude: coords?.latitude ?? 0, longitude: coords?.longitude ?? 0 },
    {
      enabled:
        isGeolocationAvailable &&
        isGeolocationEnabled &&
        coords?.latitude != null &&
        coords?.longitude != null,
    },
  );

  const { data: districtResponse } = useDetectDistrictByCoordinatesQuery(
    { latitude: coords?.latitude ?? 0, longitude: coords?.longitude ?? 0 },
    {
      enabled:
        isGeolocationAvailable &&
        isGeolocationEnabled &&
        coords?.latitude != null &&
        coords?.longitude != null,
    },
  );

  const { data: wardResponse } = useDetectWardByCoordinatesQuery(
    { latitude: coords?.latitude ?? 0, longitude: coords?.longitude ?? 0 },
    {
      enabled:
        isGeolocationAvailable &&
        isGeolocationEnabled &&
        coords?.latitude != null &&
        coords?.longitude != null,
    },
  );

  const addressStr = `${
    wardResponse?.data?.data?.name ? `${wardResponse?.data?.data?.name}, ` : ''
  } ${
    districtResponse?.data?.data?.name
      ? `${districtResponse?.data?.data?.name}, `
      : ''
  } ${
    provinceResponse?.data?.data?.name
      ? `${provinceResponse?.data?.data?.name}`
      : ''
  }`;

  return (
    <header
      className={`fixed z-[9999] flexBetween h-20 top-0 left-0 right-0 bg-white border shadow-sm select-none transition-primary px-2 py-1 ${headerFixed}`}
    >
      <div className="container mx-auto flexBetween">
        <Link href="/">
          <div className="relative w-20 h-8 md:w-32 md:h-12">
            <Image
              src="/logo.png"
              alt=""
              fill
              priority
              className="absolute"
              sizes="100vw"
            />
          </div>
        </Link>
        <div className="grow">
          <div className="transition-primary flexBetween">
            <div className="gap-5 text-2xl font-bold">
              <button className="block lg:hidden px-2" onClick={toggleDrawer}>
                <MenuLine className="w-8 h-8 transition-primary cursor-pointer text-2xl hover:text-primary" />
              </button>
              {isOpenDrawerQuery && isOpenDrawer && (
                <motion.div animate={isOpenDrawer}>
                  <div
                    className="fixed inset-0 z-[9998] bg-black bg-opacity-40"
                    onClick={toggleDrawer}
                  ></div>
                  <div className="fixed flex flex-col inset-y-0 left-0 z-[9999] m-3 w-72 animate-slideToRight rounded-lg bg-white">
                    <div className="flexBetween p-4 max-h-[4rem]">
                      <Image
                        width={100}
                        height={80}
                        className="mx-auto"
                        src="/logo.png"
                        sizes="100vw"
                        alt=""
                        priority
                        style={{ width: 'auto', objectFit: 'contain' }}
                      />
                      <button
                        className="transition-primary text-xl hover:text-primary"
                        onClick={toggleDrawer}
                      >
                        <CloseLine className="w-5 h-5" />
                      </button>
                    </div>
                    <hr className="divide-shadow" />
                  </div>
                </motion.div>
              )}
            </div>
            <div className="flexStart relative px-4 lg:py-0.5 md:px-8">
              <MenuNavbar />
              {/* <Navbar /> */}
            </div>
            <div className="flex items-center justify-end gap-2 lg:gap-4">
              <SearchLine
                onClick={openDrawerSearchTop}
                type="submit"
                className="block md:hidden w-6 h-6 text-black cursor-pointer hover:text-primary"
              />
              <div className="relative hidden md:block mx-auto min-w-fit gap-5 text-2xl font-bold">
                <HeaderSearch
                  mapLink={(keyword) => `/search?keyword=${encodeURI(keyword)}`}
                  delay={500}
                />
              </div>
              <NotificationLine className="transition-primary w-7 h-7 cursor-pointer hover:text-primary" />
              <AccountSetting />
            </div>
            <Drawer
              placement="top"
              open={openSearchTop}
              onClose={closeDrawerSearchTop}
              className="p-4 !max-h-[80px]"
            >
              <div className="mb-6 flexBetween">
                <div className="relative flex mx-auto w-[60vw] min-w-[300px] items-center justify-between gap-5 text-2xl font-bold">
                  <HeaderSearch
                    mapLink={(keyword) =>
                      `/search?keyword=${encodeURI(keyword)}`
                    }
                    delay={500}
                  />
                </div>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={closeDrawerSearchTop}
                >
                  <CloseLine strokeWidth={2} className="h-5 w-5" />
                </IconButton>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
