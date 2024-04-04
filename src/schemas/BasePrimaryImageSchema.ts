import { OptionalString, OptionalUUID } from '@/utils/zodUtils';
import { z } from 'zod';

export const BasePrimaryImageSchema = z.object({
  album_id: OptionalUUID,
  primary_image_id: OptionalUUID,
  primary_image_blur_hash: OptionalString,
  primary_image_dominant_color_code: OptionalString,
  primary_image_url: OptionalString,
});

export type BasePrimaryImageType = z.infer<typeof BasePrimaryImageSchema>;
