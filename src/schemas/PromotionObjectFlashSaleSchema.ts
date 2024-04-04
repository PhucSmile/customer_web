import {
  OptionalString,
  NonNegativeIntegerNumber,
  NonNegativeNumber,
  RequiredBoolean,
  RequiredDate,
  RequiredUUID,
} from '@/utils/zodUtils';
import { BaseSchema } from './BaseSchema';
import { z } from 'zod';

export const PromotionObjectFlashSaleSchema = BaseSchema.omit({
  master_id: true,
  master_name: true,
  name: true,
  code: true,
}).extend({
  ordering: NonNegativeIntegerNumber,
  promotion_id: RequiredUUID,
  promotion_name: OptionalString,
  object_id: RequiredUUID,
  object_name: OptionalString,
  original_price: NonNegativeNumber,
  price: NonNegativeNumber,
  quota_qty: NonNegativeIntegerNumber,
  quota_amount: NonNegativeNumber,
  from_date_time: RequiredDate,
  to_date_time: RequiredDate,
});

export type PromotionObjectFlashSaleType = z.infer<
  typeof PromotionObjectFlashSaleSchema
>;
