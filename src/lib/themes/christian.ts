import type { ThemePreset } from '@/types/theme';

export const christian: ThemePreset = {
  name: 'christian',
  label: 'Christian',
  colors: {
    primary: '#2E4057',
    secondary: '#C9B037',
    accent: '#A5C4D4',
    background: '#FAF9F6',
    surface: '#FFFFFF',
    text: '#1C2836',
    textMuted: '#5D6D7E',
    border: '#EAECEE',
    overlay: 'rgba(46, 64, 87, 0.8)',
    gradient1: '#2E4057',
    gradient2: '#A5C4D4',
  },
  fonts: {
    heading: 'var(--font-heading-alt)',
    body: 'var(--font-body)',
    script: 'var(--font-script)',
  },
  effects: {
    particleType: 'none',
    glassEffect: false,
    parallaxIntensity: 0.1,
    animationStyle: 'minimal',
  },
  decorations: {
    dividerStyle: 'floral',
    cardStyle: 'outlined',
    borderRadius: '4px',
  },
};
