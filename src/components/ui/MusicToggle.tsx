import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { MusicConfig } from '../../types/wedding';

interface MusicToggleProps {
  config: MusicConfig;
  autoPlayTriggered?: boolean; // When visitor clicks "Open Invitation"
}

export const MusicToggle: React.FC<MusicToggleProps> = ({ config, autoPlayTriggered = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sourcesRef = useRef<string[]>([]);
  const sourceIndexRef = useRef(0);

  // Explicit user mute intent flag: when true, music stays paused regardless of triggers
  const isUserMutedRef = useRef(false);
  // Auto-play trigger guard: ensures envelope opening only attempts auto-play once
  const hasAutoStartedRef = useRef(false);

  // Initialize Audio instance with fallback playlist
  useEffect(() => {
    if (!config.enabled) return;

    // Build ordered list of audio sources to try
    const candidates = [
      config.src,
      '/audio/wedding-ambient.mp3',
      '/audio/wedding-ambient.wav',
    ].filter(Boolean) as string[];

    // Unique list
    sourcesRef.current = Array.from(new Set(candidates));
    sourceIndexRef.current = 0;

    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.45;
    audio.preload = 'auto';
    audio.src = sourcesRef.current[0];
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      // Try next available fallback audio source
      if (sourceIndexRef.current < sourcesRef.current.length - 1) {
        sourceIndexRef.current += 1;
        audio.src = sourcesRef.current[sourceIndexRef.current];
        audio.load();
        if (!isUserMutedRef.current && hasAutoStartedRef.current) {
          audio.play().catch(() => {});
        }
      } else {
        setHasError(true);
        setIsPlaying(false);
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, [config.enabled, config.src]);

  // Handle triggered play after explicit user interaction (Open Invitation)
  // Runs ONCE when autoPlayTriggered becomes true and only if user has not muted
  useEffect(() => {
    if (autoPlayTriggered && !hasAutoStartedRef.current && !isUserMutedRef.current && audioRef.current) {
      hasAutoStartedRef.current = true;
      audioRef.current.muted = false;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay restricted by browser; gesture unlock will catch next touch
            setIsPlaying(false);
          });
      }
    }
  }, [autoPlayTriggered]);

  // Mobile browser gesture listener fallback: if envelope was opened but browser suspended playback,
  // resume smoothly on the next user tap anywhere on screen (unless user clicked mute).
  useEffect(() => {
    if (!autoPlayTriggered || hasAutoStartedRef.current || isUserMutedRef.current) return;

    const handleUnlockTouch = () => {
      if (isUserMutedRef.current || hasAutoStartedRef.current) return;
      if (audioRef.current) {
        hasAutoStartedRef.current = true;
        audioRef.current.muted = false;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };

    window.addEventListener('click', handleUnlockTouch, { once: true, passive: true });
    window.addEventListener('touchstart', handleUnlockTouch, { once: true, passive: true });

    return () => {
      window.removeEventListener('click', handleUnlockTouch);
      window.removeEventListener('touchstart', handleUnlockTouch);
    };
  }, [autoPlayTriggered]);

  // Explicit user toggle function:
  const toggleMusic = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!audioRef.current) return;

    if (isPlaying) {
      // User deliberately muting / pausing:
      isUserMutedRef.current = true;
      audioRef.current.pause();
      audioRef.current.muted = true;
      setIsPlaying(false);
    } else {
      // User deliberately unmuting / resuming:
      isUserMutedRef.current = false;
      hasAutoStartedRef.current = true;
      audioRef.current.muted = false;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  if (!config.enabled) {
    return null;
  }

  return (
    <div className="fixed safe-fixed-bottom safe-fixed-right z-40 print:hidden">
      <button
        onClick={toggleMusic}
        type="button"
        disabled={hasError}
        aria-label={hasError ? 'Audio unavailable' : isPlaying ? 'Mute wedding music' : 'Play wedding music'}
        title={hasError ? 'Audio unavailable' : isPlaying ? 'Mute music' : 'Play music'}
        className={`group relative flex items-center gap-2 sm:gap-2.5 min-h-[44px] px-3 sm:px-3.5 py-2 rounded-full backdrop-blur-md border shadow-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-deep/40 ${
          hasError
            ? 'opacity-40 cursor-not-allowed bg-bg-primary/60 border-champagne/30 text-text-muted'
            : isPlaying
            ? 'bg-bg-primary/95 border-champagne text-text-primary shadow-md hover:border-champagne-dark'
            : 'bg-bg-primary/85 border-champagne/60 text-text-secondary hover:border-champagne-dark hover:text-text-primary'
        }`}
      >
        <span className="relative flex items-center justify-center w-4 h-4">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-champagne-dark" />
          ) : (
            <VolumeX className="w-4 h-4 text-text-secondary" />
          )}
        </span>

        {/* Animated sound wave bars when playing */}
        <div className="flex items-center gap-0.5 h-3" aria-hidden="true">
          <span
            className={`w-0.5 rounded-full transition-all duration-300 ${
              isPlaying ? 'bg-champagne-dark h-3 animate-pulse' : 'bg-text-muted/50 h-1'
            }`}
          />
          <span
            className={`w-0.5 rounded-full transition-all duration-300 ${
              isPlaying ? 'bg-champagne h-2 animate-pulse delay-75' : 'bg-text-muted/40 h-1.5'
            }`}
          />
          <span
            className={`w-0.5 rounded-full transition-all duration-300 ${
              isPlaying ? 'bg-champagne-dark h-3.5 animate-pulse delay-150' : 'bg-text-muted/50 h-1'
            }`}
          />
        </div>

        <span className="hidden sm:inline font-sans text-[11px] tracking-wider uppercase transition-colors font-medium">
          {isPlaying ? 'Mute' : 'Play Music'}
        </span>
      </button>
    </div>
  );
};