import { HomeSelectLine } from '../SvgComponents/line/HomeSelectLine';
import { HomeEnjoyLine } from '../SvgComponents/line/HomeEnjoyLine';
import { HomeProcessLine } from '../SvgComponents/line/HomeProcessLine';
const HowItWorks = () => {
  return (
    <div className="relative w-full h-full bg-fixed bg-cover bg-center bg-underground">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="text-primary font-bold text-2xl text-center py-4 pb-8">
          How It Works
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-0">
          <div className="flexColCenter gap-2">
            <HomeSelectLine className="w-20 h-20 md:w-32 md:h-32 text-primary" />
            <h1 className="text-primary font-semibold text-xl">Chọn Món</h1>
          </div>
          <div className="flexColCenter gap-2">
            <HomeProcessLine className="w-20 h-20 md:w-32 md:h-32 text-primary" />
            <h1 className="text-primary font-semibold text-xl">Sơ Chế Món</h1>
          </div>
          <div className="flexColCenter gap-2">
            <HomeEnjoyLine className="w-20 h-20 md:w-32 md:h-32 text-primary" />
            <h1 className="text-primary font-semibold text-xl">Thưởng Thức</h1>
          </div>
        </div>
      </div>
      <svg
        className="text-white w-full"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
          className="fill-current"
        ></path>
      </svg>
    </div>
  );
};

export default HowItWorks;
