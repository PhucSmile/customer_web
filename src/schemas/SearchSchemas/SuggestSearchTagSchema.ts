import { OptionalString, RequiredString, RequiredUUID } from '@/utils/zodUtils';
import { z } from 'zod';

export const SuggestSearchTagSchema = z.object({
  linking_id: RequiredUUID,
  tag_id: RequiredUUID,
  tag_name: RequiredString,
});

export type SuggestSearchTagType = z.infer<typeof SuggestSearchTagSchema>;

export const GetSuggestSearchTagSchema = z.object({
  keyword: OptionalString,
  scope_id: RequiredUUID,
});

export type GetSuggestSearchTagType = z.infer<typeof GetSuggestSearchTagSchema>;
