import type { ThemePreset } from '@/types/theme';

export const traditionalIndian: ThemePreset = {
  name: 'traditional-indian',
  label: 'Traditional Indian',
  colors: {
    primary: '#C41E3A',
    secondary: '#FFD700',
    accent: '#DAA520',
    background: '#FFF8DC',
    surface: '#FFFFFF',
    text: '#3E0A12',
    textMuted: '#8A3A42',
    border: '#E8D4A2',
    overlay: 'rgba(196, 30, 58, 0.8)',
    gradient1: '#C41E3A',
    gradient2: '#FFD700',
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
    borderRadius: '16px',
  },
};
