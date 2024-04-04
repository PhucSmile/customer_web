import { BaseSchema } from '@/schemas/BaseSchema';
import { z } from 'zod';

export const SalePlanRegisterStatusSchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
});

export type SalePlanRegisterStatusType = z.infer<
  typeof SalePlanRegisterStatusSchema
>;
