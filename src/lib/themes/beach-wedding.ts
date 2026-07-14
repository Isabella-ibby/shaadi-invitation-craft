import type { ThemePreset } from '@/types/theme';

export const beachWedding: ThemePreset = {
  name: 'beach-wedding',
  label: 'Beach Wedding',
  colors: {
    primary: '#008B8B',
    secondary: '#C2B280',
    accent: '#93E9BE',
    background: '#F0FFF0',
    surface: '#FFFFFF',
    text: '#004C4C',
    textMuted: '#668B8B',
    border: '#E0EEE0',
    overlay: 'rgba(0, 139, 139, 0.8)',
    gradient1: '#008B8B',
    gradient2: '#93E9BE',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
    script: 'var(--font-script)',
  },
  effects: {
    particleType: 'none',
    glassEffect: true,
    parallaxIntensity: 0.2,
    animationStyle: 'playful',
  },
  decorations: {
    dividerStyle: 'minimal',
    cardStyle: 'glass',
    borderRadius: '16px',
  },
};
