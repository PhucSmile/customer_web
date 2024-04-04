import { RequiredString } from '@/utils/zodUtils';
import { z } from 'zod';

export const SelfUpdateNameSchema = z.object({
  name: RequiredString,
});

export type SelfUpdateNameType = z.infer<typeof SelfUpdateNameSchema>;
