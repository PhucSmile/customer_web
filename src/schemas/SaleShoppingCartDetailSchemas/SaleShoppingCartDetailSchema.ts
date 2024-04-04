import {
  OptionalString,
  NonNegativeIntegerNumber,
  RequiredUUID,
  NonNegativeNumber,
  OptionalUUID,
} from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';

export const SaleShoppingCartDetailSchema = BaseSchema.omit({
  code: true,
  name: true,
  master_id: true,
  master_name: true,
}).extend({
  customer_user_id: OptionalUUID,
  ordering: NonNegativeIntegerNumber,
  object_id: RequiredUUID,
  object_name: OptionalString,
  object_qty: NonNegativeIntegerNumber,
  object_unit_price: NonNegativeNumber,
  object_image: OptionalString,
});

export type SaleShoppingCartDetailType = z.infer<
  typeof SaleShoppingCartDetailSchema
>;
