import {
  OptionalString,
  NonNegativeIntegerNumber,
  RequiredBoolean,
  RequiredUUID,
  NonNegativeNumber,
} from '@/utils/zodUtils';
import { z } from 'zod';
import { BaseSchema } from '../../BaseSchema';
import { BasePrimaryImageSchema } from '@/schemas/BasePrimaryImageSchema';

export const SaleObjectComboCategorySchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
}).extend({
  type_id: RequiredUUID,
  type_name: OptionalString,
  ordering: NonNegativeIntegerNumber,
  active: RequiredBoolean,
  description: OptionalString,
  unit_name: OptionalString,
  net_weight: NonNegativeNumber,
  price: NonNegativeNumber,
  original_price: NonNegativeNumber,
  album_id: RequiredUUID,
  primary_image: BasePrimaryImageSchema,
  categories: z.array(RequiredUUID).optional(),
});

export type SaleObjectComboCategoryType = z.infer<
  typeof SaleObjectComboCategorySchema
>;
