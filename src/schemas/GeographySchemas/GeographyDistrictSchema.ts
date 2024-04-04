import {
  OptionalString,
  NonNegativeIntegerNumber,
  RequiredUUID,
} from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';

export const GeographyDistrictSchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
}).extend({
  province_id: RequiredUUID,
  province_name: OptionalString,
  ordering: NonNegativeIntegerNumber,
});

export type GeographyDistrictType = z.infer<typeof GeographyDistrictSchema>;
