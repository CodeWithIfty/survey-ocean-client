import React, { useEffect, useState } from "react";

const Timer = ({ durationInSeconds, onTimerExpired }) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          onTimerExpired(); // Trigger a function when timer expires
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [durationInSeconds, onTimerExpired]);

  const secondsLeft = durationInSeconds - timeLeft;

  const progress = (secondsLeft / durationInSeconds) * 100;

  return (
    <div>
      <div>
        <p className="font-sans">Time left: {timeLeft} sec</p>
      </div>
      <div style={{ width: "100%", height: "10px", backgroundColor: "#ccc" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "green",
          }}
        />
      </div>
    </div>
  );
};

export default Timer;
