import { FC, SVGProps } from 'react';

const QrCodeLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path
      fill="none"
      stroke="none"
      d="M19.125 15.75h-3a.375.375 0 0 0-.375.375v3c0 .207.168.375.375.375h3a.375.375 0 0 0 .375-.375v-3a.375.375 0 0 0-.375-.375Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M15.375 12.75h-2.25a.375.375 0 0 0-.375.375v2.25c0 .207.168.375.375.375h2.25a.375.375 0 0 0 .375-.375v-2.25a.375.375 0 0 0-.375-.375Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M22.125 19.5h-2.25a.375.375 0 0 0-.375.375v2.25c0 .207.168.375.375.375h2.25a.375.375 0 0 0 .375-.375v-2.25a.375.375 0 0 0-.375-.375Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M22.125 12.75h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M14.625 20.25h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375Z"
    ></path>
    <path
      fill="none"
      stroke="none"
      d="M19.125 4.5h-3a.375.375 0 0 0-.375.375v3c0 .207.168.375.375.375h3a.375.375 0 0 0 .375-.375v-3a.375.375 0 0 0-.375-.375Z"
    ></path>
    <path d="M21 2.25h-6.75a.75.75 0 0 0-.75.75v6.75c0 .414.336.75.75.75H21a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75Z"></path>
    <path
      fill="none"
      stroke="none"
      d="M7.875 4.5h-3a.375.375 0 0 0-.375.375v3c0 .207.168.375.375.375h3a.375.375 0 0 0 .375-.375v-3a.375.375 0 0 0-.375-.375Z"
    ></path>
    <path d="M9.75 2.25H3a.75.75 0 0 0-.75.75v6.75c0 .414.336.75.75.75h6.75a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75Z"></path>
    <path
      fill="none"
      stroke="none"
      d="M7.875 15.75h-3a.375.375 0 0 0-.375.375v3c0 .207.168.375.375.375h3a.375.375 0 0 0 .375-.375v-3a.375.375 0 0 0-.375-.375Z"
    ></path>
    <path d="M9.75 13.5H3a.75.75 0 0 0-.75.75V21c0 .414.336.75.75.75h6.75a.75.75 0 0 0 .75-.75v-6.75a.75.75 0 0 0-.75-.75Z"></path>
  </svg>
);

export default QrCodeLine;
