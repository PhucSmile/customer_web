import { BasePrimaryImageSchema } from '@/schemas/BasePrimaryImageSchema';
import { BaseSchema } from '@/schemas/BaseSchema';
import {
  OptionalString,
  NonNegativeIntegerNumber,
  RequiredUUID,
  RequiredString,
  NonNegativeNumber,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const SaleObjectComboSearchDetailsSchema = BaseSchema.omit({
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

export type SaleObjectComboSearchDetailsType = z.infer<
  typeof SaleObjectComboSearchDetailsSchema
>;

export const SaleObjectComboSearchSchema = z.object({
  query: RequiredString,
});

export type SaleObjectComboSearchType = z.infer<
  typeof SaleObjectComboSearchSchema
>;
