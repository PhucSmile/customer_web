import FlashSaleCarousel from '@/components/Carousels/FlashSaleCarousel';
import SalePlanBannerCarousel from '@/components/Carousels/SalePlanBannerCarousel';
import { SaleObjectTabs } from '@/components/Tabs/SaleObjectTabs';

const Product = () => {
  return (
    <div className="containter mx-auto">
      {/* <SalePlanBannerCarousel /> */}
      <FlashSaleCarousel />
      <SaleObjectTabs />
    </div>
  );
};

export default Product;
