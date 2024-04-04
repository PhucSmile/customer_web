'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SaleObjectType } from '@/types/SaleObjectTypes/SaleObjectType';

import {
  Button,
  IconButton,
  Rating,
  Typography,
} from '@/components/MaterialTailwind';
import BagAddLine from '../SvgComponents/line/BagAddLine';
import EyeLine from '../SvgComponents/line/EyeLine';
import BagAddSolid from '../SvgComponents/solid/BagAddSolid';
import { formatCurrencyVN, roundUp } from '@/utils/numberUtils';

type SaleObjectCardProps = {
  saleObject: SaleObjectType;
};

const SaleObjectCard: React.FC<SaleObjectCardProps> = ({
  saleObject,
}: {
  saleObject: SaleObjectType;
}) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  // const { addToCart } = useCart();

  // const handleAddToCart = () => {
  //   addToCart(saleObject);
  // };

  return (
    <div className="group/card transition-primary relative mx-auto h-fit w-full rounded-md bg-white p-2 shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <Link href={`/sale-object/${saleObject.id}`} className="">
        <div className="relative h-40 sm:h-52 lg:h-60 w-full overflow-hidden rounded-lg bg-underground">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="transition-primary absolute object-cover w-full h-auto overflow-hidden rounded-t-sm px-2 pt-2 group-hover/card:scale-110 "
            src={saleObject.image_url}
            alt={saleObject.image_url}
            onLoadingComplete={(image) => image.classList.remove('opacity-0')}
          />
        </div>
      </Link>
      <div className="transition-primary absolute bottom-[38%] z-50 hidden w-full group-hover/card:block">
        <div className="mb-4 flex animate-slideUp justify-center gap-5">
          <IconButton
            color="green"
            //onClick={handleAddToCart}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="group/circle transition-primary flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg hover:scale-125"
          >
            {isHovering ? (
              <BagAddSolid className="transition-primary z-10 w-5 cursor-pointer text-base text-primary group-hover/circle:scale-125" />
            ) : (
              <BagAddLine className="transition-primary z-10 w-5 cursor-pointer text-base text-black group-hover/circle:scale-125" />
            )}
          </IconButton>
          <IconButton
            color="green"
            className="group/circle transition-primary flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg hover:scale-125"
          >
            <EyeLine className="transition-primary z-10 w-5 cursor-pointer text-base text-black group-hover/circle:scale-125 group-hover/circle:text-primary" />
          </IconButton>
        </div>
      </div>
      <div className="p-4 pb-2">
        <Link href={`/sale-object/${saleObject.id}`}>
          <Typography
            variant="h6"
            title={`${saleObject.name} - ${saleObject.net_weight}`}
            className="overflow-clip overflow-ellipsis whitespace-nowrap text-base font-semibold tracking-tight text-gray-900 group-hover/card:text-primary dark:text-white"
          >
            {saleObject.name} - {saleObject.net_weight}
            {saleObject.unit}
          </Typography>
        </Link>
        <div className="mb-1 mt-2.5">
          <Rating value={roundUp(saleObject.starRank)} />
        </div>
        <div>
          <Typography className="text-sm">
            ({saleObject.reviews} đánh giá)
          </Typography>
        </div>
        <div className="flexBetween">
          <Typography className="text-lg font-medium text-primary group-hover/card:font-bold transition-primary dark:text-white">
            {formatCurrencyVN(saleObject.price)}
          </Typography>
        </div>
      </div>
    </div>
    // <div
    //   role="status"
    //   className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
    // >
    //   <div className="flexCenter w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
    //     <svg
    //       className="w-12 h-12 text-gray-200"
    //       xmlns="http://www.w3.org/2000/svg"
    //       aria-hidden="true"
    //       fill="currentColor"
    //       viewBox="0 0 640 512"
    //     >
    //       <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
    //     </svg>
    //   </div>
    //   <div className="w-full">
    //     <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    //     <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
    //     <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    //     <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
    //     <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
    //     <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    //   </div>
    //   <span className="sr-only">Loading...</span>
    // </div>
  );
};

export default SaleObjectCard;
