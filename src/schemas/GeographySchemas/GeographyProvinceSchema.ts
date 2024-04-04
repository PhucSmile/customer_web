import { RequiredString, NonNegativeIntegerNumber } from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';

export const GeographyProvinceSchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
}).extend({
  ordering: NonNegativeIntegerNumber,
});

export type GeographyProvinceType = z.infer<typeof GeographyProvinceSchema>;
