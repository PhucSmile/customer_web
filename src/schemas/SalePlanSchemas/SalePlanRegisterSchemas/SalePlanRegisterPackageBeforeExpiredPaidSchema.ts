import {
  NonNegativeIntegerNumber,
  RequiredString,
  RequiredUUID,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const SalePlanRegisterPackageBeforeExpiredPaidSchema = z.object({
  register_id: RequiredUUID,
  plan_id: RequiredUUID,
  plan_name: RequiredString,
  unconfirm: NonNegativeIntegerNumber,
});

export type SalePlanRegisterPackageBeforeExpiredPaidType = z.infer<
  typeof SalePlanRegisterPackageBeforeExpiredPaidSchema
>;
