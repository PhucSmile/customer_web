'use client';
import { saleObjectComboData } from '@/utils/dataTest/saleObjectComboData';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { Typography, Button } from '@/components/MaterialTailwind';
import { checkEmpty } from '@/utils/checkEmpty';
import {
  ISO8601StringToDayJS,
  formatFromISO8601,
  formatToISO8601,
} from '@/utils/dateUtils';
import LocationLine from '@/components/SvgComponents/line/LocationLine';
import CheckmarkDoneCircleSolid from '@/components/SvgComponents/solid/CheckmarkDoneCircleSolid';
import { useGetUserAddressByIdQuery } from '@/api/appService/userAddress/userAddressApi';
import MissingConFirmModal from '@/components/Modals/sale-plan/customize/MissingConfirmModal';
import SelectPakageModal from '@/components/Modals/sale-plan/customize/SelectPakageModal';
import { useGetSalePlanByIdQuery } from '@/api/appService/salePlan/salePlanApi';
import {
  useGetSalePlanRegisterDraftByRegisterDraftIdQuery,
  useRegisterSalePlanDraftCheckStaleDeliveryDateMutation,
} from '@/api/appService/salePlan/salePlanRegisterDraftApi';
import { checkEqual } from '@/utils/checkEqual';
import { useRouter } from 'next/navigation';
import TimeLine from '@/components/SvgComponents/line/TimeLine';
import { SalePlanRegisterDraftType } from '@/schemas/SalePlanSchemas/SalePlanRegisterDraftSchemas/SalePlanRegisterDraftSchema';
import CloseCircleSolid from '@/components/SvgComponents/solid/CloseCircle';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import EmblaCarousel, {
  imageByIndex,
} from '@/components/Carousels/EmblaCarousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';
import {
  BaseSwiperContainer,
  BaseSwiperSlide,
} from '@/components/Carousels/SwiperElement/BaseSwiper';
import { SwiperContainer } from 'swiper/element';
import { useGetMediaAlbumDetailByAlbumIdQuery } from '@/api/mediaService/mediaAlbumDetailApi';
import { useAllMediaAlbumQuery } from '@/api/mediaService/mediaAlbumApi';

const PACKAGE_SEPARATION_TIME = 3;

const SalePlanRegisterDraftComponent: FC<{
  data: SalePlanRegisterDraftType;
  isError?: boolean;
  onSuccess?: () => void;
}> = ({ data, onSuccess, isError }) => {
  const [isOpenSelectPakageModal, setIsOpenSelectPakageModal] = useState(false);

  const { data: userAddressByIdData } = useGetUserAddressByIdQuery(
    data?.customer_address_id,
    {
      enabled: !checkEmpty(data?.customer_address_id),
    },
  );

  // const { data: mediaAlbumDetailByAlbumIdResponse } =
  //   useGetMediaAlbumDetailByAlbumIdQuery(
  //     '4ca1b187-dffd-4477-b093-44f4d6ed4e23',
  //   );

  // console.log('object', mediaAlbumDetailByAlbumIdResponse);

  const handleCloseSelectPakageModal = () => {
    setIsOpenSelectPakageModal(false);
  };

  const handleOpenSelectPakageModal = () => {
    setIsOpenSelectPakageModal(true);
  };

  return (
    <div
      className={`my-2 flex flex-col relative rounded-md border ${
        isError ? 'border-red-600' : 'border-white'
      } p-4 bg-white shadow-sm`}
    >
      <div className="flex cursor-pointer flex-row items-center justify-between">
        <div className="basis-1/4 text-center">
          <h1 className="text-2xl font-medium">#{data?.package_number}</h1>
          {data?.is_confirm ? (
            <span className="rounded-lg bg-green-50 px-2 py-1 text-xs text-primary ">
              Đã xác nhận
            </span>
          ) : (
            <span className="rounded-lg bg-light-blue-50 px-2 py-1 text-xs text-light-blue-500 ">
              Đề nghị
            </span>
          )}
        </div>
        <div className="basis-full">
          <div
            className="flex flex-col gap-2 border-l border-borderColor pl-4"
            onClick={() => {
              handleOpenSelectPakageModal();
            }}
          >
            <div className="flexColBetween gap-2">
              <div className="flexStart gap-2">
                <Image
                  src={`/img/items/item5.png`}
                  alt=""
                  width={80}
                  height={80}
                  className="h-auto rounded-md bg-underground"
                />
                <span className="font-medium">{data?.combo_name}</span>
              </div>
              <div className="w-full flexBetween">
                <div className="flexBetween gap-2">
                  <TimeLine
                    color={isError ? 'red' : 'black'}
                    className="w-5 h-5"
                  />
                  <span className={isError ? 'text-red-600' : 'text-black'}>
                    {formatFromISO8601(data?.delivery_date)}
                  </span>
                </div>
                <div className="flexBetween gap-2">
                  <LocationLine className="w-5 h-5" />
                  <span>{userAddressByIdData?.data?.data?.alias}</span>
                </div>
              </div>
            </div>
            {data?.is_confirm ? (
              <div className="absolute top-2 right-2">
                {!isError ? (
                  <CheckmarkDoneCircleSolid className="w-6 h-6 text-primary" />
                ) : (
                  <CloseCircleSolid className="w-6 h-6 text-red-500" />
                )}
              </div>
            ) : (
              <div className="absolute top-2 right-2">
                <CheckmarkDoneCircleSolid className="w-6 h-6 text-disabled" />
              </div>
            )}
          </div>
          {/* {!data?.is_confirm ? (
            <div className="text-center">
              <button className="transition-primary mt-2 w-3/5 mx-auto rounded-lg border-2 whitespace-nowrap border-primary px-4 lg:px-10 py-1 text-primary hover:bg-primary hover:text-white">
                Xác nhận
              </button>
            </div>
          ) : null} */}
        </div>
      </div>

      <SelectPakageModal
        isOpen={isOpenSelectPakageModal}
        handleClose={handleCloseSelectPakageModal}
        data={data}
        onSuccess={onSuccess}
        // selected={selectedPaymentMethod}
        // handleSelect={handlePaymentMethodSelect}
      />
    </div>
  );
};

