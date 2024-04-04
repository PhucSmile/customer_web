'use client';
import { SalePlanRegisterDraftContextProvider } from '@/components/Context/SalePlanRegisterDraftContext';
import AccountSetting from '@/components/Dropdowns/AccountSetting';
import { Avatar, Step, Stepper } from '@/components/MaterialTailwind';
import BagCheckLine from '@/components/SvgComponents/line/BagCheckLine';
import CheckoutLine from '@/components/SvgComponents/line/CheckoutLine';
import SelectLine from '@/components/SvgComponents/line/SelectLine';
import SettingsLine from '@/components/SvgComponents/line/SettingsLine';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useStep, useUpdateEffect } from 'usehooks-ts';

export type Step = {
  url: string;
  isVisited: boolean;
  isCompleted: boolean;
};
export const StepHeaderContext = createContext<{
  handleDispatchPlanId: (payload: string) => void;
}>({
  handleDispatchPlanId: () => {},
});

const StepperNavigation = [
  '/sale-plan/select',
  '/sale-plan/customize',
  '/sale-plan/checkout',
  '/sale-plan/order',
];

export const useStepHeaderContext = () => useContext(StepHeaderContext);
export default function PlanLayout({ children }: { children: ReactNode }) {
  //const [step, setStep] = useSessionStorage<Step[]>(`sale-plan`, []);
  const [planId, setPlanId] = useState<string>('');
  const [
    currentStep,
    {
      canGoToNextStep,
      canGoToPrevStep,
      goToNextStep,
      goToPrevStep,
      reset,
      setStep,
    },
  ] = useStep(4);
  const pathname = usePathname();
  const router = useRouter();

  const handleDispatchPlanId = (payload: string) => {
    setPlanId(payload);
  };

  useUpdateEffect(() => {
    setStep(
      StepperNavigation?.findIndex((item) => pathname.includes(item)) + 1,
    );
  }, [pathname, setStep]);

  const handleClickStep = (url: string) => {};

  return (
    <>
      <header className="fixed flex justify-between items-center md:items-start z-[9999] h-16 pt-0 md:pt-1 top-0 left-0 right-0 bg-white border shadow-sm select-none transition-primary">
        <div className="mx-auto container flex justify-between items-center">
          <div className="flex justify-between items-center gap-4 w-full mx-auto">
            <Link href={'/'} className="my-auto h-full">
              <Image
                src={'/logo.png'}
                alt="Moga"
                width={0}
                height={0}
                priority
                sizes="100vw"
                className="w-32 h-12"
              />
            </Link>
            <div className="w-full flexCenter flex self-start place-self-start place-items-start items-start">
              <div className="w-full sm:w-4/5 md:w-3/5 pt-2 md:pt-0">
                <Stepper
                  activeStep={currentStep - 1}
                  lineClassName="bg-blue-gray-200/50"
                  activeLineClassName="bg-primary"
                >
                  <Step
                    className="w-9 h-9 !bg-blue-gray-50 text-primary/50 cursor-pointer"
                    activeClassName="ring-0 !bg-primary text-white border border-primary shadow-md shadow-primary"
                    completedClassName="!bg-blue-gray-50 !text-primary border border-primary"
                  >
                    <SelectLine className="h-6 w-6 z-10" />
                    <div className="absolute hidden md:block -bottom-[1.4rem] w-max text-primary text-center text-xs">
                      <p className="font-medium text-sm">Chọn plan</p>
                    </div>
                  </Step>
                  <Step
                    className="w-9 h-9 !bg-blue-gray-50 text-primary/50 cursor-pointer"
                    activeClassName="ring-0 !bg-primary text-white border border-primary shadow-md shadow-primary"
                    completedClassName="!bg-blue-gray-50 text-primary border border-primary"
                  >
                    <SettingsLine className="h-6 w-6 z-10" />
                    <div className="absolute hidden md:block -bottom-[1.4rem] w-max text-primary text-center text-xs">
                      <p className="font-medium text-sm">Thiết lập plan</p>
                    </div>
                  </Step>
                  <Step
                    className="w-9 h-9 !bg-blue-gray-50 text-primary/50 cursor-pointer"
                    activeClassName="ring-2 !bg-primary text-white border-2 border-primary shadow-md shadow-primary"
                    completedClassName="!bg-blue-gray-50 text-primary border border-primary"
                  >
                    <CheckoutLine className="h-6 w-6 z-10" />
                    <div className="absolute hidden md:block -bottom-[1.4rem] w-max text-primary text-center text-xs">
                      <p className="font-medium text-sm">Thanh toán</p>
                    </div>
                  </Step>
                  <Step
                    className="w-9 h-9 !bg-blue-gray-50 text-primary/50 cursor-pointer"
                    activeClassName="ring-0 !bg-primary text-white border border-primary shadow-md shadow-primary"
                    completedClassName="!bg-blue-gray-50 text-primary border border-primary"
                  >
                    <BagCheckLine className="h-6 w-6 z-10" />
                    <div className="absolute hidden md:block -bottom-[1.4rem] w-max text-primary text-center text-xs">
                      <p className="font-medium text-sm">Hoàn tất</p>
                    </div>
                  </Step>
                </Stepper>
              </div>
            </div>
            <AccountSetting />
          </div>
        </div>
      </header>
      <SalePlanRegisterDraftContextProvider>
        <StepHeaderContext.Provider
          value={{
            handleDispatchPlanId,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5 }}
            className="bg-underground min-h-screen py-20"
          >
            {children}
          </motion.div>
        </StepHeaderContext.Provider>
      </SalePlanRegisterDraftContextProvider>
    </>
  );
}
