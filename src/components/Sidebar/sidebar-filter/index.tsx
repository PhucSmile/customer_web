'use client';

import { FC, SVGProps, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// * React icons

import { useMediaQuery } from 'usehooks-ts';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HeartLine from '@/components/SvgComponents/line/HeartLine';
import { SubMenu } from './Submenu';
import { useGetSaleObjectCategoryQuery } from '@/api/appService/saleObject/saleObjectCategoryApi';
import ChevronForwardLine from '@/components/SvgComponents/line/ChevronForwardLine';
import { List, ListItem } from '@/components/MaterialTailwind';
import ChevronBackLine from '@/components/SvgComponents/line/ChevronBackLine';
import SidebarHeader from '../SidebarHeader';

type SubMenusListType = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  menus: string[];
};

const SidebarFilter = () => {
  let isTabletMid = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(isTabletMid ? false : true);
  // const sidebarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname, isTabletMid]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: -10,
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: '4rem',
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList: SubMenusListType[] = [
    {
      name: 'build',
      icon: HeartLine,
      menus: ['auth', 'app settings', 'stroage', 'hosting'],
    },
    {
      name: 'analytics',
      icon: HeartLine,
      menus: ['dashboard', 'realtime', 'events'],
    },
  ];

  const { data: saleObjectCategoryResponse, isFetching } =
    useGetSaleObjectCategoryQuery();

  return (
    <div className="pt-4">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? 'block' : 'hidden'
        } `}
      ></div>
      <motion.div
        // ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? 'open' : 'closed'}
        className="container bg-white text-gray shadow-xl z-[999] rounded-md max-w-[16rem] w-[16rem] 
              overflow-hidden md:relative fixed h-fit overflow-y-auto mx-2"
      >
        <div className="flex flex-col">
          <h1 className="text-center font-medium text-xl pt-2">
            Tất cả sản phẩm
          </h1>
          {/* <List className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden h-[100vw]">
            {saleObjectCategoryResponse?.data?.data?.map(
              (saleObjectCategory) => (
                <ListItem key={saleObjectCategory.id}>
                  <Link href={'/'} className="link">
                    {saleObjectCategory.name}
                  </Link>
                </ListItem>
              ),
            ) ?? []}
          </List> */}
        </div>
        {/* <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <ChevronBackLine className="w-5 h-5" />
        </motion.div> */}
        <SidebarHeader />
      </motion.div>
      <div className="m-3 md:hidden" onClick={() => setOpen(true)}>
        <ChevronForwardLine className="w-5 h-5" />
      </div>
    </div>
  );
};

export default SidebarFilter;
