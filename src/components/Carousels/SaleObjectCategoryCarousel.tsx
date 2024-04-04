'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { useGetRootItemsSaleObjectCategoryQuery } from '@/api/appService/saleObject/saleObjectCategoryApi';
import ChevronBackLine from '../SvgComponents/line/ChevronBackLine';
import ChevronForwardLine from '../SvgComponents/line/ChevronForwardLine';
import SaleObjectCategoryCard from '../Cards/SaleObjectCategoryCard';

const SaleObjectCategoryCarousel = () => {
  const slider = useRef<Slider>(null);

  const { data: response, isFetching } =
    useGetRootItemsSaleObjectCategoryQuery();

  const next = (): void => {
    slider.current?.slickNext();
  };

  const previous = (): void => {
    slider.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
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

  return (
    <div className="container mx-auto bg-underground my-10">
      <div className="group/card ">
        <h1 className="my-10 text-center text-4xl font-bold">
          Danh mục sản phẩm
        </h1>
        <div className="relative">
          <button
            className="transition-primary absolute left-0 top-1/3 z-10 hidden h-10 w-10 animate-slideToLeft rounded-full bg-green-800 bg-opacity-25 p-2 text-base text-white hover:bg-opacity-40 hover:text-primary group-hover/card:block"
            onClick={previous}
          >
            <ChevronBackLine className="w-6 h-6" />
          </button>
          <Slider ref={slider} {...settings}>
            {response?.data?.data?.map((saleObjectCategory) => (
              <SaleObjectCategoryCard
                key={saleObjectCategory.id}
                data={saleObjectCategory}
              />
            ))}
          </Slider>
          <button
            className="transition-primary absolute right-0 top-1/3 z-10 hidden h-10 w-10 animate-slideToRight rounded-full bg-green-800 bg-opacity-25 p-2 text-base text-white hover:bg-opacity-40 hover:text-primary group-hover/card:block"
            onClick={next}
          >
            <ChevronForwardLine className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleObjectCategoryCarousel;
