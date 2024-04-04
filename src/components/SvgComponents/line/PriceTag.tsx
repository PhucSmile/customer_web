<svg
  width="46"
  height="46"
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="1.5"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M20.402 2.25h-5.761c-.18 0-.351.07-.478.197L2.646 13.964a1.352 1.352 0 0 0 0 1.908l5.484 5.484a1.353 1.353 0 0 0 1.908 0L21.55 9.844a.678.678 0 0 0 .197-.478V3.6a1.344 1.344 0 0 0-1.345-1.35Z"></path>
  <path
    fill="currentColor"
    stroke="none"
    d="M18 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
  ></path>
</svg>;
import { FC, SVGProps } from 'react';

const PriceTagLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M20.402 2.25h-5.761c-.18 0-.351.07-.478.197L2.646 13.964a1.352 1.352 0 0 0 0 1.908l5.484 5.484a1.353 1.353 0 0 0 1.908 0L21.55 9.844a.678.678 0 0 0 .197-.478V3.6a1.344 1.344 0 0 0-1.345-1.35Z"></path>
    <path
      fill="currentColor"
      stroke="none"
      d="M18 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
    ></path>
  </svg>
);

export default PriceTagLine;
