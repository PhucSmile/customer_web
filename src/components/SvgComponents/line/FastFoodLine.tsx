import { FC, SVGProps } from 'react';

const FastFoodLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M15.094 19.5c0 1.657-.968 3-2.625 3H6.28c-1.657 0-2.625-1.343-2.625-3"></path>
    <path d="M15.75 15.75c.828 0 1.5.84 1.5 1.875 0 1.035-.672 1.875-1.5 1.875H3c-.828 0-1.5-.84-1.5-1.875 0-1.035.672-1.875 1.5-1.875"></path>
    <path d="M16.125 15.75h-7.72c-.1 0-.194.04-.265.11l-1.257 1.257a.186.186 0 0 1-.205.041.186.186 0 0 1-.06-.04L5.36 15.86a.375.375 0 0 0-.265-.11h-2.47A1.125 1.125 0 0 1 1.5 14.625v0A1.125 1.125 0 0 1 2.625 13.5h13.5a1.125 1.125 0 1 1 0 2.25Z"></path>
    <path d="M3 12.938v-.01C3 10.348 5.11 9 7.688 9h3.375c2.578 0 4.687 1.36 4.687 3.938v-.01"></path>
    <path d="m11.297 5.25.349 2.999"></path>
    <path d="M12 22.5h6.53a1.5 1.5 0 0 0 1.496-1.388L21.703 5.25"></path>
    <path d="m17.25 5.25.75-3 2.203-.75"></path>
    <path d="M10.5 5.25h12"></path>
  </svg>
);

export default FastFoodLine;
