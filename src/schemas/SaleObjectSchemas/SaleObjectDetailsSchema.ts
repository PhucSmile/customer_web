import {
  OptionalString,
  NonNegativeIntegerNumber,
  NonNegativeNumber,
  RequiredBoolean,
  RequiredUUID,
  RequiredString,
} from '@/utils/zodUtils';
import { z } from 'zod';
import { BaseSchema } from '../BaseSchema';
import { BasePrimaryImageSchema } from '../BasePrimaryImageSchema';

export const SaleObjectDetailsSchema = BaseSchema.omit({
  code: true,
  name: true,
  master_id: true,
  master_name: true,
}).extend({
  master_object_id: RequiredUUID,
  master_object_name: OptionalString,
  object_id: RequiredUUID,
  object_name: OptionalString,
  object_qty: NonNegativeIntegerNumber,
  net_weight: NonNegativeNumber,
  unit_name: OptionalString,
  ordering: NonNegativeIntegerNumber,
  album_id: RequiredUUID,
  primary_image: BasePrimaryImageSchema,
});

export type SaleObjectDetailsType = z.infer<typeof SaleObjectDetailsSchema>;
