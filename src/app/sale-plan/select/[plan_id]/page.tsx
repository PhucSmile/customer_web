'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useGetSaleObjectDetailsBySaleObjectComboIdQuery } from '@/api/appService/saleObject/saleObjectApi';
import { useGetSaleObjectComboDescriptionBySaleObjectComboIdQuery } from '@/api/appService/saleObject/saleObjectComboApi';
import {
  useGetSalePlanDescriptionBySalePlanIdQuery,
  useGetSalePlanComboBySalePlanIdQuery,
  useGetSalePlanByIdQuery,
} from '@/api/appService/salePlan/salePlanApi';
import { useRegisterSalePlanDraftMutation } from '@/api/appService/salePlan/salePlanRegisterDraftApi';
import { SalePlanComboType } from '@/schemas/SalePlanSchemas/SalePlanComboSchema';
import { checkEmpty } from '@/utils/checkEmpty';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Typography,
} from '@/components/MaterialTailwind';
import { formatCurrencyVN } from '@/utils/numberUtils';
import { CheckLogin } from '@/components/Modals/auth/AuthModal';
import { RegisterSalePlanDraftType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/RegisterSalePlanDraftSchemas';

const Select = ({ params: { plan_id } }: { params: { plan_id: string } }) => {
  const [selectedCombo, setSelectedCombo] = useState<SalePlanComboType | null>(
    null,
  );
  const [open, setOpen] = useState<string>();
  const { data: salePlanByIdResponse, isFetching: isGetSalePlanByIdFetching } =
    useGetSalePlanByIdQuery(plan_id as string, {
      enabled: !checkEmpty(plan_id),
    });

  const {
    data: salePlanDescriptionResponse,
    isFetching: isSalePlanDescriptionFetching,
  } = useGetSalePlanDescriptionBySalePlanIdQuery(plan_id as string, {
    enabled: !checkEmpty(plan_id),
  });

  const { data: salePlanComboResponse, isFetching: isSalePlanComboFetching } =
    useGetSalePlanComboBySalePlanIdQuery(plan_id as string, {
      enabled: !checkEmpty(plan_id),
    });

  const {
    data: saleObjectComboDescriptionResponse,
    isFetching: isSaleObjectComboDescriptionFetching,
  } = useGetSaleObjectComboDescriptionBySaleObjectComboIdQuery(
    selectedCombo?.object_id ?? '',
    { enabled: !checkEmpty(selectedCombo?.id) },
  );

  const {
    mutateAsync: registerSalePlanDraft,
    isLoading: isRegisterSalePlanDraftLoading,
  } = useRegisterSalePlanDraftMutation();
  const router = useRouter();

  const {
    data: saleObjectDetailsResponse,
    isFetching: isSaleObjectDetailsFetching,
  } = useGetSaleObjectDetailsBySaleObjectComboIdQuery(
    selectedCombo?.object_id ?? '',
    { enabled: !checkEmpty(selectedCombo?.id) },
  );

  const isLoading =
    isSaleObjectDetailsFetching ||
    isRegisterSalePlanDraftLoading ||
    isSaleObjectComboDescriptionFetching ||
    isSalePlanComboFetching ||
    isSalePlanDescriptionFetching;

  const handleSelectCombo = (saleObjectCombo: SalePlanComboType) => {
    setSelectedCombo(saleObjectCombo);
    setOpen(open === saleObjectCombo.id ? '' : saleObjectCombo.id);
  };

  const onSubmit = async (values: RegisterSalePlanDraftType) => {
    const {
      data: { data, status },
    } = await registerSalePlanDraft(values);
    if (status === 1) {
      router.push(
        `/sale-plan/customize/${values?.plan_id}/${data?.[0]?.plan_register_draft_id}`,
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-4 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-7">
          <Image
            src="/img/plans/plan6.jpg"
            alt="profile"
            width="0"
            height="0"
            sizes="100vw"
            priority
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="col-span-5 gap-2">
          <h1 className="font-medium text-3xl text-primary">
            {salePlanByIdResponse?.data?.data?.name}
          </h1>
          <div className="py-2">
            <p className="font-semibold text-lg pb-2">Benefits</p>
            <ul className="list-disc px-4">
              {salePlanDescriptionResponse?.data?.data?.extra_info_instance?.benefits?.map(
                (value) => <li key={value}>{value}</li>,
              )}
            </ul>
          </div>
          <div className="py-2">
            <p className="font-semibold text-lg pb-2">Categories</p>
            <ul className="list-disc px-4">
              {salePlanDescriptionResponse?.data?.data?.extra_info_instance?.categories?.map(
                (value) => <li key={value}>{value}</li>,
              )}
            </ul>
          </div>
          <div className="py-2">
            <p className="font-medium text-base pb-2">
              {salePlanDescriptionResponse?.data?.data?.servings} servings
            </p>
          </div>
          <div className="py-2">
            <p className="font-semibold text-lg pb-2">
              Price:
              <span className="mx-1 text-primary">
                {formatCurrencyVN(
                  salePlanByIdResponse?.data?.data?.price as number,
                )}
              </span>
            </p>
          </div>
          <CheckLogin>
            {({ isLogin, openAuthModal }) => (
              <Button
                onClick={() =>
                  isLogin
                    ? onSubmit({
                        plan_id: salePlanByIdResponse?.data?.data?.id as string,
                      })
                    : openAuthModal(() =>
                        onSubmit({
                          plan_id: salePlanByIdResponse?.data?.data
                            ?.id as string,
                        }),
                      )
                }
                disabled={isLoading}
                color="green"
                size="md"
                className="bg-primary whitespace-nowrap mx-auto w-fit font-semibold"
              >
                Chọn plan
              </Button>
            )}
          </CheckLogin>
        </div>
      </div>
      <div className="pt-4">
        <p className="font-semibold text-lg">Combos in this plan</p>
        <>
          {salePlanComboResponse?.data?.data?.map((salePlanCombo) => (
            <Accordion
              open={open === salePlanCombo.id}
              //   animate={customAnimation}
              key={salePlanCombo.object_id}
            >
              <AccordionHeader
                onClick={() => handleSelectCombo(salePlanCombo)}
                className={`flex justify-start items-start gap-4 hover:bg-slate-50 cursor-pointer ${
                  salePlanCombo.object_id === selectedCombo?.id
                    ? 'bg-slate-100'
                    : ''
                }`}
              >
                <div>
                  <Image
                    src={'/img/plans/plan5.png'}
                    alt=""
                    height={60}
                    width={60}
                    className="h-auto rounded-md"
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-base">
                    {salePlanCombo.object_name}
                  </h1>
                </div>
              </AccordionHeader>
              <AccordionBody className="text-start !scale-100">
                <div className="py-2">
                  <p className="font-semibold text-base pb-2">Mô tả</p>
                  <ul className="list-disc px-4 font-normal text-sm text-textSecondary">
                    {saleObjectComboDescriptionResponse?.data?.data?.extra_info_instance?.ingredients?.map(
                      (value) => <li key={value}>{value}</li>,
                    )}
                  </ul>
                </div>
                <p className="font-semibold text-base pb-2">Món bao gồm</p>
                <div className="grid grid-cols-2 md:grid-cols-3 max-w">
                  {saleObjectDetailsResponse?.data?.data?.map((saleObject) => (
                    <div key={saleObject.id} className="flexStart gap-2 p-2">
                      <div className="bg-underground p-1 rounded-md">
                        <Image
                          src="/img/items/item8.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="flexColStart">
                        <p className="font-medium text-sm">
                          {saleObject.object_name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionBody>
            </Accordion>
          ))}
        </>
      </div>
    </div>
  );
};

export default Select;
