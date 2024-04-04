import {
  OptionalString,
  RequiredString,
  NonNegativeIntegerNumber,
  RequiredUUID,
} from '@/utils/zodUtils';
import { z } from 'zod';
import { BaseSchema } from '../BaseSchema';

export const CommonConfigTopicSchema = BaseSchema.extend({
  ordering: NonNegativeIntegerNumber,
  category_id: RequiredUUID,
  title: RequiredString,
  description: OptionalString,
  icon: OptionalString,
  images: z.array(OptionalString).optional(),
});

export type CommonConfigTopicType = z.infer<typeof CommonConfigTopicSchema>;
