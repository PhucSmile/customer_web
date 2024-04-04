import { FC, SVGProps } from 'react';

const BagAddSolid: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.312 7.94a1.494 1.494 0 0 0-1.062-.44h-3v-.75a5.25 5.25 0 1 0-10.5 0v.75h-3A1.5 1.5 0 0 0 2.25 9v10.125c0 1.828 1.547 3.375 3.375 3.375h12.75c.884 0 1.734-.346 2.366-.963a3.256 3.256 0 0 0 1.009-2.353V9a1.49 1.49 0 0 0-.438-1.06ZM15 15.75h-2.25V18a.75.75 0 1 1-1.5 0v-2.25H9a.75.75 0 1 1 0-1.5h2.25V12a.75.75 0 1 1 1.5 0v2.25H15a.75.75 0 1 1 0 1.5Zm.75-8.25h-7.5v-.75a3.75 3.75 0 0 1 7.5 0v.75Z"></path>
  </svg>
);

export default BagAddSolid;
