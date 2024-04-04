import { FC, SVGProps } from 'react';

const StarSolid: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.469 22.5a.75.75 0 0 1-.44-.14L12 17.99l-6.029 4.37a.75.75 0 0 1-1.15-.847l2.35-6.965-6.093-4.178A.75.75 0 0 1 1.5 9h7.518l2.268-6.981a.75.75 0 0 1 1.427 0l2.27 6.984H22.5a.75.75 0 0 1 .424 1.369l-6.096 4.176 2.35 6.963a.75.75 0 0 1-.71.99Z"></path>
  </svg>
);

export default StarSolid;
