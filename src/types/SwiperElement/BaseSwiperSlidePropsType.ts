import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { SwiperSlide } from 'swiper/element';
import { SwiperSlideProps } from 'swiper/react';

export type BaseSwiperSlidePropsType = DetailedHTMLProps<
  HTMLAttributes<SwiperSlide> & SwiperSlideProps,
  SwiperSlide
> & { children: ReactNode };
