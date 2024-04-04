'use client';
import { BaseSwiperContainerPropsType } from '@/types/SwiperElement/BaseSwiperContainerPropsType';
import { BaseSwiperSlidePropsType } from '@/types/SwiperElement/BaseSwiperSlidePropsType';
import { FC, useRef } from 'react';
import { SwiperContainer, register } from 'swiper/element';
import { useUpdateEffect } from 'usehooks-ts';

const toKebabCase = (val: string) =>
  val
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

// const objectToKebabCase = (data: any) =>
//   data
//     ? Object.fromEntries(
//         Object.entries(data).map(([k, v]) => [toKebabCase(k), v])
//       )
//     : {};

const flatten = (
  obj: Record<string, any>,
  roots: Record<string, any>[] = [],
  sep = '-',
): Record<string, any> =>
  Object.keys(obj).reduce(
    (memo, prop) =>
      Object.assign(
        {},
        memo,
        typeof obj[prop] === 'object'
          ? flatten(obj[prop], roots.concat([toKebabCase(prop)]), sep)
          : { [roots.concat([toKebabCase(prop)]).join(sep)]: obj[prop] },
      ),
    {},
  );

register();

export const BaseSwiperContainer: FC<BaseSwiperContainerPropsType> = ({
  beforeInitialize,
  children,
  className,
  thumbsSwiper,
  ...props
}) => {
  const swiperRef = useRef<SwiperContainer | null>(null);

  useUpdateEffect(() => {
    beforeInitialize?.(swiperRef.current);

    Object.assign(swiperRef.current as SwiperContainer, flatten(props));

    swiperRef.current?.initialize?.();
  }, [swiperRef, flatten(props)]);

  return (
    <swiper-container
      {...flatten(props)}
      thumbs-swiper={`${thumbsSwiper}`}
      class={`${className}`}
      init={false}
      ref={swiperRef}
    >
      {children}
    </swiper-container>
  );
};

export const BaseSwiperSlide: FC<BaseSwiperSlidePropsType> = ({
  children,
  className,
  ...props
}) => (
  <swiper-slide {...flatten(props)} class={`${className}`}>
    {children}
  </swiper-slide>
);
