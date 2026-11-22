/**
 * Date utility helpers for wedding invitations
 */

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  isValid: boolean;
}

export function calculateTimeRemaining(targetDate: string): TimeRemaining {
  const target = new Date(targetDate).getTime();

  if (isNaN(target)) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: false,
      isValid: false,
    };
  }

  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
      isValid: true,
    };
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    isExpired: false,
    isValid: true,
  };
}

export function formatTimeNumber(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

