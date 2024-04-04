import {
  OptionalString,
  NonNegativeIntegerNumber,
  RequiredUUID,
} from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';

export const GeographyWardSchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
}).extend({
  province_id: RequiredUUID,
  province_name: OptionalString,
  district_id: RequiredUUID,
  district_name: OptionalString,
  ordering: NonNegativeIntegerNumber,
});

export type GeographyWardType = z.infer<typeof GeographyWardSchema>;
