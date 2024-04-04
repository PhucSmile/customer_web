import { FC, SVGProps } from 'react';

const AddLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M12 5.25v13.5"></path>
    <path d="M18.75 12H5.25"></path>
  </svg>
);

export default AddLine;
