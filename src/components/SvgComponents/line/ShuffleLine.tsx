import { FC, SVGProps } from 'react';

const ShuffleLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M18.75 14.25 21 16.5l-2.25 2.25"></path>
    <path d="M18.75 5.25 21 7.5l-2.25 2.25"></path>
    <path d="M3 16.5h3.993a3.75 3.75 0 0 0 3.12-1.67L12 12"></path>
    <path d="M3 7.5h3.993a3.75 3.75 0 0 1 3.12 1.67l3.774 5.66a3.75 3.75 0 0 0 3.12 1.67H19.5"></path>
    <path d="M19.5 7.5h-2.493a3.75 3.75 0 0 0-3.12 1.67l-.387.58"></path>
  </svg>
);

export default ShuffleLine;
