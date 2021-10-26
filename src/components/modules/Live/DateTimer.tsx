import { useEffect, useState, VFC } from "react";

const DateTimer = (endT: string) => {
  const [dMilliS, setdMilliS] = useState(0);
  const [dSec, setdSec] = useState(0);
  const [dMin, setdMin] = useState(0);
  const [dHours, setdHour] = useState(0);
  const [dDays, setdDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const ET = Date.parse(endT);
      const difMilliS = ET - now;
      setdMilliS(difMilliS);
      const difSec = Math.floor((difMilliS % (1000 * 60)) / 1000);
      setdSec(difSec);
      const difMin = Math.floor((difMilliS % (1000 * 60 * 60)) / (1000 * 60));
      setdMin(difMin);
      const difHour = Math.floor(
        (difMilliS % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setdHour(difHour);
      const difDay = Math.floor(difMilliS / (1000 * 60 * 60 * 24));
      setdDays(difDay);
    }, 1000);
    return () => clearInterval(interval);
  }, [endT]);

  return {
    ms: dMilliS,
    sec: dSec,
    min: dMin,
    hour: dHours,
    day: dDays,
  };
};

export default DateTimer;
