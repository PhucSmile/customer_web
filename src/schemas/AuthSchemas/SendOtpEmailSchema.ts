import {
  RequiredString,
  NonNegativeNumber,
  RequiredDate,
  RequiredEmail,
  RequiredUUID,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const SendOtpEmailSchema = z.object({
  email: RequiredEmail,
});

export const SendOtpEmailResponseSchema = z.object({
  id: RequiredUUID,
  expire_at: RequiredDate,
  size: NonNegativeNumber,
  type: RequiredString,
});

export type SendOtpEmailType = z.infer<typeof SendOtpEmailSchema>;

export type SendOtpEmailResponseType = z.infer<
  typeof SendOtpEmailResponseSchema
>;
