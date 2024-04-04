import { OptionalString, NonNegativeNumber } from '@/utils/zodUtils';
import { BaseSchema } from '../../BaseSchema';
import { z } from 'zod';

export const SaleObjectPackDescriptionSchema = BaseSchema.omit({
  code: true,
  name: true,
  master_id: true,
  master_name: true,
}).extend({
  servings: NonNegativeNumber,
  extra_info_instance: z.object({
    ingredients: z.array(OptionalString),
  }),
});

export type SaleObjectPackDescriptionType = z.infer<
  typeof SaleObjectPackDescriptionSchema
>;
