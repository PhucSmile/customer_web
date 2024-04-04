import { FC, SVGProps } from 'react';

const CalendarLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M19.5 3.75h-15A2.25 2.25 0 0 0 2.25 6v13.5a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25Z"></path>
    <path
      fill="none"
      stroke="none"
      d="M13.875 12a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M17.625 12a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M13.875 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M17.625 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M6.375 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M10.125 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M6.375 19.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M10.125 19.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M13.875 19.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    ></path>
    <path d="M6 2.25v1.5"></path>
    <path d="M18 2.25v1.5"></path>
    <path d="M21.75 7.5H2.25"></path>
  </svg>
);

export default CalendarLine;
