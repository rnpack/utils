import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface UseTimerReturns {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface UseTimerProps {
  targetDate?: number;
  timeInterval?: number;
}

function useTimer(
  props: UseTimerProps = { timeInterval: 100 }
): UseTimerReturns {
  const today = new Date();
  const todayUnix = today?.getTime();

  const timeIntervalRef = useRef<NodeJS.Timeout>();

  const durationDate = useMemo(
    () => (props?.targetDate ? new Date(props?.targetDate) : new Date()),
    [props?.targetDate]
  );

  const durationDateUnix = durationDate?.getTime();

  const [timer, setTimer] = useState(durationDateUnix - todayUnix);

  useEffect(() => {
    const timeDifference = durationDateUnix - todayUnix;

    if (timeDifference > 0) {
      timeIntervalRef.current = setInterval(() => {
        setTimer(durationDateUnix - todayUnix);
      }, props?.timeInterval);
    } else {
      if (timeIntervalRef?.current) {
        clearInterval(timeIntervalRef?.current);
      }
    }

    return () => clearInterval(timeIntervalRef?.current);
  }, [durationDateUnix, durationDate, props?.timeInterval, todayUnix]);

  const getReturnValues = useCallback(() => {
    const days = Math.floor(timer / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timer % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, [timer]);

  return getReturnValues();
}

export type { UseTimerProps, UseTimerReturns };
export { useTimer };
