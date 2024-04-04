import { FC, SVGProps } from 'react';

const LocationOffLine: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="46"
    height="46"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.93 4c2.76 0 5 2.24 5 5 0 1.06-.39 2.32-1 3.62l1.49 1.49c.88-1.75 1.51-3.54 1.51-5.11 0-3.87-3.13-7-7-7-1.84 0-3.5.71-4.75 1.86l1.43 1.43C10.49 4.5 11.65 4 12.93 4Zm0 2.5c-.59 0-1.13.21-1.56.56l3.5 3.5c.35-.43.56-.97.56-1.56a2.5 2.5 0 0 0-2.5-2.5ZM4.34 2.86 2.93 4.27l3.18 3.18C6 7.95 5.93 8.47 5.93 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L19.66 21l1.41-1.41L4.34 2.86Zm8.59 16.02c-2.01-2.58-4.8-6.74-4.98-9.59l6.92 6.92c-.65.98-1.33 1.89-1.94 2.67Z"></path>
  </svg>
);

export default LocationOffLine;
