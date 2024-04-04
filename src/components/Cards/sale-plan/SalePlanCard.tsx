'use client';
import Image from 'next/image';
import { FC, useState } from 'react';

import { Typography } from '@/components/MaterialTailwind';
import { formatCurrencyVN } from '@/utils/numberUtils';
import SalePlanDetailModal from '@/components/Modals/sale-plan/select/SalePlanDetailModal';
import { SalePlanType } from '@/schemas/SalePlanSchemas/SalePlanSchema';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
type SalePlanCardProps = {
  data: SalePlanType;
  isLoading?: boolean;
};
const SalePlanCard: FC<SalePlanCardProps> = ({ data, isLoading }) => {
  const [isOpenSalePlanDetailModal, setIsOpenSalePlanDetailModal] =
    useState(false);
  const router = useRouter();

  const handleCloseSalePlanDetailModal = () => {
    setIsOpenSalePlanDetailModal(false);
  };

  const handleOpenSalePlanDetailModal = () => {
    setIsOpenSalePlanDetailModal(true);
  };

  const handleSelectPlan = () => {
    router.push(`/sale-plan/select/${data?.id}`);
  };

  return (
    <>
      {isLoading ? (
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
        >
          <div className="flexCenter w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div
          // onClick={handleOpenSalePlanDetailModal}
          onClick={handleSelectPlan}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg cursor-pointer transition-primary"
        >
          <Image
            src="/img/plans/plan6.jpg"
            alt="profile"
            width="0"
            height="0"
            sizes="100vw"
            priority
            className="w-full h-auto transition-opacity opacity-0 duration-[2s]"
            onLoadingComplete={(image) => image.classList.remove('opacity-0')}
          />
          <div className="p-2 flex flex-col h-24 justify-between">
            <div>
              <Typography
                variant="small"
                className="text-lg font-normal text-ellipsis whitespace-nowrap"
              >
                {data.name}
              </Typography>
              {/* <InformationCircleIcon
            className="w-5 h-5"
            onClick={handleOpenSalePlanDetailModal}
          /> */}
              <Typography className="text-sm text-textSecondary">
                {data.description}
              </Typography>
            </div>
            <Typography variant="small" className="font-semibold">
              {formatCurrencyVN(data.price)}
            </Typography>
          </div>
        </div>
      )}
      <SalePlanDetailModal
        data={data}
        isOpen={isOpenSalePlanDetailModal}
        handleClose={handleCloseSalePlanDetailModal}
      />
    </>
  );
};

export default SalePlanCard;
