'use client';

import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC, useRef, useState } from 'react';
import { Button, IconButton } from '@/components/MaterialTailwind';
import ChevronBackLine from '../SvgComponents/line/ChevronBackLine';
import ChevronForwardLine from '../SvgComponents/line/ChevronForwardLine';
import { useGetSalePlanRecommendedQuery } from '@/api/appService/salePlan/salePlanApi';
import Image from 'next/image';
import '../../styles/centeModeSlick.css';

const SalePlanRecommendedCarousel: FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

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
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    cssEase: 'ease',
    initialSlide: 0,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 1,
          centerPadding: '400px',
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          centerPadding: '250px',
          centerMode: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          centerPadding: '100px',
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          centerPadding: '100px',
          dots: false,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          dots: false,
          centerPadding: '30px',
        },
      },
    ],
  };

  return (
    <div className="mx-auto pb-10">
      <h1 className="font-semibold text-3xl px-10">Nổi bật</h1>
      <div className="relative group/card">
        <IconButton
          className="transition-primary !absolute left-10 top-1/2 z-10 hidden h-12 w-12 animate-slideToLeft rounded-full bg-white bg-opacity-80 p-2 text-base hover:text-white hover:bg-primary text-primary group-hover/card:block"
          onClick={previous}
        >
          <ChevronBackLine className="w-6 h-6" />
        </IconButton>
        <Slider ref={slider} {...settings}>
          {SalePlanRecommendedResponse?.data?.data?.map(
            (salePlanRecommended, index) => (
              <div key={index}>
                <div
                  className={`relative flex flex-col-reverse md:flex-row my-2 md:items-center justify-between rounded-2xl bg-teal-100/30 img-test overflow-hidden shadow-md w-full xl:w-full h-[450px] sm:h-[550px] md:h-[360px] ${
                    index === slideIndex
                      ? 'slide slide-active'
                      : 'slide disabled'
                  } `}
                >
                  <div className="p-2 sm:px-5 text-left w-[360px]">
                    <h1 className="text-xl md:text-3xl font-medium text-primary">
                      {salePlanRecommended.name}
                    </h1>
                    <p className="my-2 text-xs md:text-base ">
                      {salePlanRecommended.description}
                    </p>
                    <Button
                      color="green"
                      className={`${
                        index === slideIndex ? '' : ' hover:cursor-default'
                      } bg-primary rounded-full font-semibold my-4 lg:px-10 transition-primary whitespace-nowrap`}
                    >
                      Đặt hàng
                    </Button>
                  </div>
                  <Image
                    src={'/img/plans/plan1.png'}
                    alt="profile"
                    width="0"
                    height="0"
                    sizes="100vw"
                    priority
                    className="object-cover object-center w-full h-[320px] sm:h-[400px] lg:h-[400px]"
                  />
                </div>
              </div>
            ),
          )}
        </Slider>
        <IconButton
          className="transition-primary !absolute right-10 top-1/2 z-10 hidden h-12 w-12 animate-slideToRight rounded-full bg-white bg-opacity-80 p-2 text-base hover:text-white hover:bg-primary text-primary group-hover/card:block"
          onClick={next}
        >
          <ChevronForwardLine className="w-6 h-6" />
        </IconButton>
      </div>
    </div>
  );
};

export default SalePlanRecommendedCarousel;
