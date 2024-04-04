'use client';
import { bannerSlider } from '@/utils/dataTest/bannerSlider';
import Link from 'next/link';
import Image from 'next/image';

import { Carousel } from '@/components/MaterialTailwind';

const BannerCarousel = (): JSX.Element => {
  return (
    <div className="w-full group/card mx-auto">
      <Carousel className="rounded-md" loop={true}>
        {bannerSlider.map((banner) => (
          <Link key={banner.id} href={banner.link}>
            <div className="relative h-[200px] sm:h-[280px] lg:h-[550px] w-full">
              <Image
                className="absolute"
                src={banner.image_url}
                alt={banner.name}
                fill
                priority
                sizes="100vw"
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
