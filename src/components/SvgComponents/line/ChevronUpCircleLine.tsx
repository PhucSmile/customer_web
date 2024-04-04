import { FC, SVGProps } from 'react';

const ChevronUpCircleLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="m16.5 13.875-4.5-4.5-4.5 4.5"></path>
    <path d="M12 3c-4.969 0-9 4.031-9 9s4.031 9 9 9 9-4.031 9-9-4.031-9-9-9Z"></path>
  </svg>
);

export default ChevronUpCircleLine;
