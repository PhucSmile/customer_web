'use client';

import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC, useRef, useState } from 'react';
import { Button, IconButton } from '@/components/MaterialTailwind';
import ChevronBackLine from '../SvgComponents/line/ChevronBackLine';
import ChevronForwardLine from '../SvgComponents/line/ChevronForwardLine';
import '../../styles/centeModeSlick.css';

import Image from 'next/image';
import { bannerSalePlanSlider } from '@/utils/dataTest/bannerSalePlanSlider';

const SalePlanBannerCarousel: FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
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
          centerPadding: '300px',
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          centerPadding: '200px',
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
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="mx-auto py-5">
      <div className="relative group/card">
        <IconButton
          className="transition-primary !absolute left-10 top-1/2 z-10 hidden h-12 w-12 animate-slideToLeft rounded-full bg-white bg-opacity-80 p-2 text-base hover:text-white hover:bg-primary text-primary group-hover/card:block"
          onClick={previous}
        >
          <ChevronBackLine className="w-6 h-6" />
        </IconButton>
        <Slider ref={slider} {...settings}>
          {bannerSalePlanSlider.map((banner, index) => (
            <div key={index}>
              <div
                className={`relative flex flex-col-reverse md:flex-row my-2 md:items-center justify-between rounded-2xl bg-teal-100/30 img-test overflow-hidden shadow-md h-[450px] sm:h-[550px] md:h-[360px] ${
                  index === slideIndex ? 'slide slide-active' : 'slide disabled'
                } `}
              >
                <div className="p-2 sm:px-5 text-left">
                  <h1 className="text-xl lg:text-3xl font-medium text-primary">
                    {banner.name}
                  </h1>
                  <p className="my-2 text-xs lg:text-base ">
                    {banner.description}
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
                  src={banner.image_url}
                  alt="profile"
                  width="0"
                  height="0"
                  sizes="100vw"
                  priority
                  className="w-full h-[320px] sm:h-[400px] md: lg:h-[400px]"
                />
              </div>
            </div>
          ))}
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

export default SalePlanBannerCarousel;
