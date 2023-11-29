import { useEffect, useState } from "react";
import Loader from "../../../components/shared/Loader";

const Timer = ({ durationInSeconds, onTimerExpired, isLoading }) => {
  const [timeLeft, setTimeLeft] = useState(parseFloat(durationInSeconds));
  console.log(timeLeft);
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
  }, [durationInSeconds, onTimerExpired, timeLeft]);

  const secondsLeft = durationInSeconds - timeLeft;

  const progress = (secondsLeft / durationInSeconds) * 100;

  return (
    <div>
      {!timeLeft ? (
        <Loader />
      ) : (
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
