import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { SwiperContainer } from 'swiper/element';
import { SwiperProps } from 'swiper/react';
import { ThumbsOptions } from 'swiper/types';

export type BaseSwiperContainerPropsType = Omit<
  DetailedHTMLProps<
    HTMLAttributes<SwiperContainer> & SwiperProps,
    SwiperContainer
  >,
  'init' | 'ref'
> & {
  effect?: 'fade' | 'coverflow' | 'flip' | 'cube' | 'cards' | 'creative';
  thumbsSwiper?: string;
  thumbs?: Omit<ThumbsOptions, 'swiper'>;
  children: ReactNode;
  beforeInitialize?: (value: SwiperContainer | null) => void;
};
