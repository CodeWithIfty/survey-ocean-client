import { useEffect, useState } from "react";

const Timer = ({ durationInSeconds, onTimerExpired }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (typeof durationInSeconds === "number" && durationInSeconds > 0) {
      setTimeLeft(durationInSeconds);
    } else {
      setTimeLeft(null);
    }
  }, [durationInSeconds]);

  useEffect(() => {
    if (timeLeft === null) {
      return; // Don't start the timer if timeLeft is not set
    }

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
  }, [timeLeft, onTimerExpired]);

  const secondsLeft = durationInSeconds - timeLeft;

  const progress = durationInSeconds
    ? (secondsLeft / durationInSeconds) * 100
    : 0;

  return (
    <div>
      {timeLeft !== null && timeLeft > 0 && (
        <div className="">
          <div>
            <p className="font-sans">Time left: {timeLeft} sec</p>
          </div>
          <div
            style={{ width: "100%", height: "10px", backgroundColor: "#ccc" }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: "green",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
