import { RequiredString, RequiredPhone, RequiredUUID } from '@/utils/zodUtils';
import { z } from 'zod';

export const VerifyOtpSmsSchema = z.object({
  otp_id: RequiredUUID,
  otp_code: RequiredString,
  phone: RequiredPhone,
});

export type VerifyOtpSmsType = z.infer<typeof VerifyOtpSmsSchema>;
