import { FC, SVGProps } from 'react';

const CardLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M19.125 4.5H4.875A2.625 2.625 0 0 0 2.25 7.125v9.75A2.625 2.625 0 0 0 4.875 19.5h14.25a2.625 2.625 0 0 0 2.625-2.625v-9.75A2.625 2.625 0 0 0 19.125 4.5Z"></path>
    <path d="M2.25 9h19.5"></path>
    <path d="M8.25 14.063H6V15h2.25v-.938Z"></path>
  </svg>
);

export default CardLine;
