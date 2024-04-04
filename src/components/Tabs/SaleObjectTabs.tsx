import SaleObjectCard from '../Cards/SaleObjectCard';
import { ReactNode } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
  Tab,
} from '@/components/MaterialTailwind';
import React from 'react';
import { saleObjectData } from '@/utils/dataTest/saleObjectData';
import PersonLine from '../SvgComponents/line/PersonLine';
import BagCheckLine from '../SvgComponents/line/BagCheckLine';
import NotificationLine from '../SvgComponents/line/NotificationLine';

const saleObjectTabData = [
  {
    id: '1',
    value: '1',
    label: 'Sản phẩm nổi bật',
    icon: PersonLine,
    dataBodyTab: saleObjectData,
  },
  {
    id: '2',
    value: '2',
    label: 'Bán chạy',
    icon: BagCheckLine,
    dataBodyTab: saleObjectData,
  },
  {
    id: '3',
    value: '3',
    label: 'Sản phẩm mới',
    icon: NotificationLine,
    dataBodyTab: saleObjectData,
  },
];

export const SaleObjectTabs = () => {
  return (
    <div className="mx-auto px-2 md:px-4 max-w-6xl py-10">
      <div className="w-full mx-auto rounded-md bg-white px-4 py-5">
        <h1 className="text-left text-2xl font-bold">Sản phẩm</h1>
        <Tabs value="1">
          <TabsHeader className="max-w-fit text-center mx-auto ">
            {saleObjectTabData.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2 text-sm whitespace-nowrap md:text-lg px-4">
                  {React.createElement(icon, { className: 'w-5 h-5' })}
                  <span className="hidden text-sm md:text-lg sm:block">
                    {label}
                  </span>
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {saleObjectTabData.map(({ value, dataBodyTab }) => (
              <TabPanel key={value} value={value}>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                  {dataBodyTab?.map((saleObject) => {
                    return (
                      <SaleObjectCard
                        key={saleObject.name}
                        saleObject={saleObject}
                        // onClickCard={() => handleCardClick(saleObject.id)}
                      />
                    );
                  })}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};
