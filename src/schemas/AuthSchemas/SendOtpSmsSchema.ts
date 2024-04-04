import { RequiredPhone } from '@/utils/zodUtils';
import { z } from 'zod';

export const SendOtpSmsSchema = z.object({
  phone: RequiredPhone,
});

export type SendOtpSmsType = z.infer<typeof SendOtpSmsSchema>;
