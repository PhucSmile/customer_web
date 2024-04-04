type SaleObjectItemType = {
  name: string;
  image_url: string;
  quantity: number;
  net_weight: number;
  unit: string;
};

export type SaleObjectComboType = {
  id: string;
  name: string;
  image_url: string;
  isConfirm: boolean;
  items: SaleObjectItemType[];
};
