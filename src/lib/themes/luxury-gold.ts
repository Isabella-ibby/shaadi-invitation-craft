import type { ThemePreset } from '@/types/theme';

export const luxuryGold: ThemePreset = {
  name: 'luxury-gold',
  label: 'Luxury Gold',
  colors: {
    primary: '#D4AF37',
    secondary: '#1A1A2E',
    accent: '#C9A961',
    background: '#0A0A0A',
    surface: '#1A1A1A',
    text: '#FFFDD0',
    textMuted: '#A0A0A0',
    border: '#2A2A2A',
    overlay: 'rgba(0, 0, 0, 0.7)',
    gradient1: '#D4AF37',
    gradient2: '#F5E6A3',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
    script: 'var(--font-script)',
  },
  effects: {
    particleType: 'gold',
    glassEffect: true,
    parallaxIntensity: 0.3,
    animationStyle: 'elegant',
  },
  decorations: {
    dividerStyle: 'ornate',
    cardStyle: 'glass',
    borderRadius: '12px',
  },
};
