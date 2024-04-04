import {
  OptionalString,
  NonNegativeNumber,
  OptionalArray,
} from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';

export const SalePlanDescriptionSchema = BaseSchema.omit({
  code: true,
  name: true,
  master_id: true,
  master_name: true,
}).extend({
  servings: NonNegativeNumber,
  extra_info_instance: z.object({
    benefits: z.array(OptionalString),
    categories: z.array(OptionalString),
  }),
});

export type SalePlanDescriptionType = z.infer<typeof SalePlanDescriptionSchema>;
