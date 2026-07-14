'use client';

import { motion } from 'framer-motion';
import React from 'react';

export type DividerStyle = 'ornate' | 'floral' | 'geometric' | 'minimal' | 'none';

interface DividerProps {
  style?: DividerStyle;
  className?: string;
}

const OrnateSVG = () => (
  <svg
    viewBox="0 0 300 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    aria-hidden="true"
  >
    {/* Center diamond */}
    <path
      d="M150 8 L158 20 L150 32 L142 20 Z"
      fill="var(--color-primary)"
      opacity="0.8"
    />
    {/* Inner scrollwork – left */}
    <path
      d="M130 20 Q135 10 142 20"
      stroke="var(--color-primary)"
      strokeWidth="1.2"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M120 20 Q128 6 138 14"
      stroke="var(--color-primary)"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
    />
    <path
      d="M108 20 Q118 4 132 12"
      stroke="var(--color-primary)"
      strokeWidth="0.8"
      fill="none"
      opacity="0.3"
    />
    {/* Inner scrollwork – right (mirrored) */}
    <path
      d="M170 20 Q165 10 158 20"
      stroke="var(--color-primary)"
      strokeWidth="1.2"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M180 20 Q172 6 162 14"
      stroke="var(--color-primary)"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
    />
    <path
      d="M192 20 Q182 4 168 12"
      stroke="var(--color-primary)"
      strokeWidth="0.8"
      fill="none"
      opacity="0.3"
    />
    {/* Outer curves – left */}
    <path
      d="M20 20 Q50 20 80 20"
      stroke="var(--color-primary)"
      strokeWidth="0.5"
      opacity="0.25"
    />
    <path
      d="M80 20 Q95 10 108 20"
      stroke="var(--color-primary)"
      strokeWidth="0.7"
      fill="none"
      opacity="0.35"
    />
    {/* Small accent circles – left */}
    <circle cx="100" cy="20" r="2" fill="var(--color-primary)" opacity="0.3" />
    <circle cx="85" cy="20" r="1.2" fill="var(--color-primary)" opacity="0.2" />
    {/* Outer curves – right (mirrored) */}
    <path
      d="M280 20 Q250 20 220 20"
      stroke="var(--color-primary)"
      strokeWidth="0.5"
      opacity="0.25"
    />
    <path
      d="M220 20 Q205 10 192 20"
      stroke="var(--color-primary)"
      strokeWidth="0.7"
      fill="none"
      opacity="0.35"
    />
    {/* Small accent circles – right */}
    <circle cx="200" cy="20" r="2" fill="var(--color-primary)" opacity="0.3" />
    <circle cx="215" cy="20" r="1.2" fill="var(--color-primary)" opacity="0.2" />
    {/* Outermost filigree curls – left */}
    <path
      d="M10 20 C15 12, 25 12, 30 20 C35 28, 45 28, 50 20"
      stroke="var(--color-primary)"
      strokeWidth="0.6"
      fill="none"
      opacity="0.2"
    />
    {/* Outermost filigree curls – right */}
    <path
      d="M290 20 C285 12, 275 12, 270 20 C265 28, 255 28, 250 20"
      stroke="var(--color-primary)"
      strokeWidth="0.6"
      fill="none"
      opacity="0.2"
    />
  </svg>
);

