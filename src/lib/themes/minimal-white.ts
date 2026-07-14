import type { ThemePreset } from '@/types/theme';

export const minimalWhite: ThemePreset = {
  name: 'minimal-white',
  label: 'Minimal White',
  colors: {
    primary: '#2D2D2D',
    secondary: '#FFFFFF',
    accent: '#A0A0A0',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#2D2D2D',
    textMuted: '#707070',
    border: '#E0E0E0',
    overlay: 'rgba(255, 255, 255, 0.8)',
    gradient1: '#2D2D2D',
    gradient2: '#707070',
  },
  fonts: {
    heading: 'var(--font-heading-alt)',
    body: 'var(--font-body-alt)',
    script: 'var(--font-script-alt)',
  },
  effects: {
    particleType: 'none',
    glassEffect: false,
    parallaxIntensity: 0.1,
    animationStyle: 'minimal',
  },
  decorations: {
    dividerStyle: 'minimal',
    cardStyle: 'outlined',
    borderRadius: '8px',
  },
};
