import { RequiredPhone } from '@/utils/zodUtils';
import { z } from 'zod';

export const SelfUpdatePhoneSchema = z.object({
  phone: RequiredPhone,
});

export type SelfUpdatePhoneType = z.infer<typeof SelfUpdatePhoneSchema>;
