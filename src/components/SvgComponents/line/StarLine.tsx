import { FC, SVGProps } from 'react';

const StarLine: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="46"
    height="46"
    fill="none"
    stroke="currentColor"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.5 9.75h-8.063L12 2.25l-2.438 7.5H1.5l6.563 4.5-2.532 7.5L12 17.062l6.469 4.688-2.532-7.5 6.563-4.5Z"></path>
  </svg>
);

export default StarLine;
