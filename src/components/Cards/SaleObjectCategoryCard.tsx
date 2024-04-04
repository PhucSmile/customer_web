import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { SaleObjectCategoryType } from '@/schemas/SaleObjectSchemas/SaleObjectCategorySchemas/SaleObjectCategorySchema';

type SaleObjectProps = {
  data: SaleObjectCategoryType;
};

const SaleObjectCategoryCard: FC<SaleObjectProps> = ({ data }) => {
  return (
    <div className="mx-2 rounded-lg dark:bg-gray-800">
      <Link
        href=""
        className="group/img transition-primary flex flex-col items-center"
      >
        <div className="transition-primary relative h-40 w-40 overflow-hidden rounded-full bg-white shadow-lg">
          <Image
            height={120}
            width={120}
            className="duration-5000 absolute inset-0 mx-auto h-full rounded-full object-none text-center transition-opacity ease-in-out"
            src={'/img/items/item1.png'}
            alt={'image'}
            style={{ width: 'auto' }}
            priority
          />
          <div className="absolute inset-0 flexCenter rounded-full opacity-0 transition-opacity duration-300 ease-in-out hover:bg-gray-600 hover:bg-opacity-75 hover:opacity-100">
            <p className="text-lg font-semibold text-white">20 sản phẩm</p>
          </div>
        </div>
        <h5 className="tet-gray-900 my-5 text-lg font-medium dark:text-white">
          <span className="transition-primary group-hover/img:text-green-500">
            {data.name}
          </span>
        </h5>
      </Link>
    </div>
  );
};

export default SaleObjectCategoryCard;
