'use client';
import { useGetSaleObjectDetailsBySaleObjectComboIdQuery } from '@/api/appService/saleObject/saleObjectApi';
import { useGetSaleObjectComboDescriptionBySaleObjectComboIdQuery } from '@/api/appService/saleObject/saleObjectComboApi';
import {
  useGetSalePlanComboBySalePlanIdQuery,
  useGetSalePlanDescriptionBySalePlanIdQuery,
} from '@/api/appService/salePlan/salePlanApi';
import { SalePlanComboType } from '@/schemas/SalePlanSchemas/SalePlanComboSchema';
import { SalePlanType } from '@/schemas/SalePlanSchemas/SalePlanSchema';
import { Button, Typography } from '@/components/MaterialTailwind';
import Image from 'next/image';
import { FC, Fragment, useState } from 'react';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import { BaseModal } from '../../BaseModal';
import { CheckLogin } from '../../auth/AuthModal';
import { RegisterSalePlanDraftType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/RegisterSalePlanDraftSchemas';
import { useRegisterSalePlanDraftMutation } from '@/api/appService/salePlan/salePlanRegisterDraftApi';
import { useRouter } from 'next/navigation';
import { formatCurrencyVN } from '@/utils/numberUtils';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@/components/MaterialTailwind';

type ModalSalePlanDetailProps = {
  data: SalePlanType;
  isOpen: boolean;
  handleClose: () => void;
};
const SalePlanDetailModal: FC<ModalSalePlanDetailProps> = ({
  data,
  isOpen,
  handleClose,
}) => {
  const [selectedCombo, setSelectedCombo] = useState<SalePlanComboType | null>(
    null,
  );
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const [open, setOpen] = useState<string>('');
  const {
    data: salePlanDescriptionResponse,
    isFetching: isSalePlanDescriptionFetching,
  } = useGetSalePlanDescriptionBySalePlanIdQuery(data?.id, {
    enabled: isOpen && !!data?.id,
  });

  const { data: salePlanComboResponse, isFetching: isSalePlanComboFetching } =
    useGetSalePlanComboBySalePlanIdQuery(data?.id, {
      enabled: isOpen && !!data?.id,
    });

  const {
    data: saleObjectComboDescriptionResponse,
    isFetching: isSaleObjectComboDescriptionFetching,
  } = useGetSaleObjectComboDescriptionBySaleObjectComboIdQuery(
    selectedCombo?.object_id ?? '',
    { enabled: isOpen && !!selectedCombo?.id },
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
    { enabled: isOpen && !!selectedCombo?.id },
  );

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const isLoading =
    isSaleObjectDetailsFetching ||
    isRegisterSalePlanDraftLoading ||
    isSaleObjectComboDescriptionFetching ||
    isSalePlanComboFetching ||
    isSalePlanDescriptionFetching;

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

  const handleSelectCombo = (saleObjectCombo: SalePlanComboType) => {
    setSelectedCombo(saleObjectCombo);
    setOpen(open === saleObjectCombo.id ? '' : saleObjectCombo.id);
  };

  const handleValueChange = (
    newValue: DateValueType,
    event?: HTMLInputElement | null,
  ) => {
    setValue(newValue);
  };

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      onCloseButtonClick={handleClose}
      title={data.name}
      modalTitleClassName="text-primary"
      modalHeaderClassName="py-0"
      modalClassName="min-w-fit"
      modalBodyClassName="!border-t-0 p-0"
      modalFooter={
        <div className="flex justify-end gap-2 py-2">
          <Button
            variant="text"
            color="gray"
            size="lg"
            disabled={isLoading}
            className="hover:text-white hover:!bg-inactive uppercase min-w-fit whitespace-nowrap"
            onClick={() => {
              handleClose();
            }}
          >
            Trở lại
          </Button>
          <CheckLogin>
            {({ isLogin, openAuthModal }) => (
              <Button
                onClick={() =>
                  isLogin
                    ? onSubmit({ plan_id: data.id })
                    : openAuthModal(() => onSubmit({ plan_id: data.id }))
                }
                disabled={isLoading}
                color="green"
                size="lg"
                className="bg-primary whitespace-nowrap mx-auto w-full"
              >
                Mua với giá {formatCurrencyVN(data.price)}
              </Button>
            )}
          </CheckLogin>
        </div>
      }
    >
      <div>
        <Image
          src="/img/plans/plan6.jpg"
          alt="profile"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="w-full h-auto"
        />
        <div className="px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2 border-b lg:border-none">
            <div className="py-2">
              <Typography className="font-semibold text-lg pb-2">
                Benefits
              </Typography>
              <ul className="list-disc px-4">
                {salePlanDescriptionResponse?.data?.data?.extra_info_instance?.benefits?.map(
                  (value) => <li key={value}>{value}</li>,
                )}
              </ul>
            </div>
            <div className="py-2">
              <Typography className="font-semibold text-lg pb-2">
                Categories
              </Typography>
              <ul className="list-disc px-4">
                {salePlanDescriptionResponse?.data?.data?.extra_info_instance?.categories?.map(
                  (value) => <li key={value}>{value}</li>,
                )}
              </ul>
            </div>
            <div className="py-2">
              <Typography className="font-semibold text-lg pb-2">
                Servings:
                <span className="mx-1">
                  {salePlanDescriptionResponse?.data?.data?.servings}
                </span>
              </Typography>
            </div>
          </div>
          <div className="py-2">
            <Typography className="font-semibold text-lg pb-2">
              Combos in this plan
            </Typography>
            <Fragment>
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
                      <Typography className="font-semibold text-base pb-2">
                        Mô tả
                      </Typography>
                      <ul className="list-disc px-4 font-normal text-sm text-textSecondary">
                        {saleObjectComboDescriptionResponse?.data?.data?.extra_info_instance?.ingredients?.map(
                          (value) => <li key={value}>{value}</li>,
                        )}
                      </ul>
                    </div>
                    <Typography className="font-semibold text-base pb-2">
                      Món bao gồm
                    </Typography>
                    <div className="grid grid-cols-2 md:grid-cols-3 max-w">
                      {saleObjectDetailsResponse?.data?.data?.map(
                        (saleObject) => (
                          <div
                            key={saleObject.id}
                            className="flexStart gap-2 p-2"
                          >
                            <div className="bg-underground p-1 rounded-md">
                              <Image
                                src="/img/items/item8.png"
                                alt=""
                                width={32}
                                height={32}
                              />
                            </div>
                            <div className="flexColStart">
                              <Typography className="font-medium text-sm">
                                {saleObject.object_name}
                              </Typography>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </AccordionBody>
                </Accordion>
              ))}
            </Fragment>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default SalePlanDetailModal;
