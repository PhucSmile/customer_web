import { FC, SVGProps } from 'react';

const CloseLine: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.25 17.25 6.75 6.75"></path>
    <path d="m17.25 6.75-10.5 10.5"></path>
  </svg>
);

export default CloseLine;
