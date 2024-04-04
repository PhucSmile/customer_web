'use client';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import FlashSaleCard from '../Cards/FlashSaleCard';
import { useGetAllPromotionObjectFlashSaleQuery } from '@/api/appService/promotionObjectFlashSaleApi';
import ChevronBackLine from '../SvgComponents/line/ChevronBackLine';
import ChevronForwardLine from '../SvgComponents/line/ChevronForwardLine';
import FlashSharp from '../SvgComponents/sharp/FlashSharp';

const FlashSaleCarousel = () => {
  const slider = useRef<Slider>(null);

  const { data: response, isFetching } =
    useGetAllPromotionObjectFlashSaleQuery();

  const next = (): void => {
    slider.current?.slickNext();
  };

  const previous = (): void => {
    slider.current?.slickPrev();
  };

  const settings: Settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return response?.data?.data?.some((data) => data) ? (
    <div className="container my-10 mx-auto">
      <div className="group/flashSaleCarousel bg-white p-2 pb-5 rounded-md">
        <div className="flexStart gap-2 py-2">
          <FlashSharp className="w-10 text-primary" />
          <h1 className="text-left text-2xl font-bold">Flash Sale</h1>
        </div>
        <div className="relative">
          <button
            className="transition-primary absolute left-0 top-1/3 z-10 hidden h-10 w-10 animate-slideToLeft rounded-full bg-green-800 bg-opacity-25 p-2 text-base text-white hover:bg-opacity-40 hover:text-primary group-hover/flashSaleCarousel:block"
            onClick={previous}
          >
            <ChevronBackLine className="w-6 h-6" />
          </button>
          <Slider ref={slider} {...settings}>
            {response?.data?.data?.map((data) => (
              <FlashSaleCard key={data.id} data={data} />
            ))}
          </Slider>
          <button
            className="transition-primary absolute right-0 top-1/3 z-10 hidden h-10 w-10 animate-slideToRight rounded-full bg-green-800 bg-opacity-25 p-2 text-base text-white hover:bg-opacity-40 hover:text-primary group-hover/flashSaleCarousel:block"
            onClick={next}
          >
            <ChevronForwardLine className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default FlashSaleCarousel;
