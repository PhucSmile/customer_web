import { FC, SVGProps } from 'react';

const InfomationCircleLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M11.625 3a8.626 8.626 0 1 0 .001 17.251A8.626 8.626 0 0 0 11.625 3Z"></path>
    <path d="M10.313 10.313h1.5v5.437"></path>
    <path d="M9.75 15.938h4.125"></path>
    <path
      fill="none"
      stroke="none"
      d="M11.625 6.094a1.219 1.219 0 1 0 0 2.437 1.219 1.219 0 0 0 0-2.437Z"
    ></path>
  </svg>
);

export default InfomationCircleLine;
