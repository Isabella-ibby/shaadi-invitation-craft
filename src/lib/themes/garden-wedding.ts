import type { ThemePreset } from '@/types/theme';

export const gardenWedding: ThemePreset = {
  name: 'garden-wedding',
  label: 'Garden Wedding',
  colors: {
    primary: '#2D5016',
    secondary: '#FFB6C1',
    accent: '#E6E6FA',
    background: '#FAF0E6',
    surface: '#FFFFFF',
    text: '#1C300E',
    textMuted: '#5C734D',
    border: '#EBE1D7',
    overlay: 'rgba(45, 80, 22, 0.8)',
    gradient1: '#2D5016',
    gradient2: '#FFB6C1',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
    script: 'var(--font-script)',
  },
  effects: {
    particleType: 'petals',
    glassEffect: false,
    parallaxIntensity: 0.2,
    animationStyle: 'elegant',
  },
  decorations: {
    dividerStyle: 'floral',
    cardStyle: 'solid',
    borderRadius: '12px',
  },
};
