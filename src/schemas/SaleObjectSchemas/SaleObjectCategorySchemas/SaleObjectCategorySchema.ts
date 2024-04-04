import { NonNegativeIntegerNumber, RequiredBoolean } from '@/utils/zodUtils';
import { z } from 'zod';
import { BaseSchema } from '../../BaseSchema';

export const SaleObjectCategorySchema = BaseSchema.omit({
  master_name: true,
}).extend({
  ordering: NonNegativeIntegerNumber,
  active: RequiredBoolean,
});

export type SaleObjectCategoryType = z.infer<typeof SaleObjectCategorySchema>;
