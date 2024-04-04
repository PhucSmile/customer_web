import { NonNegativeNumber, RequiredUUID } from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';
import { z } from 'zod';

export const SaleObjectGetManyPricesSchema = BaseSchema.omit({
  id: true,
  code: true,
  name: true,
  master_id: true,
  master_name: true,
}).extend({
  id: RequiredUUID,
  price: NonNegativeNumber,
});

export type SaleObjectGetManyPricesType = z.infer<
  typeof SaleObjectGetManyPricesSchema
>;
