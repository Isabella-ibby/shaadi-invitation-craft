import type { ThemePreset } from '@/types/theme';

export const classicFloral: ThemePreset = {
  name: 'classic-floral',
  label: 'Classic Floral',
  colors: {
    primary: '#87AE73',
    secondary: '#F5E6CC',
    accent: '#DCAE96',
    background: '#FFF5EE',
    surface: '#FFFFFF',
    text: '#4A4A4A',
    textMuted: '#8A8A8A',
    border: '#EADACA',
    overlay: 'rgba(255, 245, 238, 0.8)',
    gradient1: '#87AE73',
    gradient2: '#DCAE96',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
    script: 'var(--font-script-alt)',
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
    borderRadius: '16px',
  },
};