const Customize = ({
  params: { plan_id, register_draft_id },
}: {
  params: { plan_id: string; register_draft_id: string };
}) => {
  const [isOpenMissingConfirmModal, setIsOpenMissingConfirmModal] =
    useState(false);

  const swiperElRef = useRef<SwiperContainer | null>(null);
  useEffect(() => {
    swiperElRef.current?.initialize();
  }, []);

  const router = useRouter();
  // const { salePlanRegisterDraftData, setSalePlanRegisterDraftData } =
  //   useSalePlanRegisterDraftContext();
  const { data: salePlanByIdResponse, isFetching: isGetSalePlanByIdFetching } =
    useGetSalePlanByIdQuery(plan_id as string, {
      enabled: !checkEmpty(plan_id),
    });

  const {
    data: salePlanRegisterDraftByRegisterIdData,
    isFetching: isGetSalePlanRegisterByRegisterIdFetching,
    refetch: refetchGetSalePlanRegisterByRegisterId,
  } = useGetSalePlanRegisterDraftByRegisterDraftIdQuery(register_draft_id, {
    enabled: !checkEmpty(register_draft_id),
  });

  const {
    mutateAsync,
    data: registerMutationResponse,
    reset: resetRegister,
  } = useRegisterSalePlanDraftCheckStaleDeliveryDateMutation();

  // const {
  //   data: getMediaAlbumDetailByAlbumIdResponse,
  //   isFetching: isGetMediaAlbumDetailByAlbumIdFetching,
  // } = useGetMediaAlbumDetailByAlbumIdQuery(
  //   '319581a2-6836-4e3f-8344-60107f5cfc3a',
  // );

  // console.log(
  //   'getMediaAlbumDetailByAlbumIdResponse',
  //   getMediaAlbumDetailByAlbumIdResponse,
  // );

  const isLoading =
    isGetSalePlanByIdFetching || isGetSalePlanRegisterByRegisterIdFetching;

  const allCombo = saleObjectComboData?.length;
  const confirmedCombo = saleObjectComboData?.filter((item) => item.isConfirm)
    .length;
  const suggestedCombo = allCombo - confirmedCombo;

  const handleCloseMissingConfirmModal = () => {
    setIsOpenMissingConfirmModal(false);
  };

  const handleOpenMissingConfirmModal = () => {
    setIsOpenMissingConfirmModal(true);
  };

  const onSubmit = async () => {
    const { data: response } = await mutateAsync({
      plan_id,
      register_draft_id,
    });

    if ((response?.data?.length as number) > 0) {
      toast.error('Vui lòng kiểm tra ngày giao của các pack đã xác nhận');
      return;
    }

    router.push(
      `/sale-plan/checkout/${salePlanByIdResponse?.data?.data?.id}/${register_draft_id}`,
    );
  };

  const mappedArray =
    salePlanRegisterDraftByRegisterIdData?.data?.data?.map(
      (item, index, arr) => ({
        ...item,
        delivery_date: checkEmpty(item?.delivery_date)
          ? formatToISO8601(
              dayjs()?.add(PACKAGE_SEPARATION_TIME * (index + 1), 'day'),
            )
          : item?.delivery_date,
      }),
    ) ?? [];

  const salePlanImg = [
    '/img/plans/plan1.png',
    '/img/plans/plan2.png',
    '/img/plans/plan3.png',
    '/img/plans/plan4.png',
    '/img/plans/plan5.png',
    '/img/plans/plan5.png',
    '/img/plans/plan5.png',
  ];
  const OPTIONS: EmblaOptionsType = {};

  return (
    <div className="container mx-auto bg-underground py-8 max-w-6xl">
      <div className="py-2">
        <div className="flex flex-col lg:flex-row justify-center gap-y-5 px-2 lg:gap-x-5">
          <div className="rounded-lg bg-white shadow-md p-4 text-center text-lg mx-auto">
            <Typography
              variant="h4"
              className="text-left font-semibold pb-2 text-primary"
            >
              {salePlanByIdResponse?.data?.data?.name ?? ''}
            </Typography>
            {/* <Image
              src="/img/plans/plan1.png"
              priority
              alt={salePlanByIdResponse?.data?.data?.name ?? 'Plan'}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-lg bg-underground w-full h-auto min-w-[300px]"
            /> */}
            <EmblaCarousel
              options={OPTIONS}
              data={salePlanImg}
              mapContainer={(item, index) => (
                <div
                  className="relative flex-none w-full h-[400px] sm:h-[520px]"
                  key={index}
                >
                  <Image
                    className="w-full h-auto object-contain absolute"
                    src={imageByIndex(salePlanImg, index)}
                    alt="Your alt text"
                    height={0}
                    width={0}
                    priority
                    sizes="100vw"
                  />
                </div>
              )}
              mapThumb={(item, index) => (
                <Image
                  className="bg-underground rounded-md mx-2"
                  src={imageByIndex(salePlanImg, index)}
                  alt="Your alt text"
                  width={80}
                  height={80}
                  sizes="100vw"
                />
              )}
            />
            {/* <>
              <BaseSwiperContainer
                thumbsSwiper=".thumbTest"
                navigation
                grabCursor
                className="pb-20 w-[25vw]"
                effect="cube"
                thumbs={{
                  autoScrollOffset: 1,
                }}
              >
                {salePlanImg.map((item, index) => (
                  <BaseSwiperSlide key={index}>
                    <div className="relative flex-none w-full h-[500px]">
                      <Image
                        className="w-full h-auto object-contain absolute rounded-2xl"
                        src={item}
                        alt="Sale plan"
                        height={0}
                        width={0}
                        priority
                        sizes="100vw"
                      />
                    </div>
                  </BaseSwiperSlide>
                ))}
              </BaseSwiperContainer>
              <BaseSwiperContainer
                className="thumbTest w-[30vw]"
                spaceBetween={0}
                slidesPerView={6}
                freeMode
                watchSlidesProgress
              >
                {salePlanImg.map((item, index) => (
                  <BaseSwiperSlide key={index} className="opacity-40">
                    <Image
                      className="bg-underground rounded-md mx-2"
                      src={item}
                      alt="Your alt text"
                      width={80}
                      height={80}
                      sizes="100vw"
                    />
                  </BaseSwiperSlide>
                ))}
              </BaseSwiperContainer>
            </> */}
          </div>
          <div className="rounded-lg bg-white shadow-md grow flex flex-col p-4 gap-2">
            <div className="flex justify-end">
              <Typography
                variant="small"
                className="text-right text-sm text-blue-500 cursor-pointer"
                onClick={handleOpenMissingConfirmModal}
              >
                Nếu tôi không xác nhận các lần giao hàng ?
              </Typography>
            </div>
            <div>
              <div>
                <span className="text-lg font-light">
                  Các gói sẽ được giao trong plan{' '}
                </span>
                <span className="font-medium text-lg text-primary">
                  &quot;{salePlanByIdResponse?.data?.data?.name}&quot;
                </span>
              </div>
              <div className="flexStart gap-4">
                <span className="rounded-full bg-underground p-1 px-2">
                  Tất cả ({allCombo})
                </span>
                <span>Đã xác nhận ({confirmedCombo})</span>
                <span>Đề nghị ({suggestedCombo})</span>
              </div>
            </div>
            <div className="max-h-[500px] overflow-y-scroll bg-underground shadow-md p-2 rounded-md">
              {(mappedArray?.length as number) > 0 ? (
                mappedArray
                  ?.sort((a, b) =>
                    a?.package_number > b?.package_number ? 0 : -1,
                  )
                  ?.map((salePlanRegisterDraft) => (
                    <SalePlanRegisterDraftComponent
                      key={salePlanRegisterDraft.id}
                      isError={registerMutationResponse?.data?.data?.some(
                        (item) => checkEqual(item, salePlanRegisterDraft.id),
                      )}
                      data={salePlanRegisterDraft}
                      onSuccess={() => {
                        refetchGetSalePlanRegisterByRegisterId();
                        resetRegister();
                      }}
                    />
                  ))
              ) : (
                <Typography>Không có dữ liệu</Typography>
              )}
            </div>
            <div className="text-center mt-2">
              <Button
                size="md"
                color="green"
                className="btn-primary bg-primary w-full max-w-sm"
                onClick={onSubmit}
              >
                Tiến hành thanh toán
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MissingConFirmModal
        isOpen={isOpenMissingConfirmModal}
        handleClose={handleCloseMissingConfirmModal}
      />
    </div>
  );
};

export default Customize;
