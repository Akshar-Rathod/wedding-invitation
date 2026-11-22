import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Elegant flying bird silhouette — a proper V-shape with body, visible at any size.
 */
const BirdSVG: React.FC<{ flip?: boolean }> = ({ flip }) => (
  <svg
    viewBox="0 0 60 30"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: flip ? 'scaleX(-1)' : undefined, display: 'block' }}
  >
    {/* Left wing */}
    <path
      d="M30 16 C22 6, 10 2, 2 8 C10 6, 22 8, 30 14Z"
      fill="currentColor"
    />
    {/* Right wing */}
    <path
      d="M30 16 C38 6, 50 2, 58 8 C50 6, 38 8, 30 14Z"
      fill="currentColor"
    />
    {/* Body */}
    <ellipse cx="30" cy="15.5" rx="3" ry="1.8" fill="currentColor" />
  </svg>
);

interface BirdData {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  controlY: number;
  duration: number;
  delay: number;
  size: number;
  flip: boolean;
}

/**
 * A small flock of birds gracefully flying across the screen.
 * Large, dark, slow — clearly visible against ivory/champagne backgrounds.
 */
export const FlyingBirds: React.FC<{ count?: number }> = ({ count = 5 }) => {
  const prefersReduced = useReducedMotion();

  const birds = useMemo<BirdData[]>(() => {
    // Hand-tuned flight paths for a natural-looking flock
    const paths: Array<{
      startX: number; startY: number; endX: number; endY: number;
      controlY: number; duration: number; delay: number; size: number; flip: boolean;
    }> = [
      { startX: -8, startY: 30, endX: 110, endY: 15, controlY: 10, duration: 22, delay: 0, size: 40, flip: false },
      { startX: -6, startY: 35, endX: 108, endY: 20, controlY: 14, duration: 24, delay: 1.5, size: 34, flip: false },
      { startX: 110, startY: 20, endX: -10, endY: 35, controlY: 8, duration: 26, delay: 4, size: 36, flip: true },
      { startX: -10, startY: 45, endX: 112, endY: 25, controlY: 20, duration: 28, delay: 7, size: 30, flip: false },
      { startX: 112, startY: 15, endX: -8, endY: 40, controlY: 5, duration: 25, delay: 10, size: 38, flip: true },
      { startX: -5, startY: 22, endX: 108, endY: 12, controlY: 6, duration: 30, delay: 13, size: 32, flip: false },
      { startX: 108, startY: 40, endX: -6, endY: 18, controlY: 25, duration: 27, delay: 16, size: 28, flip: true },
      { startX: -8, startY: 50, endX: 110, endY: 30, controlY: 30, duration: 24, delay: 19, size: 35, flip: false },
    ];

    return paths.slice(0, count).map((p, i) => ({ ...p, id: i }));
  }, [count]);

  if (prefersReduced) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 40 }}
      aria-hidden="true"
    >
      {birds.map((bird) => (
        <motion.div
          key={bird.id}
          style={{
            position: 'absolute',
            width: bird.size,
            height: bird.size * 0.5,
            color: '#39352F',
          }}
          initial={{
            left: `${bird.startX}%`,
            top: `${bird.startY}%`,
            opacity: 0,
          }}
          animate={{
            left: [
              `${bird.startX}%`,
              `${(bird.startX + bird.endX) * 0.35}%`,
              `${(bird.startX + bird.endX) * 0.65}%`,
              `${bird.endX}%`,
            ],
            top: [
              `${bird.startY}%`,
              `${bird.controlY}%`,
              `${(bird.controlY + bird.endY) / 2}%`,
              `${bird.endY}%`,
            ],
            opacity: [0, 0.85, 0.85, 0],
          }}
          transition={{
            duration: bird.duration,
            delay: bird.delay,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: 5,
          }}
        >
          {/* Slow wing flapping */}
          <motion.div
            animate={{ scaleY: [1, 0.25, 1] }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            style={{ transformOrigin: 'center 70%' }}
          >
            <BirdSVG flip={bird.flip} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

