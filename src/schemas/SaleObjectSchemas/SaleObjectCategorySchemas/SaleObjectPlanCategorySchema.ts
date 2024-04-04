import {
  OptionalString,
  NonNegativeIntegerNumber,
  RequiredUUID,
  NonNegativeNumber,
} from '@/utils/zodUtils';
import { z } from 'zod';
import { BaseSchema } from '../../BaseSchema';
import { BasePrimaryImageSchema } from '@/schemas/BasePrimaryImageSchema';

export const SaleObjectPlanCategorySchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
}).extend({
  description: OptionalString,
  price: NonNegativeNumber,
  schedule_id: RequiredUUID,
  ordering: NonNegativeIntegerNumber,
  album_id: RequiredUUID,
  primary_image: BasePrimaryImageSchema,
  categories: z.array(RequiredUUID).optional(),
});

export type SaleObjectPlanCategoryType = z.infer<
  typeof SaleObjectPlanCategorySchema
>;
