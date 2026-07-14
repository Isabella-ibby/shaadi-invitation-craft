import type { ThemePreset } from '@/types/theme';

export const darkLuxury: ThemePreset = {
  name: 'dark-luxury',
  label: 'Dark Luxury',
  colors: {
    primary: '#B76E79',
    secondary: '#E5E4E2',
    accent: '#D4AF37',
    background: '#0D0D0D',
    surface: '#1A1A1A',
    text: '#E5E4E2',
    textMuted: '#8C8C8C',
    border: '#333333',
    overlay: 'rgba(0, 0, 0, 0.85)',
    gradient1: '#B76E79',
    gradient2: '#D4AF37',
  },
  fonts: {
    heading: 'var(--font-heading-alt2)',
    body: 'var(--font-body)',
    script: 'var(--font-script)',
  },
  effects: {
    particleType: 'fireflies',
    glassEffect: true,
    parallaxIntensity: 0.4,
    animationStyle: 'dramatic',
  },
  decorations: {
    dividerStyle: 'geometric',
    cardStyle: 'glass',
    borderRadius: '0px',
  },
};
