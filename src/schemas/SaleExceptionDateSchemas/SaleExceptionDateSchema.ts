import { RequiredBoolean, RequiredDate } from '@/utils/zodUtils';
import { z } from 'zod';
import { BaseSchema } from '../BaseSchema';

export const SaleExceptionDateSchema = BaseSchema.omit({
  code: true,
  master_id: true,
  master_name: true,
}).extend({
  day: RequiredDate,
  accepting_delivery: RequiredBoolean,
});

export type SaleExceptionDateType = z.infer<typeof SaleExceptionDateSchema>;
