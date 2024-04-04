import { checkEqual } from '@/utils/checkEqual';
import { RequiredBoolean, RequiredString } from '@/utils/zodUtils';
import { z } from 'zod';

export const SelfUpdatePasswordSchema = z
  .object({
    current_password: RequiredString,
    new_password: RequiredString,
    is_raw_string: RequiredBoolean,
  })
  .superRefine(({ current_password, new_password }, ctx) => {
    if (!checkEqual(current_password, new_password)) {
      ctx.addIssue({
        code: 'custom',
        path: ['mismatch_password'],
        message: 'The passwords did not match',
      });
    }
  });

export type SelfUpdatePasswordType = z.infer<typeof SelfUpdatePasswordSchema>;
