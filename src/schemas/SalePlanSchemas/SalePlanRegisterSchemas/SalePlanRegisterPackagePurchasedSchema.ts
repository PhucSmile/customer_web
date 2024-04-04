import {
  RequiredString,
  RequiredDate,
  RequiredUUID,
  NonNegativeIntegerNumber,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const SalePlanRegisterPackagePurchasedSchema = z.object({
  plan_register_id: RequiredUUID,
  plan_id: RequiredUUID,
  plan_name: RequiredString,
  expire: RequiredDate,
  unused: NonNegativeIntegerNumber,
  confirmed: NonNegativeIntegerNumber,
  delivered: NonNegativeIntegerNumber,
});

export type SalePlanRegisterPackagePurchasedType = z.infer<
  typeof SalePlanRegisterPackagePurchasedSchema
>;
