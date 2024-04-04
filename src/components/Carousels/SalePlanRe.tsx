'use client';

import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC, useRef } from 'react';
import { IconButton, Typography } from '@/components/MaterialTailwind';
import ChevronBackLine from '../SvgComponents/line/ChevronBackLine';
import ChevronForwardLine from '../SvgComponents/line/ChevronForwardLine';
import SalePlanCard from '../Cards/sale-plan/SalePlanCard';
import { useGetSalePlanRecommendedQuery } from '@/api/appService/salePlan/salePlanApi';
import SalePlanRecommended from '../Cards/sale-plan/SalePlanRecommended';

const SalePlanRecommendedCarouselx: FC = () => {
  const {
    data: SalePlanRecommendedResponse,
    isFetching: isSalePlanRecommendedFetching,
  } = useGetSalePlanRecommendedQuery();
  const slider = useRef<Slider>(null);
  const next = (): void => {
    slider.current?.slickNext();
  };

  const previous = (): void => {
    slider.current?.slickPrev();
  };

  const settings: Settings = {
    infinite: true,
    speed: 600,
    slidesToShow:
      SalePlanRecommendedResponse?.data?.data &&
      SalePlanRecommendedResponse?.data?.data?.length >= 3
        ? 3
        : SalePlanRecommendedResponse?.data?.data?.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow:
            SalePlanRecommendedResponse?.data?.data &&
            SalePlanRecommendedResponse?.data?.data?.length >= 3
              ? 3
              : SalePlanRecommendedResponse?.data?.data?.length,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow:
            SalePlanRecommendedResponse?.data?.data &&
            SalePlanRecommendedResponse?.data?.data?.length >= 3
              ? 3
              : SalePlanRecommendedResponse?.data?.data?.length,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow:
            SalePlanRecommendedResponse?.data?.data &&
            SalePlanRecommendedResponse?.data?.data?.length >= 1
              ? 1
              : SalePlanRecommendedResponse?.data?.data?.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {SalePlanRecommendedResponse?.data?.data?.some((data) => data) ? (
        <div className="mx-auto px-2 md:px-4 max-w-6xl py-10">
          <div className="group/card py-5 px-2 bg-white rounded-md">
            <Typography variant="h4" className="mb-4 mx-4 text-left">
              Recommended
            </Typography>
            <div className="relative">
              <IconButton
                className="transition-primary !absolute left-0 top-1/2 z-10 hidden h-10 w-10 animate-slideToLeft rounded-full bg-green-800 bg-opacity-25 p-2 text-base text-white hover:bg-opacity-40 hover:text-primary group-hover/card:block"
                onClick={previous}
              >
                <ChevronBackLine className="w-6 h-6" />{' '}
              </IconButton>
              <Slider ref={slider} {...settings}>
                {SalePlanRecommendedResponse?.data?.data?.map((data) => (
                  <SalePlanRecommended key={data.id} data={data} />
                ))}
              </Slider>
              <IconButton
                className="transition-primary !absolute right-0 top-1/2 z-10 hidden h-10 w-10 animate-slideToRight rounded-full bg-green-800 bg-opacity-25 p-2 text-base text-white hover:bg-opacity-40 hover:text-primary group-hover/card:block"
                onClick={next}
              >
                <ChevronForwardLine className="w-6 h-6" />
              </IconButton>
            </div>
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default SalePlanRecommendedCarouselx;
