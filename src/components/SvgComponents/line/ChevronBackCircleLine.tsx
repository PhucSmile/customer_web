import { FC, SVGProps } from 'react';

const ChevronBackCircleLine: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
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
    <path d="M12 3c-4.969 0-9 4.031-9 9s4.031 9 9 9 9-4.031 9-9-4.031-9-9-9Z"></path>
    <path d="m13.875 16.5-4.5-4.5 4.5-4.5"></path>
  </svg>
);

export default ChevronBackCircleLine;
