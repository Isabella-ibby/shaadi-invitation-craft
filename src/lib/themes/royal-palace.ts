import type { ThemePreset } from '@/types/theme';

export const royalPalace: ThemePreset = {
  name: 'royal-palace',
  label: 'Royal Palace',
  colors: {
    primary: '#C9B037',
    secondary: '#4A0E4E',
    accent: '#F3E5AB',
    background: '#1A1A2E',
    surface: '#252542',
    text: '#FFF8DC',
    textMuted: '#B0B0C0',
    border: '#3A3A5A',
    overlay: 'rgba(0, 0, 0, 0.75)',
    gradient1: '#C9B037',
    gradient2: '#F3E5AB',
  },
  fonts: {
    heading: 'var(--font-heading-alt)',
    body: 'var(--font-body-alt)',
    script: 'var(--font-script)',
  },
  effects: {
    particleType: 'gold',
    glassEffect: true,
    parallaxIntensity: 0.4,
    animationStyle: 'dramatic',
  },
  decorations: {
    dividerStyle: 'ornate',
    cardStyle: 'elevated',
    borderRadius: '16px',
  },
};
