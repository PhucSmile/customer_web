import {
  OptionalString,
  NonNegativeNumber,
  RequiredUUID,
} from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';
import { BasePrimaryImageSchema } from '../BasePrimaryImageSchema';

export const SalePlanComboDetailsSchema = BaseSchema.omit({
  id: true,
  code: true,
  name: true,
  master_id: true,
  master_name: true,
}).extend({
  combo_id: RequiredUUID,
  combo_code: OptionalString,
  combo_name: OptionalString,
  album_id: RequiredUUID,
  primary_image: BasePrimaryImageSchema,
  details: z.array(
    z.object({
      object_id: RequiredUUID,
      code: OptionalString,
      object_name: OptionalString,
      object_qty: NonNegativeNumber,
      net_weight: NonNegativeNumber,
      unit_name: OptionalString,
      album_id: RequiredUUID,
      primary_image: BasePrimaryImageSchema,
    }),
  ),
});

export type SalePlanComboDetailsType = z.infer<
  typeof SalePlanComboDetailsSchema
>;
