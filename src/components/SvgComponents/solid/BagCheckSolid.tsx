import { FC, SVGProps } from 'react';

const BagCheckSolid: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="46"
    height="46"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.312 7.94a1.49 1.49 0 0 0-1.062-.44h-3v-.75a5.25 5.25 0 1 0-10.5 0v.75h-3A1.5 1.5 0 0 0 2.25 9v10.125c0 1.828 1.547 3.375 3.375 3.375h12.75c.884 0 1.734-.346 2.366-.963a3.256 3.256 0 0 0 1.009-2.353V9a1.489 1.489 0 0 0-.438-1.06Zm-5.727 4.904-4.2 5.25a.75.75 0 0 1-.573.281H10.8a.75.75 0 0 1-.57-.262l-1.8-2.104a.749.749 0 1 1 1.14-.975l1.211 1.415 3.633-4.543a.75.75 0 0 1 1.172.938ZM15.75 7.5h-7.5v-.75a3.75 3.75 0 0 1 7.5 0v.75Z"></path>
  </svg>
);

export default BagCheckSolid;
