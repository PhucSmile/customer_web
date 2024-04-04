import { z } from 'zod';
import { CommonConfigCategorySchema } from './CommonConfigCategorySchema';
import { BaseSchema } from '../BaseSchema';

export const CommonConfigSchema = BaseSchema.extend({
  notification: z.object({
    categories: z.array(CommonConfigCategorySchema).optional(),
  }),
});

export type CommonConfigType = z.infer<typeof CommonConfigSchema>;
