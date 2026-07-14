import type { ThemePreset } from '@/types/theme';

export const muslim: ThemePreset = {
  name: 'muslim',
  label: 'Muslim / Nikah',
  colors: {
    primary: '#046307',
    secondary: '#D4AF37',
    accent: '#85C1E9',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#023004',
    textMuted: '#4CAF50',
    border: '#C8E6C9',
    overlay: 'rgba(4, 99, 7, 0.8)',
    gradient1: '#046307',
    gradient2: '#D4AF37',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
    script: 'var(--font-script)',
  },
  effects: {
    particleType: 'stars',
    glassEffect: false,
    parallaxIntensity: 0.2,
    animationStyle: 'elegant',
  },
  decorations: {
    dividerStyle: 'geometric',
    cardStyle: 'solid',
    borderRadius: '20px',
  },
};
