import {
  RequiredString,
  NonNegativeNumber,
  RequiredDate,
  RequiredUUID,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const SalePlanRegisterDraftOrderSummaryByPlanSchema = z.object({
  plan_register_draft_id: RequiredUUID,
  plan_id: RequiredUUID,
  plan_name: RequiredString,
  confirmed: NonNegativeNumber,
  unused: NonNegativeNumber,
  price: NonNegativeNumber,
});

export type SalePlanRegisterDraftOrderSummaryByPlanType = z.infer<
  typeof SalePlanRegisterDraftOrderSummaryByPlanSchema
>;
