import {
  OptionalString,
  NonNegativeIntegerNumber,
  RequiredUUID,
  NonNegativeNumber,
} from '@/utils/zodUtils';
import { z } from 'zod';
import { BaseSchema } from '../../BaseSchema';
import { BasePrimaryImageSchema } from '@/schemas/BasePrimaryImageSchema';

export const SaleObjectPackCategorySchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
}).extend({
  type_id: RequiredUUID,
  type_name: OptionalString,
  ordering: NonNegativeIntegerNumber,
  description: OptionalString,
  unit_name: OptionalString,
  net_weight: NonNegativeNumber,
  price: NonNegativeNumber,
  original_price: NonNegativeNumber,
  album_id: RequiredUUID,
  primary_image: BasePrimaryImageSchema,
  categories: z.array(RequiredUUID).optional(),
});

export type SaleObjectPackCategoryType = z.infer<
  typeof SaleObjectPackCategorySchema
>;
