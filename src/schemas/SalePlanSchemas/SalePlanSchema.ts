import {
  OptionalString,
  NonNegativeIntegerNumber,
  NonNegativeNumber,
  RequiredUUID,
} from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';
import { BasePrimaryImageSchema } from '../BasePrimaryImageSchema';

export const SalePlanSchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
}).extend({
  ordering: NonNegativeIntegerNumber,
  description: OptionalString,
  price: NonNegativeNumber,
  schedule_id: RequiredUUID,
  album_id: RequiredUUID,
  primary_image: BasePrimaryImageSchema,
  categories: z.array(RequiredUUID).optional(),
});

export type SalePlanType = z.infer<typeof SalePlanSchema>;
