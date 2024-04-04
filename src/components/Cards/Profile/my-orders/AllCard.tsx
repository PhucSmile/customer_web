import {
  Avatar,
  Badge,
  Button,
  Typography,
} from '@/components/MaterialTailwind';
import Image from 'next/image';
import { formatCurrencyVN } from '@/utils/numberUtils';
import Link from 'next/link';
import { BaseOrderCard } from '../BaseOrderCard';

export const AllCard = () => {
  return (
    <BaseOrderCard
      cardHeader={
        <div className="flex justify-start gap-2">
          <div className="flex-col">
            <Typography variant="h6" className="text-primary font-normal">
              On the way
            </Typography>
          </div>
        </div>
      }
      cardFooter={
        <div className="flex justify-end gap-2">
          <div className="flex flex-col items-end">
            <Typography variant="h6">
              Tổng tiền:
              <span className="text-primary text-lg">
                {' '}
                {formatCurrencyVN(20000)}
              </span>
            </Typography>
            <div className="flex justify-between gap-4">
              <Button
                className="btn-secondary text-primary hover:text-white hover:opacity-100 mx-auto normal-case hover:!bg-primary !outline-primary lg:text-sm !duration-300"
                variant="outlined"
                color="green"
                size="sm"
                onClick={() => {}}
              >
                View Detail
              </Button>
              <Link href={`/profile/my-orders/track-order`}>
                <Button
                  className="btn-secondary text-primary hover:text-white hover:opacity-100 mx-auto normal-case hover:!bg-primary !outline-primary lg:text-sm !duration-300"
                  variant="outlined"
                  color="green"
                  size="sm"
                  onClick={() => {}}
                >
                  Track Order
                </Button>
              </Link>
            </div>
          </div>
        </div>
      }
    >
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="relative h-20 w-20">
            <Image
              src={`/img/items/item1.png`}
              alt=""
              fill
              className="absolute"
            />
          </div>
          <div className="flex flex-col justify-start">
            <Typography variant="paragraph" className="font-bold">
              Cà chua - 500g
            </Typography>
            <Typography variant="paragraph">5x</Typography>
          </div>
        </div>
        <Typography>{formatCurrencyVN(20000)}</Typography>
      </div>
    </BaseOrderCard>
  );
};
