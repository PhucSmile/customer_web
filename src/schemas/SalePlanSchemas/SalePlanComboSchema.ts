import {
  OptionalString,
  NonNegativeIntegerNumber,
  RequiredUUID,
} from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';

export const SalePlanComboSchema = BaseSchema.omit({
  code: true,
  name: true,
  master_id: true,
  master_name: true,
}).extend({
  plan_id: RequiredUUID,
  plan_name: OptionalString,
  object_id: RequiredUUID,
  object_name: OptionalString,
  ordering: NonNegativeIntegerNumber,
});

export type SalePlanComboType = z.infer<typeof SalePlanComboSchema>;
