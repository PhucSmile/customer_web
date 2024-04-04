import {
  NonNegativeIntegerNumber,
  OptionalString,
  RequiredUUID,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const SalePlanRegisterDraftPackageBeforeExpiredDraftSchema = z.object({
  register_draft_id: RequiredUUID,
  plan_id: RequiredUUID,
  plan_name: OptionalString,
  unconfirm: NonNegativeIntegerNumber,
});

export type SalePlanRegisterDraftPackageBeforeExpiredDraftType = z.infer<
  typeof SalePlanRegisterDraftPackageBeforeExpiredDraftSchema
>;
