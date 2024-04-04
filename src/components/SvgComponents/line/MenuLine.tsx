import { FC, SVGProps } from 'react';

const MenuLine: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="46"
    height="46"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.75 7.5h16.5"></path>
    <path d="M3.75 12h16.5"></path>
    <path d="M3.75 16.5h16.5"></path>
  </svg>
);

export default MenuLine;
