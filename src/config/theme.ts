import themeData from '@/data/theme.json';
import { getThemePreset } from '@/lib/themes';
import type { ThemePreset, ThemeConfig } from '@/types/theme';

const config: ThemeConfig = themeData as ThemeConfig;

/** Deep merge two objects */
function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(
        (target[key] || {}) as Record<string, unknown>,
        source[key] as Record<string, unknown>
      ) as T[typeof key];
    } else if (source[key] !== undefined) {
      result[key] = source[key] as T[typeof key];
    }
  }
  return result;
}

/** Resolved theme preset with custom overrides applied */
export const themeConfig: ThemePreset = deepMerge(
  getThemePreset(config.preset),
  (config.customOverrides || {}) as Partial<ThemePreset>
);

/** Generate CSS custom property declarations from the theme */
export function getThemeCSSVariables(): Record<string, string> {
  return {
    '--color-primary': themeConfig.colors.primary,
    '--color-secondary': themeConfig.colors.secondary,
    '--color-accent': themeConfig.colors.accent,
    '--color-background': themeConfig.colors.background,
    '--color-surface': themeConfig.colors.surface,
    '--color-text': themeConfig.colors.text,
    '--color-text-muted': themeConfig.colors.textMuted,
    '--color-border': themeConfig.colors.border,
    '--color-overlay': themeConfig.colors.overlay,
    '--color-gradient1': themeConfig.colors.gradient1,
    '--color-gradient2': themeConfig.colors.gradient2,
    '--font-heading': themeConfig.fonts.heading,
    '--font-body': themeConfig.fonts.body,
    '--font-script': themeConfig.fonts.script,
  };
}
