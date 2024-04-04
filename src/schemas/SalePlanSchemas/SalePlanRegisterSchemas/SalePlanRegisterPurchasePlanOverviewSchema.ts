import {
  NonNegativeIntegerNumber,
  OptionalString,
  RequiredDate,
  RequiredString,
  RequiredUUID,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const SalePlanRegisterPurchasePlanOverviewSchema = z.object({
  plan_overview: z.object({
    register_id: RequiredUUID,
    plan_id: RequiredUUID,
    plan_name: OptionalString,
    total_packages: NonNegativeIntegerNumber,
    valid_from_date: RequiredDate,
    valid_to_date: RequiredDate,
  }),
  first_package_delivery: z.object({
    register_schedule_id: RequiredUUID,
    register_id: RequiredUUID,
    package_number: NonNegativeIntegerNumber,
    combo_id: RequiredUUID,
    combo_name: OptionalString,
    delivery_date: RequiredDate,
    customer_address_id: RequiredUUID,
    customer_address_alias: OptionalString,
    customer_address_line1: OptionalString,
    customer_address_line2: OptionalString,
  }),
});

export type SalePlanRegisterPurchasePlanOverviewType = z.infer<
  typeof SalePlanRegisterPurchasePlanOverviewSchema
>;
