import { RequiredDate, RequiredString, RequiredUUID } from '@/utils/zodUtils';
import { z } from 'zod';

export const SalePlanRegisterNextShipmentSchema = z.object({
  register_schedule_id: RequiredUUID,
  register_id: RequiredUUID,
  plan_id: RequiredUUID,
  plan_name: RequiredString,
  combo_id: RequiredUUID,
  combo_name: RequiredString,
  delivery_date: RequiredDate,
  customer_address_id: RequiredUUID,
});

export type SalePlanRegisterNextShipmentType = z.infer<
  typeof SalePlanRegisterNextShipmentSchema
>;
