import { FC, SVGProps } from 'react';

const AlertCircleLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z" />
    <path d="m11.73 7.781.27 5.717.268-5.717a.267.267 0 0 0-.164-.26.269.269 0 0 0-.107-.021v0a.27.27 0 0 0-.266.281v0Z" />
    <path
      fill="none"
      stroke="none"
      d="M12 17.242a.937.937 0 1 1 0-1.874.937.937 0 0 1 0 1.874Z"
    />
  </svg>
);

export default AlertCircleLine;
