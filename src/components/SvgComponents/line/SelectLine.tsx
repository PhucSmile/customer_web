import { FC, SVGProps } from 'react';

const SelectLine: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    color="inherit"
  >
    <path
      d="M9 12H7v2h2v-2ZM7 16h2v2H7v-2ZM18 12h-7v2h7v-2ZM11 16h7v2h-7v-2Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.938 4.45 5.688 8H3h19v14H3V10.65L2 6.918 20.353 2l1.607 6h-2.07l-.952-3.55ZM5 10h15v10H5V10Z"
      fill="currentColor"
    ></path>
  </svg>
);

export default SelectLine;
