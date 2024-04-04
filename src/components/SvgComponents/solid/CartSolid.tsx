import { FC, SVGProps } from 'react';

const CartSolid: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="46"
    height="46"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.25 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
    <path d="M18.75 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
    <path d="M21.413 5.662a1.121 1.121 0 0 0-.87-.412H6.276L5.99 3.62A.75.75 0 0 0 5.25 3h-3a.75.75 0 0 0 0 1.5h2.37l2.141 12.13a.75.75 0 0 0 .739.62h12a.75.75 0 1 0 0-1.5H8.13l-.265-1.5h11.328a1.128 1.128 0 0 0 1.104-.904l1.35-6.75a1.124 1.124 0 0 0-.234-.934Z"></path>
  </svg>
);

export default CartSolid;
