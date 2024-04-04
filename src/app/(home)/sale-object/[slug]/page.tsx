'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SaleObjectType } from '@/types/SaleObjectTypes/SaleObjectType';
import { saleObjectData } from '@/utils/dataTest/saleObjectData';
import {
  Button,
  Rating,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@/components/MaterialTailwind';
import { EmblaOptionsType } from 'embla-carousel-react';

import EmblaCarousel, {
  imageByIndex,
} from '@/components/Carousels/EmblaCarousel/EmblaCarousel';
import DescriptionCard from '@/components/Cards/sale-object/DescriptionCard';
import ReviewsCard from '@/components/Cards/sale-object/ReviewsCard';
import { formatCurrencyVN, roundUp } from '@/utils/numberUtils';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const DetailSaleObject = ({ params }: { params: { slug: string } }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovering, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const saleObject = saleObjectData?.find((x) => x.id === params.slug);

  // Thumb gallery
  const testCartData = saleObjectData.map((cartItem) => ({
    ...cartItem,
    img: {
      img_1: '/img/items/item1.png',
      img_2: '/img/items/item2.png',
      img_3: '/img/items/item6.png',
      img_4: '/img/items/item4.png',
      img_5: '/img/items/item5.png',
    },
  }));
  const currentItem = testCartData?.find((item) => item.id === params.slug);
  const testData = Object.values(currentItem?.img ?? '');
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const data = [
    {
      label: 'Description',
      value: 'description',
      tabComponent: <DescriptionCard />,
    },
    {
      label: 'Reviews',
      value: 'reviews',
      tabComponent: <ReviewsCard />,
    },
  ];
  return (
    <>
      {!saleObject ? (
        <div>SaleObject Not Found</div>
      ) : (
        <div className="bg-white">
          <div className="container mx-auto pt-10 bg-white max-w-6xl">
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="bg-white shadow-lg rounded-md grid md:grid-cols-2 gap-10 w-full max-w-6xl h-fit p-4 my-5">
                <EmblaCarousel
                  options={OPTIONS}
                  data={testData}
                  mapContainer={(item, index) => (
                    <div
                      className="relative pl-4 flex-none min-w-0 w-full h-[450px]"
                      key={index}
                    >
                      <Image
                        className="w-full h-auto object-contain absolute bg-underground"
                        src={imageByIndex(testData, index)}
                        alt="Your alt text"
                        height={0}
                        width={0}
                        priority
                        sizes="100vw"
                      />
                    </div>
                  )}
                  mapThumb={(item, index) => (
                    <Image
                      className="bg-underground rounded-md mx-2"
                      src={imageByIndex(testData, index)}
                      alt="Your alt text"
                      width={50}
                      height={120}
                      sizes="100vw"
                    />
                  )}
                />
                <div className="flexColCenter items-start">
                  <div>
                    <h1 className="text-2xl font-semibold">
                      {saleObject?.name} - {saleObject?.net_weight}
                      {saleObject.unit}
                    </h1>
                    <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                    <div className="flex flex-col items-start gap-2">
                      <div className="">
                        <Rating value={roundUp(saleObject.starRank)} />
                        <p>({saleObject?.reviews} đánh giá)</p>
                        <div>
                          <p className="text-3xl font-semibold text-secondary">
                            {formatCurrencyVN(saleObject?.price)}
                          </p>
                        </div>
                      </div>
                      <div className="flexStart">
                        <div className="bg-underground rounded-full">
                          <button
                            className="rounded-full bg-gray-200 w-8 h-8 hover:bg-green-200 transition-primary"
                            //onClick={() => handleDecreaseQuantity(saleObject)}
                          >
                            -
                          </button>
                          <input
                            className="w-12 text-center"
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) =>
                              setQuantity(parseInt(e.target.value))
                            }
                          />
                          <button
                            className="rounded-full bg-gray-200 w-8 h-8 hover:bg-green-200 transition-primary"
                            //onClick={() => handleIncreaseQuantity(saleObject)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flexCenter gap-2">
                    <Button
                      className="btn-primary bg-primary"
                      color="green"
                      size="md"
                      //onClick={handleAddToCart}
                    >
                      Thêm giỏ hàng
                    </Button>
                    <Link href="/sale-object/cart">
                      <Button
                        className="btn-primary bg-primary"
                        color="green"
                        size="md"
                      >
                        Mua ngay
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white w-full  my-5">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-10 rounded-lg p-4 font-normal text-primary">
                  <div className="text-center">
                    <Image
                      className="mx-auto w-auto"
                      src="/img/image13.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <p>Canh tác hữu cơ không hóa chất</p>
                  </div>
                  <div className="text-center w-auto">
                    <Image
                      className="mx-auto "
                      src="/img/image14.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <p>Bảo hành đến từng cọng rau</p>
                  </div>
                  <div className="text-center w-auto">
                    <Image
                      className="mx-auto"
                      src="/img/image15.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <p>Freeship cho hóa đơn từ 250k trong 2h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-white rounded-lg shadow-md p-5 border rounded-tr-md rounded-tl-md">
              <Tabs value={activeTab}>
                <TabsHeader
                  className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-fit"
                  indicatorProps={{
                    className:
                      'bg-transparent border-b-2 border-green-500 rounded-none shadow-none',
                  }}
                >
                  {data.map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setActiveTab(value)}
                      className={activeTab === value ? 'text-primary' : ''}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody>
                  {data.map(({ value, tabComponent }) => (
                    <TabPanel key={value} value={value}>
                      {tabComponent}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailSaleObject;
