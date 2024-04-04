import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { SwiperContainer, SwiperSlide } from 'swiper/element';
import { SwiperProps, SwiperSlideProps } from 'swiper/react';

export type BaseSwiperPropsType<T> = {
  data: T[];
  mapSlide: (value: T) => ReactNode;
  beforeInitialize?: (value: SwiperContainer | null) => void;
  containerProps?: Omit<
    DetailedHTMLProps<
      HTMLAttributes<SwiperContainer> & SwiperProps & { class?: string },
      SwiperContainer
    >,
    'init' | 'ref'
  >;
  slideProps?: DetailedHTMLProps<
    HTMLAttributes<SwiperSlide> & SwiperSlideProps & { class?: string },
    SwiperSlide
  >;
  //   containerProps?: Omit<
  //     DetailedHTMLProps<
  //       HTMLAttributes<SwiperContainer> &
  //         KebabObjectKeys<SwiperProps> & { class?: string },
  //       SwiperContainer
  //     >,
  //     'init' | 'ref'
  //   >;
  //   slideProps?: DetailedHTMLProps<
  //     HTMLAttributes<SwiperSlide> &
  //       KebabObjectKeys<SwiperSlideProps> & { class?: string },
  //     SwiperSlide
  //   >;
};
