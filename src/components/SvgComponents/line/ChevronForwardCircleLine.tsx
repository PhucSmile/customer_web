import { FC, SVGProps } from 'react';

const ChevronForwardCircleLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M3 12c0 4.969 4.031 9 9 9s9-4.031 9-9-4.031-9-9-9-9 4.031-9 9Z"></path>
    <path d="m10.125 16.5 4.5-4.5-4.5-4.5"></path>
  </svg>
);

export default ChevronForwardCircleLine;
