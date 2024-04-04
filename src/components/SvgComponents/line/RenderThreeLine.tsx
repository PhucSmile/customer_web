import { FC, SVGProps } from 'react';

const RenderThreeLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M4.5 12h15"></path>
    <path d="M4.5 8.25h15"></path>
    <path d="M4.5 15.75h15"></path>
  </svg>
);

export default RenderThreeLine;
