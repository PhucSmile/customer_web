import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { SwiperContainer, SwiperSlide } from 'swiper/element/bundle';
import { SwiperSlideProps, SwiperProps } from 'swiper/react';

type Kebab<
  T extends string,
  A extends string = '',
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
  : A;

/**
 * Helper for converting object keys to kebab case because Swiper web components parameters are available as kebab-case attributes.
 * @link https://swiperjs.com/element#parameters-as-attributes
 */
export type KebabObjectKeys<T> = {
  [key in keyof T as Kebab<key & string>]: T[key] extends Object
    ? KebabObjectKeys<T[key]>
    : T[key];
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': DetailedHTMLProps<
        HTMLAttributes<SwiperContainer> &
          KebabObjectKeys<SwiperProps> & { class?: string },
        SwiperContainer
      >;
      'swiper-slide': DetailedHTMLProps<
        HTMLAttributes<SwiperSlide> &
          KebabObjectKeys<SwiperSlideProps> & { class?: string },
        SwiperSlide
      >;
    }
  }
}
