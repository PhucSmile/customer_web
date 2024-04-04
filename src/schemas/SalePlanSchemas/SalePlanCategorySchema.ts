import { z } from 'zod';
import { BaseSchema } from '../BaseSchema';

export const SalePlanCategorySchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
});

export type SalePlanCategoryType = z.infer<typeof SalePlanCategorySchema>;
