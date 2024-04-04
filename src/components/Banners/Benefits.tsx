import Image from 'next/image';
import Link from 'next/link';
import { Button, Typography } from '@/components/MaterialTailwind';
import ChevronForwardLine from '../SvgComponents/line/ChevronForwardLine';
const Benefits = () => {
  return (
    <div className="container py-10 mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="max-w-full relative h-48 mx-auto rounded-md bg-[#E6F2EC] p-2 lg:p-4 shadow-md">
          <div>
            <Typography variant="h5" className="font-medium text-primary">
              Upgrade to Moga&apos;s Plan{' '}
            </Typography>
            <Typography variant="paragraph" className="text-gray-800">
              Choose from a variety of Moga&apos;s premium subscription plans
              that support sustainable farming and the latest in nutrition
              research.{' '}
            </Typography>
          </div>
          <div className="absolute mx-auto -bottom-4 right-0 left-0 flexBetween w-11/12 px-2 p-1 rounded-lg bg-white shadow-md">
            <Typography variant="h5" className="text-lg font-medium">
              MOGA Plans
            </Typography>
            <Link href={`/sale-plan/select`}>
              <Button size="sm" className="bg-primary text-xs my-2">
                View all
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative max-w-full mx-auto h-52 rounded-md overflow-hidden">
            <Link href={`/sale-plan/select`} className="">
              <Image
                src={`/img/banner/banner-benefit1.jpg`}
                alt=""
                fill
                sizes="100vw"
                priority
                className="absolute hover:scale-105 transition-primary duration-150 cursor-pointer object-cover"
              />
            </Link>
            <div className="absolute w-48 bottom-10 left-5">
              <span>Fresh food</span>
              <h1 className="text-lg font-medium py-5">
                Vegetable eggplant 100% fresh food
              </h1>
              <div className="flexStart gap-1 text-lg text-green-500 hover:text-primary transition-primary">
                <Link href={`/sale-plan/select`} className="">
                  Shop now
                </Link>
                <ChevronForwardLine className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative max-w-full mx-auto h-52 rounded-md overflow-hidden">
            <Link href={`/sale-plan/select`} className="">
              <Image
                src={`/img/banner/banner-benefit2.jpg`}
                alt=""
                fill
                sizes="100vw"
                priority
                className="absolute hover:scale-105 transition-primary duration-150 cursor-pointer"
              />
            </Link>
            <div className="absolute w-48 bottom-10 left-5">
              <span>Fresh food</span>
              <h1 className="text-lg font-medium py-5">
                Vegetable eggplant 100% fresh food
              </h1>
              <div className="flexStart gap-1 text-lg text-green-500 hover:text-primary transition-primary">
                <Link href={`/sale-plan/select`} className="">
                  Shop now
                </Link>
                <ChevronForwardLine className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
