import { FC, SVGProps } from 'react';

const WarningLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M4.011 20.914H19.99a1.5 1.5 0 0 0 1.32-2.211L13.322 3.867c-.566-1.052-2.075-1.052-2.642 0L2.691 18.703a1.5 1.5 0 0 0 1.32 2.211v0Z"></path>
    <path d="M11.73 9.162 12 14.88l.268-5.716a.269.269 0 0 0-.271-.281v0a.27.27 0 0 0-.266.279v0Z"></path>
    <path
      fill="currentColor"
      stroke="none"
      d="M12 18.625a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875Z"
    ></path>
  </svg>
);

export default WarningLine;
