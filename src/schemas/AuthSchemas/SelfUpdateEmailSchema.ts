import { RequiredEmail } from '@/utils/zodUtils';
import { z } from 'zod';

export const SelfUpdateEmailSchema = z.object({
  email: RequiredEmail,
});

export type SelfUpdateEmailType = z.infer<typeof SelfUpdateEmailSchema>;
