import { useState, useEffect } from 'react';

const STORAGE_KEY = 'aaliya_raksha_bandhan_offer_start_v1';
const DURATION_HOURS = 48;
const DURATION_MS = DURATION_HOURS * 60 * 60 * 1000;

export interface FestivalOfferTimer {
  isExpired: boolean;
  timeLeftMs: number;
  hours: number;
  minutes: number;
  seconds: number;
  formattedTime: string;
  totalDurationHours: number;
  discountPercent: number;
}

export function useFestivalOffer(): FestivalOfferTimer {
  const [timeLeftMs, setTimeLeftMs] = useState<number>(() => {
    try {
      let startTimeStr = localStorage.getItem(STORAGE_KEY);
      let startTime = startTimeStr ? parseInt(startTimeStr, 10) : null;
      
      if (!startTime || isNaN(startTime)) {
        startTime = Date.now();
        localStorage.setItem(STORAGE_KEY, startTime.toString());
      }
      
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, DURATION_MS - elapsed);
      return remaining;
    } catch {
      return DURATION_MS;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        let startTimeStr = localStorage.getItem(STORAGE_KEY);
        let startTime = startTimeStr ? parseInt(startTimeStr, 10) : null;
        
        if (!startTime || isNaN(startTime)) {
          startTime = Date.now();
          localStorage.setItem(STORAGE_KEY, startTime.toString());
        }
        
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, DURATION_MS - elapsed);
        setTimeLeftMs(remaining);
        
        if (remaining <= 0) {
          clearInterval(interval);
        }
      } catch {
        setTimeLeftMs(prev => Math.max(0, prev - 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isExpired = timeLeftMs <= 0;
  const totalSeconds = Math.floor(timeLeftMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');
  const formattedTime = `${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;

  return {
    isExpired,
    timeLeftMs,
    hours,
    minutes,
    seconds,
    formattedTime,
    totalDurationHours: DURATION_HOURS,
    discountPercent: 20
  };
}
