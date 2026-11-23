import React, { useMemo, useId } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type ButterflyPalette = 'champagne' | 'sage' | 'ivory';

const PALETTES: Record<ButterflyPalette, { deep: string; mid: string; light: string; spot: string }> = {
  champagne: { deep: '#7A5E32', mid: '#C4A574', light: '#F6E7C8', spot: '#5C3A1E' },
  sage: { deep: '#3F4435', mid: '#7D846C', light: '#C9D0B4', spot: '#2C3324' },
  ivory: { deep: '#6E5A42', mid: '#C9B48A', light: '#F8F1E4', spot: '#4A3A28' },
};

/**
 * A readable butterfly: large forewings, smaller hindwings, body, and antennae.
 * Left and right wings are separate layers so they can fold in 3D around the body.
 */
const Butterfly: React.FC<{ palette: ButterflyPalette; gradientId: string }> = ({
  palette,
  gradientId,
}) => {
  const colors = PALETTES[palette];

  const wingDefs = (id: string) => (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={colors.light} />
        <stop offset="55%" stopColor={colors.mid} />
        <stop offset="100%" stopColor={colors.deep} />
      </linearGradient>
    </defs>
  );

  return (
    <div className="relative h-full w-full" style={{ perspective: 420 }}>
      {/* Left wings fold toward the body */}
      <motion.div
        className="absolute inset-0"
        style={{ transformOrigin: '50% 46%', transformStyle: 'preserve-3d' }}
        animate={{ rotateY: [12, 72, 12] }}
        transition={{
          duration: 0.72,
          times: [0, 0.38, 1],
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        <svg viewBox="0 0 200 140" className="h-full w-full overflow-visible">
          {wingDefs(`${gradientId}-l`)}
          {/* Hindwing */}
          <path
            d="M94 72 C78 84, 48 112, 32 102 C16 92, 26 72, 54 66 C72 62, 88 66, 94 72 Z"
            fill={`url(#${gradientId}-l)`}
            stroke={colors.deep}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          {/* Forewing */}
          <path
            d="M96 64 C86 38, 54 12, 22 20 C4 26, 2 52, 20 72 C40 94, 74 82, 96 66 Z"
            fill={`url(#${gradientId}-l)`}
            stroke={colors.deep}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M90 58 C70 40, 42 32, 24 36"
            fill="none"
            stroke={colors.light}
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.85"
          />
          <circle cx="48" cy="48" r="5.5" fill={colors.spot} opacity="0.35" />
          <circle cx="62" cy="58" r="3" fill={colors.spot} opacity="0.22" />
        </svg>
      </motion.div>

      {/* Right wings mirror the flap */}
      <motion.div
        className="absolute inset-0"
        style={{ transformOrigin: '50% 46%', transformStyle: 'preserve-3d' }}
        animate={{ rotateY: [-12, -72, -12] }}
        transition={{
          duration: 0.72,
          times: [0, 0.38, 1],
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        <svg viewBox="0 0 200 140" className="h-full w-full overflow-visible">
          {wingDefs(`${gradientId}-r`)}
          <path
            d="M106 72 C122 84, 152 112, 168 102 C184 92, 174 72, 146 66 C128 62, 112 66, 106 72 Z"
            fill={`url(#${gradientId}-r)`}
            stroke={colors.deep}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path
            d="M104 64 C114 38, 146 12, 178 20 C196 26, 198 52, 180 72 C160 94, 126 82, 104 66 Z"
            fill={`url(#${gradientId}-r)`}
            stroke={colors.deep}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M110 58 C130 40, 158 32, 176 36"
            fill="none"
            stroke={colors.light}
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.85"
          />
          <circle cx="152" cy="48" r="5.5" fill={colors.spot} opacity="0.35" />
          <circle cx="138" cy="58" r="3" fill={colors.spot} opacity="0.22" />
        </svg>
      </motion.div>

      {/* Body stays still so the wings fold around it */}
      <svg viewBox="0 0 200 140" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <ellipse cx="100" cy="74" rx="4.2" ry="24" fill="#3F4435" />
        <ellipse cx="100" cy="78" rx="2.2" ry="16" fill="#59604B" opacity="0.55" />
        <circle cx="100" cy="48" r="6.2" fill="#3F4435" />
        <circle cx="97.6" cy="46.4" r="1.1" fill="#F8F5EF" opacity="0.8" />
        <circle cx="102.4" cy="46.4" r="1.1" fill="#F8F5EF" opacity="0.8" />
        <path
          d="M96 44 C90 28, 78 18, 70 14"
          fill="none"
          stroke="#3F4435"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M104 44 C110 28, 122 18, 130 14"
          fill="none"
          stroke="#3F4435"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="70" cy="14" r="2.1" fill="#3F4435" />
        <circle cx="130" cy="14" r="2.1" fill="#3F4435" />
      </svg>
    </div>
  );
};

interface Drifter {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  arcY: number;
  duration: number;
  delay: number;
  size: number;
  palette: ButterflyPalette;
}

export const FlyingBirds: React.FC<{ count?: number }> = ({ count = 4 }) => {
  const prefersReduced = useReducedMotion();
  const baseId = useId().replace(/:/g, '');

  const drift = useMemo<Drifter[]>(() => {
    const paths: Omit<Drifter, 'id'>[] = [
      { startX: 6, startY: 14, endX: 78, endY: 22, arcY: 8, duration: 18, delay: 0, size: 92, palette: 'champagne' },
      { startX: 70, startY: 62, endX: 8, endY: 18, arcY: 36, duration: 20, delay: 1, size: 80, palette: 'sage' },
      { startX: -6, startY: 40, endX: 88, endY: 16, arcY: 24, duration: 22, delay: 3, size: 72, palette: 'ivory' },
      { startX: 82, startY: 10, endX: 18, endY: 58, arcY: 6, duration: 19, delay: 2, size: 84, palette: 'champagne' },
    ];

    return paths.slice(0, count).map((p, i) => ({ ...p, id: i }));
  }, [count]);

  if (prefersReduced) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[8]" aria-hidden="true">
      {drift.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ width: b.size, height: b.size * 0.7 }}
          initial={{ left: `${b.startX}%`, top: `${b.startY}%`, opacity: 0 }}
          animate={{
            left: [`${b.startX}%`, `${(b.startX + b.endX) / 2}%`, `${(b.startX + b.endX) / 2}%`, `${b.endX}%`],
            top: [`${b.startY}%`, `${b.arcY}%`, `${b.arcY}%`, `${b.endY}%`],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <motion.div
            className="h-full w-full"
            animate={{ y: [-5, 6, -5], rotate: b.startX < 50 ? [6, -4, 6] : [-6, 4, -6] }}
            transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity }}
          >
            <Butterfly palette={b.palette} gradientId={`${baseId}-wing-${b.id}`} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
