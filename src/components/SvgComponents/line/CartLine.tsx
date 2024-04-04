import { FC, SVGProps } from 'react';

const CartLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M8.25 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
    <path d="M18.75 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
    <path d="M2.25 3.75h3L7.5 16.5h12"></path>
    <path d="M7.5 13.5h11.692a.375.375 0 0 0 .369-.301l1.35-6.75a.376.376 0 0 0-.37-.449H6"></path>
  </svg>
);

export default CartLine;
