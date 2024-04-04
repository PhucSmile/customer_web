import { RequiredBoolean, RequiredUUID } from '@/utils/zodUtils';
import { z } from 'zod';

export const RegisterSalePlanDraftStatusDateSchema = z.object({
  register_draft_id: RequiredUUID,
  is_success: RequiredBoolean,
});

export type RegisterSalePlanDraftStatusDateType = z.infer<
  typeof RegisterSalePlanDraftStatusDateSchema
>;
