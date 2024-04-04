import { z } from 'zod';
import { BaseSchema, BaseTreeType } from '@/schemas/BaseSchema';
import {
  RequiredString,
  NonNegativeNumber,
  RequiredBoolean,
  OptionalString,
} from '../../utils/zodUtils';
export const FunctionSchema = BaseSchema.extend({
  code: RequiredString,
  name: RequiredString,
  ordering: NonNegativeNumber,
  active: RequiredBoolean,
});

export type FunctionType = z.infer<typeof FunctionSchema>;

export const AddFunctionSchema = FunctionSchema.extend({
  id: OptionalString,
});
export type AddFunctionType = z.infer<typeof AddFunctionSchema>;

export const TreeFunctionSchema = FunctionSchema.extend({
  id: OptionalString,
  children: z.lazy(() => FunctionSchema.array().optional()),
});

export type TreeFunctionType = BaseTreeType<FunctionType>; //z.infer<typeof TreeFunctionSchema>;
