'use client';
import { useRef, useState } from 'react';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@/components/MaterialTailwind';
import SalePlanCard from '../Cards/sale-plan/SalePlanCard';
import { useGetAllSalePlanQuery } from '@/api/appService/salePlan/salePlanApi';
import { useGetSalePlanCategoryQuery } from '@/api/appService/salePlan/salePlanCategoryApi';
import { useUpdateEffect } from 'usehooks-ts';

const SalePlanCategoryTabs = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('-1');
  const [defaultTab, setDefaultTab] = useState<string>('');
  const isFirstSelected = useRef<boolean>(true);

  const { data: allSalePlanResponse, isFetching: isAllSalePlanFetching } =
    useGetAllSalePlanQuery();

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

  let salePlanCategoryData = salePlanCategoryResponse?.data?.data ?? [];

  const handleSelectCategoryId: (id: string) => void = (id) => {
    setSelectedCategoryId(id);
  };

  useUpdateEffect(() => {
    if (
      (salePlanCategoryData?.length as number) > 0 &&
      isFirstSelected.current
    ) {
      isFirstSelected.current = false;
      setDefaultTab(salePlanCategoryData?.[0]?.id);
      setSelectedCategoryId(salePlanCategoryData?.[0]?.id);
    }
  }, [salePlanCategoryData]);
  return (
    <div className="mx-auto px-2 md:px-4 max-w-6xl py-10">
      <div className="overflow-ellipsis rounded-lg">
        <Tabs key={defaultTab} value={defaultTab}>
          <TabsHeader className="overflow-x-auto whitespace-nowrap bg-underground border border-primary">
            {salePlanCategoryData?.map((category) => (
              <Tab
                className="text-primary"
                key={category?.id}
                value={category?.id ?? ''}
                onClick={() => handleSelectCategoryId(category?.id)}
              >
                {category?.name}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {salePlanCategoryData?.map((category) => (
              <TabPanel
                value={category?.id ?? ''}
                key={category?.id}
                className="p-0"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 py-4">
                  {salePlanByCategoryIdData?.map((salePlan, index) => (
                    <SalePlanCard key={salePlan.id} data={salePlan ?? ''} />
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default SalePlanCategoryTabs;
