import { BaseSchema } from '@/schemas/BaseSchema';
import {
  OptionalString,
  NonNegativeIntegerNumber,
  RequiredUUID,
  RequiredBoolean,
  OptionalUUID,
  RequiredString,
  RequiredPhone,
  NonNegativeNumber,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const UserAddressSchema = BaseSchema.omit({
  code: true,
  name: true,
  master_id: true,
  master_name: true,
}).extend({
  province_id: RequiredUUID,
  province_name: OptionalString,
  province_short_name: OptionalString,
  district_id: RequiredUUID,
  district_name: OptionalString,
  district_short_name: OptionalString,
  ward_id: RequiredUUID,
  ward_name: OptionalString,
  ward_short_name: OptionalString,
  type_id: RequiredUUID,
  alias: RequiredString,
  line1: RequiredString,
  line2: OptionalString,
  ordering: NonNegativeIntegerNumber,
  latitude: NonNegativeNumber,
  longitude: NonNegativeNumber,
  is_default: RequiredBoolean,
  user_id: RequiredUUID,
  person_name: RequiredString,
  phone: RequiredPhone,
});

export type UserAddressType = z.infer<typeof UserAddressSchema>;

export const AddUserAddressSchema = UserAddressSchema.extend({
  id: OptionalUUID,
});

export type AddUserAddressType = z.infer<typeof AddUserAddressSchema>;
