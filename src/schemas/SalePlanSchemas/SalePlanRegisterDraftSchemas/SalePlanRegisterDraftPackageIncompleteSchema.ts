import {
  RequiredString,
  NonNegativeNumber,
  RequiredDate,
  RequiredUUID,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const SalePlanRegisterDraftPackageIncompleteSchema = z.object({
  plan_register_draft_id: RequiredUUID,
  plan_id: RequiredUUID,
  plan_name: RequiredString,
  expire: RequiredDate,
  unused: NonNegativeNumber,
  confirmed: NonNegativeNumber,
});

export type SalePlanRegisterDraftPackageIncompleteType = z.infer<
  typeof SalePlanRegisterDraftPackageIncompleteSchema
>;
