import { FC } from 'react';
import Image from 'next/image';
import { ShippingType } from '@/types/ShippingType';
import { Option, Select, Typography } from '@/components/MaterialTailwind';
import { formatCurrencyVN } from '@/utils/numberUtils';

type ShippingTypeProps = {
  shippingData: ShippingType[];
  selected?: ShippingType;
  handleSelect: (selected?: ShippingType) => void;
};

export const ShippingListbox: FC<ShippingTypeProps> = ({
  shippingData,
  selected,
  handleSelect,
}) => {
  return (
    <div className="w-full border-b pb-3">
      <Select
        variant="standard"
        label="Phương thức"
        color="green"
        className="border-none ring-0"
      >
        {shippingData.map((shippingDetail, index) => (
          <Option key={shippingDetail.id + index} defaultValue={'hello'}>
            <div className="text flexStart gap-2 mb-2 py-2 truncate">
              <Image
                src={shippingDetail.image_url}
                width={40}
                height={36}
                alt={shippingDetail.shipping_name}
              />
              <div className="flex flex-col">
                <div
                  className={`flexStart gap-4 truncate text-base ${
                    selected ? 'font-medium' : 'font-normal'
                  }`}
                >
                  <span>{shippingDetail.shipping_name}</span>
                  <span className="font-medium text-primary">
                    {formatCurrencyVN(shippingDetail.shipping_price)}
                  </span>
                </div>
                <span className="text-sm">{shippingDetail.description}</span>
              </div>
            </div>
          </Option>
        ))}
      </Select>
    </div>
  );
};
