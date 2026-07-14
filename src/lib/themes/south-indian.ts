import type { ThemePreset } from '@/types/theme';

export const southIndian: ThemePreset = {
  name: 'south-indian',
  label: 'South Indian',
  colors: {
    primary: '#DAA520',
    secondary: '#800020',
    accent: '#F8F8FF',
    background: '#FDFBF7',
    surface: '#FFFFFF',
    text: '#2A0800',
    textMuted: '#6B4C41',
    border: '#E6D5B8',
    overlay: 'rgba(128, 0, 32, 0.85)',
    gradient1: '#DAA520',
    gradient2: '#800020',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
    script: 'var(--font-script)',
  },
  effects: {
    particleType: 'gold',
    glassEffect: false,
    parallaxIntensity: 0.2,
    animationStyle: 'elegant',
  },
  decorations: {
    dividerStyle: 'ornate',
    cardStyle: 'solid',
    borderRadius: '8px',
  },
};
