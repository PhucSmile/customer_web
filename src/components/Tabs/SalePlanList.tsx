'use client';
import { useState } from 'react';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@/components/MaterialTailwind';
import SalePlanCard from '../Cards/sale-plan/SalePlanCard';
import Image from 'next/image';
import { useGetAllSalePlanQuery } from '@/api/appService/salePlan/salePlanApi';
import { useGetSalePlanCategoryQuery } from '@/api/appService/salePlan/salePlanCategoryApi';
import { MyComponent } from '../Carousels/TestCarousel';

const SalePlanList = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const {
    data: allSalePlanResponse,
    isFetching: isAllSalePlanFetching,
    isLoading: isAllSalePlanLoading,
  } = useGetAllSalePlanQuery();

  const {
    data: salePlanCategoryResponse,
    isFetching: isSalePlanCategoryFetching,
  } = useGetSalePlanCategoryQuery();

  const salePlanByCategoryIdData = allSalePlanResponse?.data?.data?.filter(
    (salePlan) =>
      salePlan?.categories?.some(
        (category_id) => category_id === selectedCategoryId,
      ),
  );
  const newData = allSalePlanResponse?.data?.data?.map((item) => ({
    ...item,
    isTrending: Math.random() < 0.3,
  }));

  let salePlanCategoryData = salePlanCategoryResponse?.data?.data ?? [];

  const handleSelectCategoryId: (id: string) => void = (id) => {
    setSelectedCategoryId(id);
  };
  return (
    <div className="mx-auto px-2 md:px-4 max-w-6xl py-20">
      <h1 className="font-semibold text-xl text-center mb-5">Danh sách Plan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 mds:grid-cols-3 lg:grid-cols-3 gap-5">
        {allSalePlanResponse?.data?.data?.map((salePlan, index) => (
          <SalePlanCard
            key={salePlan.id}
            isLoading={isAllSalePlanLoading}
            data={salePlan}
          />
        ))}
        {/* {newData?.map((salePlan, index) => (
          <div
            className={`
             ${
               salePlan.isTrending
                 ? 'col-span-1 row-span-1 md:col-span-2'
                 : 'col-span-1 row-span-1'
             }
            bg-green-100 rounded-md shadow-sm relative pt-[100%]`}
            key={salePlan.id + index}
          >
            <SalePlanCard data={salePlan} />
          </div>

          // <SalePlanCard
          //   key={salePlan.id}
          //   isLoading={isAllSalePlanLoading}
          //   data={salePlan}
          // />
          // <>
          //   {isAllSalePlanLoading ? (
          //     <div
          //       key={salePlan.id}
          //       role="status"
          //       className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
          //     >
          //       <div className="flexCenter w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
          //         <svg
          //           className="w-12 h-12 text-gray-200"
          //           xmlns="http://www.w3.org/2000/svg"
          //           aria-hidden="true"
          //           fill="currentColor"
          //           viewBox="0 0 640 512"
          //         >
          //           <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          //         </svg>
          //       </div>
          //       <div className="w-full">
          //         <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
          //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          //       </div>
          //       <span className="sr-only">Loading...</span>
          //     </div>
          //   ) : (
          //     <SalePlanCard
          //       key={salePlan.id}
          //       isLoading={isAllSalePlanLoading}
          //       data={salePlan}
          //     />
          //   )}
          // </>
        ))} */}
      </div>
      {/* <MyComponent /> */}
    </div>
  );
};

export default SalePlanList;
