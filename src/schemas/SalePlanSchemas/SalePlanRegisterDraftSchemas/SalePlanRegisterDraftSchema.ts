import {
  OptionalString,
  NonNegativeNumber,
  RequiredBoolean,
  RequiredDate,
  RequiredUUID,
  NonNegativeIntegerNumber,
} from '@/utils/zodUtils';
import { z } from 'zod';
import { BaseSchema } from '../../BaseSchema';

export const SalePlanRegisterDraftSchema = BaseSchema.omit({
  code: true,
  name: true,
  master_id: true,
  master_name: true,
}).extend({
  plan_register_draft_id: RequiredUUID,
  customer_address_id: RequiredUUID,
  customer_receiving_method_id: RequiredUUID,
  delivery_date: RequiredDate,
  package_number: NonNegativeNumber,
  combo_id: RequiredUUID,
  combo_name: OptionalString,
  object_qty: NonNegativeNumber,
  is_confirm: RequiredBoolean,
  customer_user_id: RequiredUUID,
  customer_user_name: OptionalString,
  valid_from_date: RequiredDate,
  valid_to_date: RequiredDate,
  price: NonNegativeNumber,
  plan_id: RequiredUUID,
  plan_name: OptionalString,
  config_days_of_usage: NonNegativeIntegerNumber,
  config_min_days_in_advance: NonNegativeIntegerNumber,
  config_max_days_in_advance: NonNegativeIntegerNumber,
});

export type SalePlanRegisterDraftType = z.infer<
  typeof SalePlanRegisterDraftSchema
>;
