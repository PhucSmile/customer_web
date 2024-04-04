import {
  NullableUUID,
  OptionalString,
  OptionalUUID,
  RequiredString,
  RequiredUUID,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const BaseSchema = z.object({
  id: RequiredUUID,
  code: RequiredString,
  name: RequiredString,
  master_id: NullableUUID,
  master_name: OptionalString,
});

export type BaseType = z.infer<typeof BaseSchema>;

export type BaseTreeType<T extends BaseType> = T & {
  name?: string;
  children?: BaseTreeType<T>[];
};
