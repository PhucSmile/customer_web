import { FC, SVGProps } from 'react';

const InfomationCircleSharp: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="46"
    height="46"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.625c-5.17 0-9.375 4.206-9.375 9.375 0 5.17 4.206 9.375 9.375 9.375 5.17 0 9.375-4.206 9.375-9.375 0-5.17-4.206-9.375-9.375-9.375Zm0 3.844a1.219 1.219 0 1 1 0 2.437 1.219 1.219 0 0 1 0-2.437Zm3 10.593H9.375v-1.5h2.063v-4.124h-1.5v-1.5h3v5.624H15v1.5Z"></path>
  </svg>
);

export default InfomationCircleSharp;
