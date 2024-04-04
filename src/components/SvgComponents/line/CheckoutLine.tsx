import { FC, SVGProps } from 'react';

const CheckoutLine: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    color="inherit"
  >
    <path
      d="M6.75 6.5h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 4v7h8v11H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Zm-2 0H4v16h3v-9h5V4Zm8 9H9v2h11v-2ZM9 17v3h11v-3H9Z"
      fill="currentColor"
    ></path>
  </svg>
);

export default CheckoutLine;
