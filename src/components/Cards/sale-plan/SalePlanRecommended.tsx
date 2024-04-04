'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@/components/MaterialTailwind';
import { RegisterSalePlanDraftType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/RegisterSalePlanDraftSchemas';
import { useRouter } from 'next/navigation';
import { useSalePlanRegisterDraftContext } from '@/components/Context/SalePlanRegisterDraftContext';
import { formatCurrencyVN } from '@/utils/numberUtils';
import { CheckLogin } from '@/components/Modals/auth/AuthModal';
import SalePlanDetailModal from '@/components/Modals/sale-plan/select/SalePlanDetailModal';
import { SalePlanType } from '@/schemas/SalePlanSchemas/SalePlanSchema';
import { useRegisterSalePlanDraftMutation } from '@/api/appService/salePlan/salePlanRegisterDraftApi';
type SalePlanCardProps = {
  data: SalePlanType;
};

const SalePlanRecommended: FC<SalePlanCardProps> = ({ data }) => {
  const [isOpenSalePlanDetailModal, setIsOpenSalePlanDetailModal] =
    useState(false);
  const { salePlanRegisterDraftData, setSalePlanRegisterDraftData } =
    useSalePlanRegisterDraftContext();

  const {
    mutateAsync: registerSalePlanDraft,
    isLoading: isRegisterSalePlanDraftLoading,
    data: registerSalePlanDraftResponse,
  } = useRegisterSalePlanDraftMutation();
  const router = useRouter();

  const onSubmit = async (values: RegisterSalePlanDraftType) => {
    const {
      data: { data, status },
    } = await registerSalePlanDraft(values);
    if (status === 1) {
      setSalePlanRegisterDraftData(data);
      router.push(`sale-plan/customize/${values.plan_id}`);
    }
  };

  const images: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const handleCloseSalePlanDetailModal = () => {
    setIsOpenSalePlanDetailModal(false);
  };

  const handleOpenSalePlanDetailModal = () => {
    setIsOpenSalePlanDetailModal(true);
  };

  return (
    <>
      <div
        className="bg-white rounded-sm mx-2 my-1 shadow-md overflow-hidden hover:shadow-lg cursor-pointer transition-primary"
        onClick={handleOpenSalePlanDetailModal}
      >
        <div className="relative">
          <div className="relative">
            <Image
              src="/img/plans/plan6.jpg"
              alt="profile"
              width="0"
              height="0"
              sizes="100vw"
              priority
              className="w-full h-auto "
            />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-black to-transparent"></div>
          </div>
        </div>
        <div className="p-2 flex flex-col h-24 justify-between">
          <div>
            <Typography
              variant="small"
              className="text-lg font-normal text-ellipsis whitespace-nowrap"
            >
              {data.name}
            </Typography>
            <Typography className="text-sm text-textSecondary">
              {data.description}
            </Typography>
          </div>
          <Typography variant="small" className="font-semibold">
            {formatCurrencyVN(data.price)}
          </Typography>
        </div>
      </div>
      <SalePlanDetailModal
        data={data}
        isOpen={isOpenSalePlanDetailModal}
        handleClose={handleCloseSalePlanDetailModal}
      />
    </>
  );
};

export default SalePlanRecommended;
