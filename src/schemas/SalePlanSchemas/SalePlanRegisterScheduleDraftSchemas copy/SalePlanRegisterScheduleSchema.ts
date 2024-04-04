import { z } from 'zod';
import { RequiredBoolean, RequiredDate, RequiredUUID } from '@/utils/zodUtils';

export const SalePlanRegisterScheduleSchema = z.object({
  id: RequiredUUID,
  combo_id: RequiredUUID,
  is_confirm: RequiredBoolean,
  delivery_date: RequiredDate,
  customer_address_id: RequiredUUID,
});

export type SalePlanRegisterScheduleType = z.infer<
  typeof SalePlanRegisterScheduleSchema
>;
