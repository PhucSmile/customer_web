import { NonNegativeNumber } from '@/utils/zodUtils';
import { z } from 'zod';

export const GeographyCoordinatesSchema = z.object({
  latitude: NonNegativeNumber,
  longitude: NonNegativeNumber,
});

export type GeographyCoordinatesType = z.infer<
  typeof GeographyCoordinatesSchema
>;
