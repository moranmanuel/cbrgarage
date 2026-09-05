'use client';

import { useEffect, useState } from 'react';

const OPENING_DATE = new Date('2026-09-14T08:00:00-03:00').getTime();

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function getRemaining(): Remaining | null {
  const distance = OPENING_DATE - Date.now();
  if (distance <= 0) return null;
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  };
}

export function Countdown() {
  const [remaining, setRemaining] = useState<Remaining | null | undefined>();

  useEffect(() => {
    const update = () => setRemaining(getRemaining());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (remaining === null) {
    return <div className="countdown-open"><span className="pulse" /><div><small>CBR Garage</small><strong>¡Ya abrimos!</strong></div></div>;
  }

  const values = remaining ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return (
    <div className="countdown" aria-live="polite" aria-label="Tiempo restante para la apertura">
      <small>Abrimos el 14 de septiembre</small>
      <div className="countdown-grid">
        <span><strong>{String(values.days).padStart(2, '0')}</strong><em>días</em></span>
        <span><strong>{String(values.hours).padStart(2, '0')}</strong><em>hs</em></span>
        <span><strong>{String(values.minutes).padStart(2, '0')}</strong><em>min</em></span>
        <span><strong>{String(values.seconds).padStart(2, '0')}</strong><em>seg</em></span>
      </div>
    </div>
  );
}
