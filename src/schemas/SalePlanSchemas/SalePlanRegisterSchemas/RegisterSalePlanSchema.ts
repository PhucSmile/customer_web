import {
  NonNegativeIntegerNumber,
  NonNegativeNumber,
  RequiredString,
  RequiredUUID,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const RegisterSalePlanResponseSchema = z.object({
  plan_register_id: RequiredUUID,
  plan_id: RequiredUUID,
  plan_name: RequiredString,
  unused: NonNegativeIntegerNumber,
  confirmed: NonNegativeIntegerNumber,
  price: NonNegativeNumber,
});

export type RegisterSalePlanResponseType = z.infer<
  typeof RegisterSalePlanResponseSchema
>;

export const RegisterSalePlanRequestSchema = z.object({
  plan_register_draft_id: RequiredUUID,
});

export type RegisterSalePlanRequestType = z.infer<
  typeof RegisterSalePlanRequestSchema
>;
