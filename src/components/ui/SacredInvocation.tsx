import React from 'react';

interface SacredInvocationProps {
  compact?: boolean;
}

export const SacredInvocation: React.FC<SacredInvocationProps> = ({ compact = false }) => (
  <div className={`flex flex-col items-center text-center text-olive-deep ${compact ? 'gap-0' : 'gap-1'}`}>
    <div
      className={`flex items-center justify-center rounded-full bg-bg-primary shadow-soft-card ring-1 ring-champagne/45 ${
        compact ? 'p-1 mb-1' : 'p-2 sm:p-2.5 mb-2'
      }`}
    >
      <img
        src="/images/ganeshaji.webp"
        alt="श्री गणेश"
        className={`object-contain mix-blend-multiply ${
          compact ? 'w-14 h-16' : 'w-28 h-36 sm:w-36 sm:h-44'
        }`}
      />
    </div>
    <p
      lang="sa"
      className={`font-devanagari text-champagne-dark leading-snug ${
        compact ? 'text-[15px]' : 'text-2xl sm:text-[2.15rem]'
      }`}
    >
      ॥ श्री गणेशाय नमः ॥
    </p>
    <p
      lang="sa"
      className={`font-devanagari text-olive-deep leading-snug ${
        compact ? 'text-[10px]' : 'text-sm sm:text-base'
      }`}
    >
      ॥ श्री उमीया माताय नमः ॥
    </p>
  </div>
);
