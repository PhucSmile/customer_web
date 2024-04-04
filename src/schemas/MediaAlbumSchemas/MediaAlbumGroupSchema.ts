import {
  NonNegativeIntegerNumber,
  RequiredBoolean,
  RequiredString,
  RequiredUUID,
} from '@/utils/zodUtils';
import { z } from 'zod';

export const MediaAlbumGroupSchema = z.object({
  id: RequiredUUID,
  ordering: NonNegativeIntegerNumber,
  code: RequiredString,
  name: RequiredString,
  active: RequiredBoolean,
});

export type MediaAlbumGroupType = z.infer<typeof MediaAlbumGroupSchema>;
