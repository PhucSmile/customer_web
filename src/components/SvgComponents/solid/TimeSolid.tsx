import { FC, SVGProps } from 'react';

const TimeLine: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75 0-5.385-4.366-9.75-9.75-9.75Zm4.5 11.25H12a.75.75 0 0 1-.75-.75V6a.75.75 0 1 1 1.5 0v6h3.75a.75.75 0 1 1 0 1.5Z"></path>
  </svg>
);

export default TimeLine;
