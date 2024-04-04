import { FC, SVGProps, useState } from 'react';
import { motion } from 'framer-motion';
import BagAddLine from '@/components/SvgComponents/line/BagAddLine';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type DataPropType = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  menus: string[];
};

export const SubMenu: FC<DataPropType> = (data) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        className={`link ${pathname.includes(data.name) && 'text-blue-600'}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <data.icon className="min-w-max w-5 h-5" />
        <p className="flex-1 capitalize">{data.name}</p>
        <BagAddLine
          className={`w-5 h-5 ${subMenuOpen && 'rotate-180'} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: 'fit-content',
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
      >
        {data?.menus?.map((menu) => (
          <li key={menu}>
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <Link
              href={`/${data.name}/${menu}`}
              className="link !bg-transparent capitalize"
            >
              {menu}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
};
