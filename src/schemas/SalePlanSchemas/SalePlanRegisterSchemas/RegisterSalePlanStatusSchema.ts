import { RequiredBoolean, RequiredUUID } from '@/utils/zodUtils';
import { z } from 'zod';

export const RegisterSalePlanStatusSchema = z.object({
  register_id: RequiredUUID,
  register_draft_id: RequiredUUID,
  is_success: RequiredBoolean,
});

export type RegisterSalePlanStatusType = z.infer<
  typeof RegisterSalePlanStatusSchema
>;
