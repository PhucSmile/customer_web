import { FC, SVGProps } from 'react';

const ChevronBackLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M15.375 5.25 8.625 12l6.75 6.75"></path>
  </svg>
);

export default ChevronBackLine;
