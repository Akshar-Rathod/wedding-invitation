import { useState, useEffect } from 'react';
import { calculateTimeRemaining, TimeRemaining } from '../utils/date';

export function useCountdown(targetDate: string): TimeRemaining {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(() => 
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    // Initial calculation
    setTimeLeft(calculateTimeRemaining(targetDate));

    // Update every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

