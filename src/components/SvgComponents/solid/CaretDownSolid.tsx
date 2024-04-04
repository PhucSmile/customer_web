import { FC, SVGProps } from 'react';

const CaretDownSolid: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="46"
    height="46"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m3 6.75 9 10.5 9-10.5H3Z"></path>
  </svg>
);

export default CaretDownSolid;
