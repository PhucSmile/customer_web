import { RequiredString, RequiredEmail, RequiredPhone } from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';

export const UserSelfInfoSchema = BaseSchema.omit({
  code: true,
  master_id: true,
  master_name: true,
}).extend({
  username: RequiredString,
  email: RequiredEmail,
  phone: RequiredPhone,
});

export type UserSelfInfoType = z.infer<typeof UserSelfInfoSchema>;
