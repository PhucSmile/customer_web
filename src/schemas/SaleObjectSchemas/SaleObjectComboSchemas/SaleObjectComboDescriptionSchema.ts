import { OptionalString, NonNegativeNumber } from '@/utils/zodUtils';
import { BaseSchema } from '../../BaseSchema';
import { z } from 'zod';

export const SaleObjectComboDescriptionSchema = BaseSchema.omit({
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

export type SaleObjectComboDescriptionType = z.infer<
  typeof SaleObjectComboDescriptionSchema
>;
