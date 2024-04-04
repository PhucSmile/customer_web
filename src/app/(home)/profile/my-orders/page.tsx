'use client';
import { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from '@/components/MaterialTailwind';
import { AllCard } from '@/components/Cards/Profile/my-orders/AllCard';
import { Cancelled } from '@/components/Cards/Profile/my-orders/CanCelledCard';

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState('all');
  const data = [
    {
      label: 'All',
      value: 'all',

      tabComponent: <AllCard />,
    },
    {
      label: 'Awaiting Payment',
      value: 'awaiting payment',

      tabComponent: <AllCard />,
    },
    {
      label: 'Processing',
      value: 'processing',
      tabComponent: <AllCard />,
    },
    {
      label: 'Delivering',
      value: 'delivering',
      tabComponent: <AllCard />,
    },
    {
      label: 'Delivered',
      value: 'delivered',
      tabComponent: <AllCard />,
    },
    {
      label: 'Cancelled',
      value: 'cancelled',
      tabComponent: <Cancelled />,
    },
  ];
  return (
    <>
      <h1 className="text-xl py-3">Đơn hàng của tôi</h1>
      <div className="w-full rounded-md">
        <Tabs value={activeTab}>
          <TabsHeader
            className="border-b shadow-sm rounded-sm border-blue-gray-50 bg-transparent p-0 mx-auto max-w-[275px] sm:max-w-none overflow-x-auto"
            indicatorProps={{
              className:
                'bg-transparent border-b-2 rounded-none border-green-500 shadow-none',
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`${
                  activeTab === value ? 'text-primary' : ''
                } whitespace-nowrap text-sm bg-white py-2`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, tabComponent }) => (
              <TabPanel key={value} value={value} className="p-0 sm:py-2">
                {tabComponent}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default MyOrders;
