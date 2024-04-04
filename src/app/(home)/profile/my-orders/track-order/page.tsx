import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from '@/components/MaterialTailwind';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrencyVN } from '@/utils/numberUtils';
import CardLine from '@/components/SvgComponents/line/CardLine';
import ChevronBackLine from '@/components/SvgComponents/line/ChevronBackLine';
import { BaseOrderCard } from '@/components/Cards/Profile/BaseOrderCard';

const TrackOrder = () => {
  return (
    <>
      <BaseOrderCard
        cardHeader={
          <div className="flexBetween">
            <Link
              href={`/profile/my-orders`}
              className="text-black flexStart gap-2 hover:text-primary"
            >
              <ChevronBackLine className="w-5 h-5" />
              Quay lại
            </Link>
            <div className="flex justify-end gap-4">
              <div className="flex flex-col">
                <Typography variant="paragraph" className="font-semibold">
                  Mã đơn hàng: 001
                </Typography>
                <Typography variant="paragraph">
                  Ngày đặt: 15:30, 15/08/2023
                </Typography>
              </div>
              <div className="text-primary">|</div>
              <Typography variant="h6" className="text-primary">
                Đơn hàng đã hoàn thành
              </Typography>
            </div>
          </div>
        }
        cardFooterClassName="border-none !p-0 !py-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="border-b-2 md:pr-4 md:border-b-0 md:border-r-2">
            <div className="pb-2 border-b">
              <Typography variant="h6">Delivery address</Typography>
              <div>
                <div className="flexStart gap-2">
                  <Typography variant="paragraph" className="font-semibold">
                    Vu Phan
                  </Typography>
                  <div className="border-l"></div>
                  <Typography
                    variant="paragraph"
                    className="font-normal text-gray-600"
                  >
                    0147896325
                  </Typography>
                </div>
                <Typography variant="small" className="text-sm text-gray-600">
                  05 Hoa Hòe, Phú Nhuận, HCM
                </Typography>
              </div>
            </div>
            <div className="py-2 border-b">
              <Typography variant="h6">Delivery time</Typography>
            </div>
            <div className="py-2 border-b">
              <Typography variant="h6">Order Summary</Typography>
              <div className="flex justify-between border-b">
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
              <div className="py-2">
                <div className="flexBetween py-1">
                  <Typography variant="small">Tạm tính</Typography>
                  <Typography variant="small">
                    {formatCurrencyVN(20000)}
                  </Typography>
                </div>
                <div className="flexBetween py-1">
                  <Typography variant="small">Coupon</Typography>
                  <Typography variant="small" className="text-primary">
                    -{formatCurrencyVN(10000)}
                  </Typography>
                </div>
              </div>
              <div className="flexBetween font-medium text-xl">
                <Typography variant="h6">Thành tiền</Typography>
                <Typography>{formatCurrencyVN(10000)}</Typography>
              </div>
            </div>
            <div className="py-2">
              <Typography variant="h6">Payment details</Typography>
              <div className="flexStart gap-2">
                <CardLine className="w-4 h-4" />
                <Typography variant="small">Paid via E-Bills</Typography>
              </div>
            </div>
          </div>
          <div className="w-[25rem]">
            <Typography variant="h6" className="pb-2">
              Order Status
            </Typography>
            <Timeline>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon color="green" />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Order Completed
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    Shipper delivered package successfully
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    16:30, 15/08/2023
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon color="green" />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Order is being delivery
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    Order is ready to delivery
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    16:30, 15/08/2023
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon color="green" />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Ready to deliver
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    Order is ready to delivery
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    16:30, 15/08/2023
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon color="green" />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Order is packaged
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    Order has been processing
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    16:30, 15/08/2023
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon color="green" />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Order placed
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    Moga has approved your order
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    16:30, 15/08/2023
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </BaseOrderCard>
    </>
  );
};

export default TrackOrder;
