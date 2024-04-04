import { MenuHeaderType } from '@/types/MenuHeader';
import Link from 'next/link';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Tooltip,
} from '@/components/MaterialTailwind';

import Image from 'next/image';
import React, { FC, SVGProps } from 'react';
import { usePathname } from 'next/navigation';
import PersonLine from '../SvgComponents/line/PersonLine';
import BagCheckLine from '../SvgComponents/line/BagCheckLine';
import BagLine from '../SvgComponents/line/BagLine';
import CardLine from '../SvgComponents/line/CardLine';
import LocationLine from '../SvgComponents/line/LocationLine';
import NotificationLine from '../SvgComponents/line/NotificationLine';

type MenuProfile = {
  id: string;
  label: string;
  url: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  chipProps?: object;
};

const menuProfile: MenuProfile[] = [
  {
    id: '1',
    label: 'Thông tin tài khoản',
    url: '/profile/my-account',
    icon: PersonLine,
    chipProps: {},
  },
  {
    id: '2',
    label: 'Plan của tôi',
    url: '/profile/my-plans',
    icon: BagCheckLine,
    chipProps: {},
  },
  {
    id: '3',
    label: 'Thông báo',
    url: '/profile/my-notifications',
    icon: NotificationLine,
    chipProps: {},
  },
  {
    id: '4',
    label: 'Địa chỉ của tôi',
    url: '/profile/my-addresses',
    icon: LocationLine,
    chipProps: {},
  },
  {
    id: '5',
    label: 'Thanh toán',
    url: '/profile/my-payment-methods',
    icon: CardLine,
    chipProps: {},
  },
  {
    id: '6',
    label: 'Đơn mua',
    url: '/profile/my-orders',
    icon: BagLine,
    chipProps: {},
  },
];
const SidebarProfile = () => {
  const path = usePathname();

  return (
    <div className="flex flex-col items-start justify-center z-20">
      <Card
        variant="gradient"
        className="max-w-[60px] overflow-hidden lg:max-w-none lg:p-2 shadow-md rounded-md shadow-blue-gray-900/5"
      >
        <div className="flexStart gap-2 py-2 pl-2 lg:pl-3">
          <Tooltip
            content="Vu Phan"
            placement="right"
            className="bg-primary block lg:hidden"
          >
            <div className="w-11 h-11 rounded-full relative overflow-hidden">
              <Image
                src={`/img/plans/plan2.png`}
                alt="Vu Phan"
                fill
                className="absolute"
              />
            </div>
          </Tooltip>
          <div className="hidden lg:block">
            <Typography variant="small" className="text-xs">
              Tài khoản
            </Typography>
            <Typography variant="h5" className="font-medium text-lg">
              Vu Phan
            </Typography>
          </div>
        </div>
        <List>
          {menuProfile?.map((menuItem) => (
            <Link key={menuItem.id} href={menuItem.url}>
              <ListItem
                className={`${
                  path.includes(menuItem.url)
                    ? 'text-primary bg-blue-gray-100/60'
                    : ''
                } hover:text-primary`}
              >
                <Tooltip
                  content={menuItem?.label}
                  placement="right"
                  className="bg-blue-gray-50 text-primary block lg:hidden"
                >
                  <ListItemPrefix>
                    {React.createElement(menuItem?.icon, {
                      strokeWidth: 2,
                      className: 'h-5 w-5',
                    })}
                  </ListItemPrefix>
                </Tooltip>
                <Typography variant="small" className="hidden lg:block">
                  {menuItem?.label}
                </Typography>
              </ListItem>
            </Link>
          ))}
        </List>
      </Card>
    </div>
  );
};

export default SidebarProfile;
