import { FC, SVGProps } from 'react';

const ChevronUpLine: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.25 15.375 12 8.625l6.75 6.75"></path>
  </svg>
);

export default ChevronUpLine;
