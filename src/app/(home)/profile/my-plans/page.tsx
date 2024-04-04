'use client';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Chip,
  Button,
} from '@/components/MaterialTailwind';
import { useState } from 'react';
import Link from 'next/link';
import { PurchasedPlans } from '@/components/Cards/Profile/my-plans/PurchasedPlans';
import { IncompletePlans } from '@/components/Cards/Profile/my-plans/IncompletePlans';

const MyPlans = () => {
  const [activeTab, setActiveTab] = useState('purchased');

  const data = [
    {
      label: 'Purchased',
      value: 'purchased',
      planComponent: <PurchasedPlans />,
    },
    {
      label: 'Incomplete',
      value: 'incomplete',
      planComponent: <IncompletePlans />,
    },
  ];

  return (
    <>
      <h1 className="text-xl py-3">Plans của tôi</h1>
      <div className="w-full h-full bg-white rounded-md shadow-md">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-3/5 mx-auto"
            indicatorProps={{
              className:
                'bg-transparent border-b-2 border-green-500 shadow-none rounded-none',
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? 'text-primary' : ''}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
          // animate={{
          //   initial: { x: 0 },
          //   mount: { x: 1, transition: { duration: 1 } },
          //   unmount: { x: 0, transition: { duration: 1 } },
          // }}
          >
            {data.map(({ value, planComponent }) => (
              <TabPanel key={value} value={value}>
                {planComponent}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default MyPlans;
