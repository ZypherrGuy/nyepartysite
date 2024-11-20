import { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const newYear = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`);
    const now = new Date();
    const difference = newYear.getTime() - now.getTime();

    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>{timeLeft.days}</span>
        <small>Days</small>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.hours}</span>
        <small>Hours</small>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.minutes}</span>
        <small>Minutes</small>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.seconds}</span>
        <small>Seconds</small>
      </div>
    </div>
  );
};

export default CountdownTimer;
