import { RequiredUUID } from '@/utils/zodUtils';
import { z } from 'zod';

export const RegisterSalePlanDraftCheckStaleDeliveryDateSchema = z.object({
  register_draft_id: RequiredUUID,
  plan_id: RequiredUUID,
});

export type RegisterSalePlanDraftCheckStaleDeliveryDateType = z.infer<
  typeof RegisterSalePlanDraftCheckStaleDeliveryDateSchema
>;
