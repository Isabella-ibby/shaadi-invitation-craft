'use client';

import { useState, useEffect } from 'react';
import { formatCountdown } from '@/lib/utils';

export function useCountdown(targetDate: string) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(formatCountdown(targetDate));
    }, 1000);

    // Initial call
    setCountdown(formatCountdown(targetDate));

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}
