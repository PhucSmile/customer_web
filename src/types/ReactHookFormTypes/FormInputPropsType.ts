import { variant } from '@/components/MaterialTailwind/types/input';
import { colors } from '@material-tailwind/react/types/generic';

export type FormInputPropsType = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  variant?: variant;
  color?: colors;
};
