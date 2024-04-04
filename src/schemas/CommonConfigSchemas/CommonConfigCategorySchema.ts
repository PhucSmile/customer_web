import { z } from 'zod';
import { CommonConfigTopicSchema } from './CommonConfigTopicSchema';
import {
  OptionalString,
  RequiredString,
  NonNegativeIntegerNumber,
} from '@/utils/zodUtils';
import { BaseSchema } from '../BaseSchema';

export const CommonConfigCategorySchema = BaseSchema.extend({
  ordering: NonNegativeIntegerNumber,
  title: RequiredString,
  description: OptionalString,
  icon: OptionalString,
  topics: z.array(CommonConfigTopicSchema).optional(),
});

export type CommonConfigCategoryType = z.infer<
  typeof CommonConfigCategorySchema
>;
