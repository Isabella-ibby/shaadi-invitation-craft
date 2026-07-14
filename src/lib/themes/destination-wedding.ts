import type { ThemePreset } from '@/types/theme';

export const destinationWedding: ThemePreset = {
  name: 'destination-wedding',
  label: 'Destination Wedding',
  colors: {
    primary: '#FF6B35',
    secondary: '#4ECDC4',
    accent: '#F7DC6F',
    background: '#FFF8E7',
    surface: '#FFFFFF',
    text: '#2C3E50',
    textMuted: '#7F8C8D',
    border: '#FDEBD0',
    overlay: 'rgba(255, 107, 53, 0.8)',
    gradient1: '#FF6B35',
    gradient2: '#F7DC6F',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
    script: 'var(--font-script)',
  },
  effects: {
    particleType: 'none',
    glassEffect: true,
    parallaxIntensity: 0.3,
    animationStyle: 'playful',
  },
  decorations: {
    dividerStyle: 'none',
    cardStyle: 'glass',
    borderRadius: '24px',
  },
};
