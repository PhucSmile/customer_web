import { z } from 'zod';
import {
  OptionalUUID,
  RequiredBoolean,
  NonNegativeIntegerNumber,
  RequiredUUID,
  OptionalString,
} from '@/utils/zodUtils';
import { BaseSchema } from '@/schemas/BaseSchema';

export const MediaAlbumSchema = BaseSchema.omit({
  code: true,
  master_name: true,
}).extend({
  ordering: NonNegativeIntegerNumber,
  active: RequiredBoolean,
  album_group_id: RequiredUUID,
  root_id: OptionalUUID,
  current_secret_key: OptionalUUID,
  primary_image_id: OptionalString,
  primary_image_blur_hash: OptionalString,
  primary_image_dominant_color_code: OptionalString,
  primary_image_url: OptionalString,
});

export type MediaAlbumType = z.infer<typeof MediaAlbumSchema>;

export const AddMediaAlbumSchema = MediaAlbumSchema.extend({
  id: OptionalUUID,
});

export type AddMediaAlbumType = z.infer<typeof AddMediaAlbumSchema>;
