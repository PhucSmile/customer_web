'use client';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Chip,
  Typography,
} from '@/components/MaterialTailwind';
import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useGetSalePlanRegisterNextShipmentQuery } from '@/api/appService/salePlan/salePlanRegisterApi';
import TimeLine from '@/components/SvgComponents/line/TimeLine';
import LocationLine from '@/components/SvgComponents/line/LocationLine';

const NextShipment = () => {
  const [activeTab, setActiveTab] = useState('ThisWeek');

  const { data: nextShipmentResponse, isFetching: isNextShipmentFetching } =
    useGetSalePlanRegisterNextShipmentQuery();

  const dataTab = [
    {
      label: 'This week',
      value: 'ThisWeek',
      nextShipmentData: nextShipmentResponse,
    },
    {
      label: 'All',
      value: 'All',
      nextShipmentData: nextShipmentResponse,
    },
  ];

  const convertUTCToLocalDate = (utcDate: string) => {
    return new Date(utcDate);
  };

  return (
    <>
      <h1 className="text-xl py-3">Plans của tôi</h1>
      <div className="w-full h-full bg-white rounded-md p-5">
        <div>Quay về</div>
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-3/5 mx-auto"
            indicatorProps={{
              className:
                'bg-transparent border-b-2 border-green-500 shadow-none rounded-none',
            }}
          >
            {dataTab.map(({ label, value }) => (
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
            animate={{
              initial: { x: 0 },
              mount: { x: 0 },
              unmount: { x: 200 },
            }}
          >
            {dataTab.map(({ value, nextShipmentData }) => (
              <TabPanel key={value} value={value}>
                {nextShipmentData?.data?.data?.map((nextShipment, index) => (
                  <div
                    key={nextShipment.plan_id + index}
                    className="my-2 flex flex-col relative rounded-md border border-borderColor p-4 bg-white shadow-sm"
                  >
                    <div className="flex flex-row items-center justify-between">
                      <div className="basis-1/4 text-center">
                        <Typography
                          variant="h5"
                          className="text-2xl font-medium"
                        >
                          #1
                        </Typography>
                        <Chip
                          value="Đã xác nhận"
                          variant="ghost"
                          className="rounded-lg bg-green-50 normal-case inline-block text-primary "
                        />
                      </div>
                      <div className="basis-full">
                        <div className="flex flex-col gap-2 border-l border-borderColor pl-4">
                          <div className="flexColCenter gap-2">
                            <div className="flexStart gap-2">
                              <div>
                                <Image
                                  src={`/img/items/item5.png`}
                                  alt=""
                                  width={80}
                                  height={80}
                                  className="h-auto"
                                />
                              </div>
                              <span className="font-medium">
                                {nextShipment?.combo_name}
                              </span>
                            </div>
                            <div className="w-full flexBetween">
                              <div className="flexBetween gap-2">
                                <TimeLine className="w-4 h-4" />
                                <Typography>30/06/2023</Typography>
                              </div>
                              <span className="text-xs text-gray-400">|</span>
                              <div className="flexBetween gap-2">
                                <LocationLine className="w-4 h-4" />
                                <span>Nhà</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default NextShipment;
