import React, { useState, useEffect } from "react";
import "./CountDown.css";

const CountDownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    const value =
      timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval];

    timerComponents.push(
      <div key={interval} className="timer-box">
        {value}
        <span className="time-label">
          {interval === "hrs" && timeLeft[interval] === 0
            ? "hr"
            : interval === "min" && timeLeft[interval] === 0
            ? "min"
            : interval}
        </span>
      </div>
    );
  });

  return (
    <div className="time-main">
      {/* <div className="timer_haed">Offer ends in...</div> */}
      {timerComponents.length ? timerComponents : <p>Registration Closed!</p>}
    </div>
  );
};

export default CountDownTimer;
