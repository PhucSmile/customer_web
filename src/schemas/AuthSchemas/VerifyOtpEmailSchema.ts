import { RequiredString, RequiredEmail, RequiredUUID } from '@/utils/zodUtils';
import { z } from 'zod';

export const VerifyOtpEmailSchema = z.object({
  otp_id: RequiredUUID,
  otp_code: RequiredString,
  email: RequiredEmail,
});

export type VerifyOtpEmailType = z.infer<typeof VerifyOtpEmailSchema>;
