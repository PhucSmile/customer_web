import { FC, SVGProps } from 'react';

const FlashSharp: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.25 9.75H13.5l1.5-9-11.25 13.5h6.75l-1.5 9 11.25-13.5Z"></path>
  </svg>
);

export default FlashSharp;