const FloralSVG = () => (
  <svg
    viewBox="0 0 300 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    aria-hidden="true"
  >
    {/* Center flower */}
    <circle cx="150" cy="25" r="3" fill="var(--color-primary)" opacity="0.7" />
    {/* Petals */}
    <ellipse cx="150" cy="17" rx="3.5" ry="7" fill="var(--color-primary)" opacity="0.3" />
    <ellipse cx="150" cy="33" rx="3.5" ry="7" fill="var(--color-primary)" opacity="0.3" />
    <ellipse cx="142" cy="25" rx="7" ry="3.5" fill="var(--color-primary)" opacity="0.3" />
    <ellipse cx="158" cy="25" rx="7" ry="3.5" fill="var(--color-primary)" opacity="0.3" />
    {/* Diagonal petals */}
    <ellipse
      cx="144" cy="19" rx="3" ry="6"
      fill="var(--color-primary)" opacity="0.2"
      transform="rotate(-45 144 19)"
    />
    <ellipse
      cx="156" cy="19" rx="3" ry="6"
      fill="var(--color-primary)" opacity="0.2"
      transform="rotate(45 156 19)"
    />
    <ellipse
      cx="144" cy="31" rx="3" ry="6"
      fill="var(--color-primary)" opacity="0.2"
      transform="rotate(45 144 31)"
    />
    <ellipse
      cx="156" cy="31" rx="3" ry="6"
      fill="var(--color-primary)" opacity="0.2"
      transform="rotate(-45 156 31)"
    />
    {/* Left vine */}
    <path
      d="M130 25 Q110 15 80 25 Q60 30 30 25"
      stroke="var(--color-primary)"
      strokeWidth="0.8"
      fill="none"
      opacity="0.3"
    />
    {/* Left leaves */}
    <ellipse
      cx="100" cy="22" rx="2.5" ry="5"
      fill="var(--color-primary)" opacity="0.2"
      transform="rotate(-30 100 22)"
    />
    <ellipse
      cx="65" cy="27" rx="2.5" ry="5"
      fill="var(--color-primary)" opacity="0.15"
      transform="rotate(20 65 27)"
    />
    {/* Right vine */}
    <path
      d="M170 25 Q190 15 220 25 Q240 30 270 25"
      stroke="var(--color-primary)"
      strokeWidth="0.8"
      fill="none"
      opacity="0.3"
    />
    {/* Right leaves */}
    <ellipse
      cx="200" cy="22" rx="2.5" ry="5"
      fill="var(--color-primary)" opacity="0.2"
      transform="rotate(30 200 22)"
    />
    <ellipse
      cx="235" cy="27" rx="2.5" ry="5"
      fill="var(--color-primary)" opacity="0.15"
      transform="rotate(-20 235 27)"
    />
  </svg>
);

const GeometricSVG = () => (
  <svg
    viewBox="0 0 300 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    aria-hidden="true"
  >
    {/* Center diamond */}
    <path
      d="M150 4 L156 12 L150 20 L144 12 Z"
      fill="var(--color-primary)"
      opacity="0.6"
    />
    {/* Lines extending outward */}
    <line x1="130" y1="12" x2="144" y2="12" stroke="var(--color-primary)" strokeWidth="1" opacity="0.4" />
    <line x1="156" y1="12" x2="170" y2="12" stroke="var(--color-primary)" strokeWidth="1" opacity="0.4" />
    {/* Small diamonds – inner */}
    <path d="M122 8 L126 12 L122 16 L118 12 Z" fill="var(--color-primary)" opacity="0.3" />
    <path d="M178 8 L182 12 L178 16 L174 12 Z" fill="var(--color-primary)" opacity="0.3" />
    {/* Connecting lines */}
    <line x1="95" y1="12" x2="118" y2="12" stroke="var(--color-primary)" strokeWidth="0.7" opacity="0.25" />
    <line x1="182" y1="12" x2="205" y2="12" stroke="var(--color-primary)" strokeWidth="0.7" opacity="0.25" />
    {/* Outer dots */}
    <circle cx="90" cy="12" r="2" fill="var(--color-primary)" opacity="0.2" />
    <circle cx="210" cy="12" r="2" fill="var(--color-primary)" opacity="0.2" />
    {/* Fading lines */}
    <line x1="30" y1="12" x2="88" y2="12" stroke="var(--color-primary)" strokeWidth="0.4" opacity="0.15" />
    <line x1="212" y1="12" x2="270" y2="12" stroke="var(--color-primary)" strokeWidth="0.4" opacity="0.15" />
  </svg>
);

const MinimalSVG = () => (
  <svg
    viewBox="0 0 300 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    aria-hidden="true"
  >
    <line x1="40" y1="6" x2="142" y2="6" stroke="var(--color-primary)" strokeWidth="0.5" opacity="0.3" />
    <circle cx="150" cy="6" r="3" fill="var(--color-primary)" opacity="0.5" />
    <line x1="158" y1="6" x2="260" y2="6" stroke="var(--color-primary)" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

const svgMap: Record<Exclude<DividerStyle, 'none'>, React.FC> = {
  ornate: OrnateSVG,
  floral: FloralSVG,
  geometric: GeometricSVG,
  minimal: MinimalSVG,
};

export default function Divider({
  style: dividerStyle = 'ornate',
  className = '',
}: DividerProps) {
  if (dividerStyle === 'none') return null;

  const SvgComponent = svgMap[dividerStyle];

  return (
    <motion.div
      className={`flex justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      role="separator"
      aria-hidden="true"
    >
      <div className="w-full max-w-[300px]">
        <SvgComponent />
      </div>
    </motion.div>
  );
}
