import AboutMoga from '@/components/Banners/AboutMoga';
import Benefits from '@/components/Banners/Benefits';
import FlashSaleCarousel from '@/components/Carousels/FlashSaleCarousel';
import SaleObjectCategoryCarousel from '@/components/Carousels/SaleObjectCategoryCarousel';
import PlanNotification from '@/components/Notifications/PlanNotification';
import AdsCarousel from '@/components/Carousels/BannerCarousel';
import { SaleObjectTabs } from '@/components/Tabs/SaleObjectTabs';
import SalePlanBannerCarousel from '@/components/Carousels/SalePlanBannerCarousel';
import SalePlanCategoryTabs from '@/components/Tabs/SalePlanCategoryTabs';
import SalePlanList from '@/components/Tabs/SalePlanList';
import SalePlanRecommendedCarousel from '@/components/Carousels/SalePlanRecommendedCarousel';
import HowItWorks from '@/components/Banners/HowItWorks';
import FreshFood from '@/components/Banners/FreshFood';

export default function Home() {
  return (
    <div className="mx-auto">
      <PlanNotification />
      {/* <SalePlanBannerCarousel /> */}
      <AdsCarousel />
      <HowItWorks />
      {/* <Benefits /> */}
      {/* <SaleObjectCategoryCarousel />
      <FlashSaleCarousel />
      <SaleObjectTabs />
      <AboutMoga /> */}
      <SalePlanRecommendedCarousel />
      <FreshFood />
      <SalePlanCategoryTabs />
      {/* <SalePlanList /> */}
    </div>
  );
}
