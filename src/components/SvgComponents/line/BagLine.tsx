import { FC, SVGProps } from 'react';

const BagLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path
      d="M3.75 8.25A.75.75 0 0 0 3 9v10.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566V9a.75.75 0 0 0-.75-.75H3.75Z"
      clipRule="evenodd"
    ></path>
    <path d="M7.5 8.25v-1.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5v1.5"></path>
  </svg>
);

export default BagLine;
