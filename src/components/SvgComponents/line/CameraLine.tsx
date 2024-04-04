<svg
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
  <path d="m16.432 6.97-1.248-1.972c-.263-.307-.624-.498-1.028-.498H9.844c-.404 0-.765.191-1.028.498L7.568 6.969c-.263.307-.601.531-1.005.531H3.75A1.5 1.5 0 0 0 2.25 9v9a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5h-2.766c-.405 0-.79-.224-1.052-.53Z"></path>
  <path d="M12 16.5A3.75 3.75 0 1 0 12 9a3.75 3.75 0 0 0 0 7.5Z"></path>
  <path d="M5.813 7.406V6.375H4.688v1.031"></path>
</svg>;
import { FC, SVGProps } from 'react';

const CameraLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="m16.432 6.97-1.248-1.972c-.263-.307-.624-.498-1.028-.498H9.844c-.404 0-.765.191-1.028.498L7.568 6.969c-.263.307-.601.531-1.005.531H3.75A1.5 1.5 0 0 0 2.25 9v9a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5h-2.766c-.405 0-.79-.224-1.052-.53Z"></path>
    <path d="M12 16.5A3.75 3.75 0 1 0 12 9a3.75 3.75 0 0 0 0 7.5Z"></path>
    <path d="M5.813 7.406V6.375H4.688v1.031"></path>
  </svg>
);

export default CameraLine;
