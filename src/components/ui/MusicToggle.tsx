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
    <div className="fixed top-5 right-5 z-40 print:hidden">
      <button
        onClick={toggleMusic}
        type="button"
        disabled={hasError}
        aria-label={hasError ? "Audio unavailable" : isPlaying ? "Mute wedding music" : "Play wedding music"}
        title={hasError ? "Audio unavailable" : isPlaying ? "Mute music" : "Play music"}
        className={`group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full backdrop-blur-md border shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 ${
          hasError
            ? 'opacity-40 cursor-not-allowed bg-[#FAF7F2]/60 border-[#D9C4A3]/30 text-[#8C8176]'
            : isPlaying
            ? 'bg-[#FAF7F2]/95 border-[#D9C4A3] text-[#51483F] shadow-md shadow-[#D9C4A3]/10 hover:border-[#B69A72]'
            : 'bg-[#FAF7F2]/80 border-[#D9C4A3]/50 text-[#8C8176] hover:border-[#B69A72] hover:text-[#51483F]'
        }`}
      >
        <span className="relative flex items-center justify-center w-4 h-4 text-accent-antique">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#B69A72]" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#8C8176]" />
          )}
        </span>

        {/* Animated sound wave bars when playing */}
        <div className="flex items-center gap-0.5 h-3">
          <span
            className={`w-0.5 rounded-full transition-all duration-300 ${
              isPlaying ? 'bg-[#B69A72] h-3 animate-pulse' : 'bg-[#8C8176]/40 h-1'
            }`}
          />
          <span
            className={`w-0.5 rounded-full transition-all duration-300 ${
              isPlaying ? 'bg-[#D9C4A3] h-2 animate-pulse delay-75' : 'bg-[#8C8176]/40 h-1.5'
            }`}
          />
          <span
            className={`w-0.5 rounded-full transition-all duration-300 ${
              isPlaying ? 'bg-[#B69A72] h-3.5 animate-pulse delay-150' : 'bg-[#8C8176]/40 h-1'
            }`}
          />
        </div>

        <span className="font-sans text-[11px] tracking-wider uppercase transition-colors font-medium">
          {isPlaying ? 'Mute' : 'Play Music'}
        </span>
      </button>
    </div>
  );
};
