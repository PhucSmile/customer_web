import { FC, SVGProps } from 'react';

const MailLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M19.875 4.5H4.125c-1.036 0-1.875.84-1.875 1.875v11.25c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875V6.375c0-1.036-.84-1.875-1.875-1.875Z"></path>
    <path d="M5.25 7.5 12 12.75l6.75-5.25"></path>
  </svg>
);

export default MailLine;
