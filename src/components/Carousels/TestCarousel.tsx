'use client';
import { useGetSalePlanRecommendedQuery } from '@/api/appService/salePlan/salePlanApi';
import { useEffect, useRef } from 'react';
import { SwiperContainer, register } from 'swiper/element/bundle';
import SalePlanRecommended from '../Cards/sale-plan/SalePlanRecommended';
import Image from 'next/image';
import {
  BaseSwiperContainer,
  BaseSwiperSlide,
} from './SwiperElement/BaseSwiper';

export const MyComponent = () => {
  const swiperElRef = useRef<SwiperContainer | null>(null);

  const {
    data: SalePlanRecommendedResponse,
    isFetching: isSalePlanRecommendedFetching,
  } = useGetSalePlanRecommendedQuery();

  useEffect(() => {
    // listen for Swiper events using addEventListener
    // swiperElRef.current?.addEventListener('progress', (e) => {
    //   const [swiper, progress] = e?.detail ?? [];
    //   console.log(progress);
    // });

    // swiperElRef.current?.addEventListener('slidechange', (e) => {
    //   console.log('slide changed');
    // });
    // (swiperElRef.current as SwiperContainer).breakpoints = {
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    //   900: {
    //     slidesPerView: 5,
    //     spaceBetween: 50,
    //   },
    // };

    swiperElRef.current?.initialize();
  }, []);

  return (
    <>
      <BaseSwiperContainer
        thumbsSwiper=".thumbTest"
        navigation
        grabCursor
        className="pb-20 w-[30vw]"
        effect="cards"
        thumbs={{
          autoScrollOffset: 1,
        }}
      >
        {SalePlanRecommendedResponse?.data?.data?.map((item) => (
          <BaseSwiperSlide key={item.id}>
            <SalePlanRecommended key={item.id} data={item} />
          </BaseSwiperSlide>
        ))}
      </BaseSwiperContainer>
      <BaseSwiperContainer
        className="thumbTest w-[30vw]"
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
      >
        {SalePlanRecommendedResponse?.data?.data?.map((item) => (
          <BaseSwiperSlide key={item?.id} className="opacity-40">
            <Image
              src="/img/plans/plan6.jpg"
              alt="profile"
              width="0"
              height="0"
              sizes="50vw"
              priority
              className="w-full h-auto rounded-3xl"
            />
          </BaseSwiperSlide>
        ))}
      </BaseSwiperContainer>
    </>
  );
};
