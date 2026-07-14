'use client';

import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

type ParticleType = 'gold' | 'petals' | 'fireflies' | 'stars' | 'snow' | 'none';

interface FloatingParticlesProps {
  type: ParticleType;
  count?: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  rotation?: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 4 + Math.random() * 8,
    opacity: 0.1 + Math.random() * 0.4,
    duration: 15 + Math.random() * 15,
    delay: Math.random() * 10,
    rotation: Math.random() * 360,
  }));
}

function GoldParticles({ particles }: { particles: Particle[] }) {
  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(255,215,0,${p.opacity}) 0%, rgba(218,165,32,${p.opacity * 0.5}) 100%)`,
            boxShadow: `0 0 ${p.size}px rgba(255,215,0,${p.opacity * 0.3})`,
          }}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, p.opacity, p.opacity, 0],
            x: [0, Math.sin(p.id) * 30, Math.cos(p.id) * -20, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </>
  );
}

function PetalParticles({ particles }: { particles: Particle[] }) {
  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: p.size * 1.5,
            height: p.size * 2,
            borderRadius: '50% 0 50% 0',
            background: `rgba(255,${150 + Math.floor(Math.random() * 50)},${180 + Math.floor(Math.random() * 40)},${p.opacity})`,
          }}
          initial={{ y: '-10vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '110vh',
            opacity: [0, p.opacity, p.opacity, 0],
            rotate: [0, 180, 360, 540],
            x: [0, Math.sin(p.id) * 50, Math.cos(p.id) * -40, Math.sin(p.id + 1) * 30],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </>
  );
}

function FireflyParticles({ particles }: { particles: Particle[] }) {
  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: Math.max(3, p.size * 0.5),
            height: Math.max(3, p.size * 0.5),
            background: `rgba(255, 255, 180, ${p.opacity})`,
            boxShadow: `0 0 ${p.size * 2}px rgba(255, 255, 150, ${p.opacity}), 0 0 ${p.size * 4}px rgba(255, 255, 100, ${p.opacity * 0.3})`,
          }}
          animate={{
            opacity: [p.opacity * 0.2, p.opacity, p.opacity * 0.2],
            x: [0, Math.sin(p.id * 0.7) * 40, Math.cos(p.id * 0.5) * -30, 0],
            y: [0, Math.cos(p.id * 0.8) * 30, Math.sin(p.id * 0.6) * -20, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: p.duration * 0.6,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
}

function StarParticles({ particles }: { particles: Particle[] }) {
  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: Math.max(2, p.size * 0.4),
            height: Math.max(2, p.size * 0.4),
            background: `rgba(255, 255, 255, ${p.opacity})`,
            boxShadow: `0 0 ${p.size}px rgba(255, 255, 255, ${p.opacity * 0.5})`,
          }}
          animate={{
            opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
}

function SnowParticles({ particles }: { particles: Particle[] }) {
  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: p.size * 0.6,
            height: p.size * 0.6,
            background: `rgba(255, 255, 255, ${p.opacity})`,
          }}
          initial={{ y: '-5vh', opacity: 0 }}
          animate={{
            y: '110vh',
            opacity: [0, p.opacity, p.opacity, 0],
            x: [0, Math.sin(p.id) * 20, Math.cos(p.id) * -15, Math.sin(p.id + 2) * 10],
          }}
          transition={{
            duration: p.duration * 1.2,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </>
  );
}

const particleComponents: Record<
  Exclude<ParticleType, 'none'>,
  React.FC<{ particles: Particle[] }>
> = {
  gold: GoldParticles,
  petals: PetalParticles,
  fireflies: FireflyParticles,
  stars: StarParticles,
  snow: SnowParticles,
};

export default function FloatingParticles({
  type,
  count = 20,
}: FloatingParticlesProps) {
  const particles = useMemo(() => generateParticles(count), [count]);

  if (type === 'none') return null;

  const ParticleComponent = particleComponents[type];

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      aria-hidden="true"
    >
      <ParticleComponent particles={particles} />
    </div>
  );
}
