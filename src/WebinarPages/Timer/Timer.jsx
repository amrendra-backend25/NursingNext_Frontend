import { useState, useEffect } from "react";

const Timer = () => {
  const calculateTimeRemaining = (targetDate) => {
    const timeDifference = targetDate - new Date();
    if (timeDifference > 0) {
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);
      return { hours, minutes, seconds };
    } else {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(() =>
    calculateTimeRemaining(new Date("2024-05-29T16:59:59"))
  );
  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2024-05-29T16:59:59");
    const timer = setInterval(() => {
      const remainingTime = calculateTimeRemaining(targetDate);
      setTimeRemaining(remainingTime);
      if (
        remainingTime.hours === 0 &&
        remainingTime.minutes === 0 &&
        remainingTime.seconds === 0
      ) {
        setSessionExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {sessionExpired ? (
        <p>Booking Closed.</p>
      ) : (
        <p>{`${timeRemaining.hours}: ${timeRemaining.minutes}: ${timeRemaining.seconds} `}</p>
      )}
    </div>
  );
};

export default Timer;
