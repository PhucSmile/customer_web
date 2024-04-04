import { FC, SVGProps } from 'react';

const TrashLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="m5.25 5.25.938 15c.044.867.675 1.5 1.5 1.5h8.625c.828 0 1.447-.633 1.5-1.5l.937-15"></path>
    <path d="M3.75 5.25h16.5"></path>
    <path d="M9 5.25V3.375a1.122 1.122 0 0 1 1.125-1.125h3.75A1.121 1.121 0 0 1 15 3.375V5.25"></path>
    <path d="M12 8.25v10.5"></path>
    <path d="M8.625 8.25 9 18.75"></path>
    <path d="M15.375 8.25 15 18.75"></path>
  </svg>
);

export default TrashLine;
