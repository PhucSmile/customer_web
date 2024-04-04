import {
  OptionalString,
  NonNegativeIntegerNumber,
  NonNegativeNumber,
  RequiredUUID,
  RequiredString,
} from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';

export const SalePlanDetailsSchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
}).extend({
  ordering: NonNegativeIntegerNumber,
  description: OptionalString,
  price: NonNegativeNumber,
  schedule_id: RequiredUUID,
  album_id: RequiredUUID,
  image_url: RequiredString,
});

export type SalePlanDetailsType = z.infer<typeof SalePlanDetailsSchema>;
