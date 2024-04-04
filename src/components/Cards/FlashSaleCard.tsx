import Image from 'next/image';
import Link from 'next/link';
import { PromotionObjectFlashSaleType } from '@/schemas/PromotionObjectFlashSaleSchema';
import { Typography } from '@/components/MaterialTailwind';
import { formatCurrencyVN } from '@/utils/numberUtils';

type SaleObjectCardProps = {
  data: PromotionObjectFlashSaleType;
};

const FlashSaleCard: React.FC<SaleObjectCardProps> = ({ data }) => {
  return (
    <div className="group/flashSaleCard transition-primary relative max-w-60 h-full m-2 mb-4 rounded-lg bg-white shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <Link href={`/sale-object/${data.object_id}`} className="">
        <div className="relative h-40 sm:h-52 lg:h-60 w-full overflow-hidden rounded-lg bg-underground">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="transition-primary absolute object-cover w-full h-auto overflow-hidden rounded-t-sm px-2 pt-2 group-hover/card:scale-110 "
            src={'/img/items/item1.png'}
            alt={'image_flash_sale'}
            onLoadingComplete={(image) => image.classList.remove('opacity-0')}
          />
        </div>
      </Link>
      <div className="p-4 pb-2">
        <Link href={`/sale-object/${data.id}`}>
          <Typography
            variant="h6"
            title={`${data.object_name}`}
            className="overflow-clip overflow-ellipsis whitespace-nowrap text-base font-semibold tracking-tight text-gray-900 group-hover/flashSaleCard:text-primary dark:text-white"
          >
            {data.object_name}
          </Typography>
        </Link>
        <div className="flexStart gap-2">
          <span className="text-lg font-medium text-secondary dark:text-white">
            {formatCurrencyVN(data.price)}
          </span>
          <del>{formatCurrencyVN(data.original_price)}</del>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
