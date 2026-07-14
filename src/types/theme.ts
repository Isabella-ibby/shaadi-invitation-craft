export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  overlay: string;
  gradient1: string;
  gradient2: string;
}

export interface ThemeFonts {
  heading: string;
  body: string;
  script: string;
}

export interface ThemeEffects {
  particleType: 'gold' | 'petals' | 'fireflies' | 'stars' | 'snow' | 'none';
  glassEffect: boolean;
  parallaxIntensity: number;
  animationStyle: 'elegant' | 'playful' | 'minimal' | 'dramatic';
}

export interface ThemeDecorations {
  dividerStyle: 'ornate' | 'floral' | 'geometric' | 'minimal' | 'none';
  cardStyle: 'glass' | 'solid' | 'outlined' | 'elevated';
  borderRadius: string;
}

export interface ThemePreset {
  name: string;
  label: string;
  colors: ThemeColors;
  fonts: ThemeFonts;
  effects: ThemeEffects;
  decorations: ThemeDecorations;
}

export interface ThemeConfig {
  preset: string;
  customOverrides?: Partial<ThemePreset>;
}
