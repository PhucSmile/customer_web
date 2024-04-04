import { z } from 'zod';
import {
  RequiredUUID,
  OptionalUUID,
  OptionalString,
  RequiredBoolean,
  NonNegativeIntegerNumber,
  RequiredString,
} from '@/utils/zodUtils';
import { BaseSchema } from '@/schemas/BaseSchema';

export const MediaAlbumDetailSchema = BaseSchema.omit({
  code: true,
  master_id: true,
  master_name: true,
}).extend({
  ordering: NonNegativeIntegerNumber,
  name: RequiredString,
  description: OptionalString,
  active: RequiredBoolean,
  album_id: OptionalUUID,
  content_type_id: OptionalUUID,
  url: OptionalString,
  blur_hash: OptionalString,
  dominant_color_code: OptionalString,
  width: OptionalString,
  height: OptionalString,
});

export type MediaAlbumDetailType = z.infer<typeof MediaAlbumDetailSchema>;

export const AddMediaAlbumDetailSchema = MediaAlbumDetailSchema.extend({
  id: OptionalUUID,
});

export type AddMediaAlbumDetailType = z.infer<typeof AddMediaAlbumDetailSchema>;

export const UploadMediaAlbumDetailFileSchema = z.object({
  album_id: RequiredUUID,
  album_secret_key: RequiredUUID,
  file: z.instanceof(File),
});

export type UploadMediaAlbumDetailFileType = z.infer<
  typeof UploadMediaAlbumDetailFileSchema
>;

export const UploadMultipleMediaAlbumDetailFileSchema = z.object({
  album_id: RequiredUUID,
  album_secret_key: RequiredUUID,
  files: z.array(z.instanceof(File)),
});

export type UploadMultipleMediaAlbumDetailFileType = z.infer<
  typeof UploadMultipleMediaAlbumDetailFileSchema
>;
