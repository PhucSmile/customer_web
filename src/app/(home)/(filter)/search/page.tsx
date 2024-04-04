'use client';
import { useGetAllSalePlanQuery } from '@/api/appService/salePlan/salePlanApi';
import SaleObjectCard from '@/components/Cards/SaleObjectCard';
import SalePlanCard from '@/components/Cards/sale-plan/SalePlanCard';
import { SaleObjectType } from '@/types/SaleObjectTypes/SaleObjectType';
import { saleObjectData } from '@/utils/dataTest/saleObjectData';
import { Option, Select } from '@/components/MaterialTailwind';
import { useState } from 'react';

type filerDataType = {
  id: string;
  filter_name: string;
};

const filterData: filerDataType[] = [
  {
    id: '1',
    filter_name: 'Nổi bật',
  },
  {
    id: '2',
    filter_name: 'Mới nhất',
  },
  {
    id: '3',
    filter_name: 'Giá cao đến thấp',
  },
  {
    id: '4',
    filter_name: 'Giá thấp đến cao',
  },
];
export default function Search() {
  const [sortBy, setSortBy] = useState<string>('');

  const handleSortChangeSaleObject = (value?: string) => {
    setSortBy(value ?? '');
  };

  const sortProducts = (): SaleObjectType[] => {
    let sortedProducts = [...saleObjectData];

    if (sortBy === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  };
  const { data: allSalePlanResponse, isFetching: isAllSalePlanFetching } =
    useGetAllSalePlanQuery();

  return (
    <div className="">
      <div className="bg-white p-4 my-4 shadow-sm rounded-sm">
        <div className="flexBetween my-2">
          <h1 className="font-semibold text-lg mb-2">Plans</h1>
          <div>
            <input
              className="transition-primary h-10 w-full rounded-lg border-2 border-gray-100 bg-underground pl-4 pr-10 text-sm font-medium placeholder:font-normal focus:border-green-400 focus:outline-none focus:ring-0"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allSalePlanResponse?.data?.data?.map((salePlan, index) => (
            <SalePlanCard key={salePlan.id} data={salePlan} />
          ))}
        </div>
      </div>
      <div className="bg-white p-4 my-4 shadow-sm rounded-sm">
        <div className="flexColStart lg:flexBetween my-2">
          <h1 className="font-semibold text-lg mb-2">Sản phẩm</h1>
          <div className="flex justify-end items-center gap-4">
            <input
              className="transition-primary h-10 w-full rounded-lg border-2 border-gray-100 bg-underground pl-4 pr-10 text-sm font-medium placeholder:font-normal focus:border-green-400 focus:outline-none focus:ring-0"
              type="search"
              name="search"
              placeholder="Search"
            />
            {/* <FormInputSelect
              name="filter_id"
              placeholder="Xếp theo"
              options={filterData}
              mapOption={(item) => ({
                value: item.id,
                label: (
                  <div className="flex flex-col">
                    <div
                      className={`flexStart gap-4 truncate text-base`}
                    >
                      <span>{item.filter_name}</span>
                    </div>
                  </div>
                ),
              })}
            /> */}
            <div className="w-72">
              <Select
                label="Lọc"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                value={sortBy}
                onChange={handleSortChangeSaleObject}
                color="green"
              >
                <Option className="my-1" value="asc">
                  Giá thấp đến cao
                </Option>
                <Option className="my-1" value="desc">
                  Giá cao đến thấp
                </Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {sortProducts()?.map((saleObject) => {
            return (
              <SaleObjectCard
                key={saleObject.name}
                saleObject={saleObject}
                // onClickCard={() => handleCardClick(saleObject.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
