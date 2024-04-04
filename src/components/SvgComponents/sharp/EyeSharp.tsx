import { FC, SVGProps } from 'react';

const EyeSharp: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="46"
    height="46"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
    <path d="M18.507 6.618C16.457 5.213 14.264 4.5 11.99 4.5c-2.048 0-4.045.61-5.934 1.804C4.149 7.51 2.28 9.704.75 12c1.238 2.063 2.933 4.183 4.697 5.4 2.024 1.393 4.225 2.1 6.542 2.1 2.297 0 4.493-.706 6.53-2.1 1.792-1.228 3.499-3.346 4.731-5.4-1.237-2.036-2.948-4.151-4.743-5.382ZM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"></path>
  </svg>
);

export default EyeSharp;
