import { FC, SVGProps } from 'react';

const PencilLine: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m17.069 5.875-12.99 13.02L3 21.004l2.109-1.078 13.02-12.99-1.06-1.061Z"></path>
    <path d="m19.72 3.22-1.06 1.06 1.06 1.06 1.06-1.06a.75.75 0 0 0 0-1.06v0a.75.75 0 0 0-1.06 0v0Z"></path>
  </svg>
);

export default PencilLine;
