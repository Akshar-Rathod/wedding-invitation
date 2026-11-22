import React, { useMemo } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Particle {
  id: number;
  type: 'petal-rose' | 'petal-gold' | 'leaf-sage' | 'leaf-olive' | 'flower-bud';
  left: number; // percentage
  size: number; // px
  duration: number; // seconds
  delay: number; // seconds
  opacity: number;
}

export const FallingPetals: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // Generate a consistent, lightweight set of falling particles
  const particles: Particle[] = useMemo(() => {
    // 18 particles is the sweet spot for visual magic without lag on mobile
    const items: Particle[] = [];
    const types: Particle['type'][] = [
      'petal-rose',
      'petal-gold',
      'leaf-sage',
      'leaf-olive',
      'flower-bud',
    ];

    for (let i = 0; i < 18; i++) {
      items.push({
        id: i,
        type: types[i % types.length],
        left: (i * 5.5 + (i % 3) * 3) % 96 + 2, // Distributed across screen width
        size: 14 + (i % 4) * 4, // 14px to 26px
        duration: 9 + (i % 6) * 1.8, // 9s to 18s
        delay: (i * 0.9) % 7, // Staggered delays
        opacity: 0.45 + (i % 3) * 0.15, // 0.45 to 0.75
      });
    }
    return items;
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none" 
      aria-hidden="true"
    >
      {particles.map((p) => {
        const isLeaf = p.type.startsWith('leaf');
        const animClass = isLeaf ? 'animate-leaf' : 'animate-petal';

        return (
          <div
            key={p.id}
            className={`absolute top-0 ${animClass}`}
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
            }}
          >
            {p.type === 'petal-rose' && (
              <svg viewBox="0 0 30 30" fill="none" className="w-full h-full text-[#E8C5B8]">
                {/* Soft blush rose petal */}
                <path
                  d="M15 2 C22 2 28 8 28 16 C28 24 20 28 15 28 C10 28 2 24 2 16 C2 8 8 2 15 2 Z"
                  fill="currentColor"
                  fillOpacity="0.75"
                />
                <path
                  d="M15 6 C18 10 20 18 15 24"
                  stroke="#D4A798"
                  strokeWidth="0.8"
                  strokeOpacity="0.5"
                />
              </svg>
            )}

            {p.type === 'petal-gold' && (
              <svg viewBox="0 0 30 30" fill="none" className="w-full h-full text-[#D9C6A5]">
                {/* Warm champagne gold petal */}
                <path
                  d="M15 3 C23 5 27 12 25 20 C23 27 16 28 14 27 C8 24 4 16 6 9 C8 4 11 3 15 3 Z"
                  fill="currentColor"
                  fillOpacity="0.7"
                />
              </svg>
            )}

            {p.type === 'leaf-sage' && (
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#A7AD96]">
                {/* Muted sage leaf */}
                <path
                  d="M6 26 C12 22 22 18 26 6 C20 10 10 14 6 26 Z"
                  fill="currentColor"
                  fillOpacity="0.7"
                  stroke="#7D846C"
                  strokeWidth="0.7"
                />
                <path d="M6 26 L20 12" stroke="#59604B" strokeWidth="0.8" strokeOpacity="0.5" />
              </svg>
            )}

            {p.type === 'leaf-olive' && (
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#59604B]">
                {/* Deep olive delicate leaf */}
                <path
                  d="M4 28 C8 20 18 14 28 8 C22 18 16 24 4 28 Z"
                  fill="currentColor"
                  fillOpacity="0.5"
                  stroke="#3F4435"
                  strokeWidth="0.6"
                />
              </svg>
            )}

            {p.type === 'flower-bud' && (
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#D9C6A5]">
                {/* Little jasmine / marigold bud */}
                <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.6" />
                <path d="M12 6 C15 9 15 15 12 18" stroke="#59604B" strokeWidth="0.8" strokeOpacity="0.4" />
                <path d="M6 12 C9 15 15 15 18 12" stroke="#59604B" strokeWidth="0.8" strokeOpacity="0.4" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

