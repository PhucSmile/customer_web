import { FC, SVGProps } from 'react';

const LockClosedLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M15.75 9.75V5.297a3.75 3.75 0 0 0-7.5 0V9.75"></path>
    <path d="M17.25 9.75H6.75A2.25 2.25 0 0 0 4.5 12v8.25a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V12a2.25 2.25 0 0 0-2.25-2.25Z"></path>
  </svg>
);

export default LockClosedLine;
