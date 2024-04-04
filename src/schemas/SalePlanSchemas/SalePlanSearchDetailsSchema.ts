import {
  OptionalString,
  NonNegativeIntegerNumber,
  RequiredUUID,
  RequiredString,
  RequiredBoolean,
  NonNegativeNumber,
} from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';
import { BasePrimaryImageSchema } from '../BasePrimaryImageSchema';

export const SalePlanSearchDetailsSchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
}).extend({
  ordering: NonNegativeIntegerNumber,
  description: OptionalString,
  price: NonNegativeNumber,
  schedule_id: RequiredUUID,
  album_id: RequiredUUID,
  primary_image: BasePrimaryImageSchema,
});

export type SalePlanSearchDetailsType = z.infer<
  typeof SalePlanSearchDetailsSchema
>;

export const SalePlanSearchSchema = z.object({
  query: RequiredString,
});

export type SalePlanSearchType = z.infer<typeof SalePlanSearchSchema>;
