import { FC, SVGProps } from 'react';

const ChevronForwardLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="m8.625 5.25 6.75 6.75-6.75 6.75"></path>
  </svg>
);

export default ChevronForwardLine;
