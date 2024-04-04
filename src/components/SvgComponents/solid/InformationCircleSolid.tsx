import { FC, SVGProps } from 'react';

const InformationCircleSolid: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.625c-5.17 0-9.375 4.206-9.375 9.375 0 5.17 4.206 9.375 9.375 9.375 5.17 0 9.375-4.206 9.375-9.375 0-5.17-4.206-9.375-9.375-9.375Zm0 3.844a1.219 1.219 0 1 1 0 2.437 1.219 1.219 0 0 1 0-2.437Zm2.25 10.593h-4.125a.75.75 0 1 1 0-1.5h1.313v-4.124h-.75a.75.75 0 1 1 0-1.5h1.5a.75.75 0 0 1 .75.75v4.874h1.312a.75.75 0 1 1 0 1.5Z"></path>
  </svg>
);

export default InformationCircleSolid;
