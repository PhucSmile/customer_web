import { FC, SVGProps } from 'react';

const NotificationSolid: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="46"
    height="46"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m20.629 15.999-.23-.278c-1.03-1.247-1.655-2-1.655-5.531 0-1.828-.437-3.328-1.3-4.453-.635-.832-1.494-1.462-2.626-1.928a.142.142 0 0 1-.039-.031C14.372 2.414 13.257 1.5 12 1.5c-1.256 0-2.37.914-2.778 2.276a.147.147 0 0 1-.038.03c-2.644 1.09-3.928 3.177-3.928 6.383 0 3.533-.623 4.286-1.655 5.531l-.23.279a1.648 1.648 0 0 0-.217 1.763c.289.61.905.988 1.609.988h14.48c.7 0 1.312-.378 1.602-.985A1.649 1.649 0 0 0 20.629 16Z"></path>
    <path d="M12 22.5a3.753 3.753 0 0 0 3.303-1.975.187.187 0 0 0-.074-.25.187.187 0 0 0-.092-.025H8.866a.188.188 0 0 0-.167.275 3.753 3.753 0 0 0 3.302 1.975Z"></path>
  </svg>
);

export default NotificationSolid;
