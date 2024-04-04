import { FC, SVGProps } from 'react';

const CheckMarkDoneLine: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="46"
    height="46"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m21.75 6-10.5 12-4.5-4.5"></path>
    <path d="m6.75 18-4.5-4.5"></path>
    <path d="m17.25 6-6.375 7.313"></path>
  </svg>
);

export default CheckMarkDoneLine;
