import { FC, SVGProps } from 'react';

const HeartSolid: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 21a1.5 1.5 0 0 1-.843-.261c-3.684-2.5-5.28-4.216-6.16-5.288-1.874-2.285-2.772-4.63-2.746-7.171C2.28 5.368 4.616 3 7.457 3c2.067 0 3.498 1.164 4.331 2.133a.281.281 0 0 0 .425 0C13.046 4.163 14.477 3 16.543 3c2.842 0 5.178 2.368 5.207 5.28.026 2.541-.873 4.887-2.747 7.172-.88 1.072-2.475 2.787-6.159 5.287a1.5 1.5 0 0 1-.843.261Z"></path>
  </svg>
);

export default HeartSolid;
