import { RequiredUUID } from '@/utils/zodUtils';
import { z } from 'zod';

export const RegisterSalePlanDraftSchema = z.object({
  plan_id: RequiredUUID,
});

export type RegisterSalePlanDraftType = z.infer<
  typeof RegisterSalePlanDraftSchema
>;
