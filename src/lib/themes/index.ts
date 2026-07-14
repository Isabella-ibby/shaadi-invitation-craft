import type { ThemePreset } from '@/types/theme';
import { luxuryGold } from './luxury-gold';
import { royalPalace } from './royal-palace';
import { minimalWhite } from './minimal-white';
import { classicFloral } from './classic-floral';
import { darkLuxury } from './dark-luxury';
import { traditionalIndian } from './traditional-indian';
import { southIndian } from './south-indian';
import { christian } from './christian';
import { muslim } from './muslim';
import { destinationWedding } from './destination-wedding';
import { beachWedding } from './beach-wedding';
import { gardenWedding } from './garden-wedding';

export const themes: Record<string, ThemePreset> = {
  'luxury-gold': luxuryGold,
  'royal-palace': royalPalace,
  'minimal-white': minimalWhite,
  'classic-floral': classicFloral,
  'dark-luxury': darkLuxury,
  'traditional-indian': traditionalIndian,
  'south-indian': southIndian,
  'christian': christian,
  'muslim': muslim,
  'destination-wedding': destinationWedding,
  'beach-wedding': beachWedding,
  'garden-wedding': gardenWedding,
};

export function getThemePreset(name: string): ThemePreset {
  return themes[name] || luxuryGold;
}
