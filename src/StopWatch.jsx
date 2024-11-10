import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);

      return () => {
        clearInterval(intervalIdRef.current);
      };
    }
  }, [isRunning]);

  let start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  let stop = () => {
    setIsRunning(false);
  };

  let reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  let formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let millSeconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    millSeconds = String(millSeconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${millSeconds}`;
  };

  return (
    <section className="flex flex-col items-center bg-s1 mx-auto container relative top-[20%] py-10 px-2 rounded-xl shadow-500">
      <h1 className="text-center text-[2rem] text-p1 font-semibold">
        STOPWATCH
      </h1>
      <div className="text-[2.5rem] sm:text-[5rem] text-p1 font-semibold mb-10">
        {formatTime()}
      </div>
      <div className="flex flex-row text-[1rem] sm:text-[1.5rem] font-semibold py-4 gap-2 sm:gap-8 text-p1 cursor-pointer">
        <button
          className="px-4 sm:px-10 py-3 rounded-2xl border-[3px] border-s2 hover:bg-s2 hover:-translate-y-2 ease-in-out duration-500 hover:shadow-500"
          onClick={start}
        >
          Start
        </button>
        <button
          className="px-4 sm:px-10 py-3 rounded-2xl border-[3px] border-s2 hover:bg-s2 hover:-translate-y-2 ease-in-out duration-500 hover:shadow-500"
          onClick={stop}
        >
          Stop
        </button>
        <button
          className="px-4 sm:px-10 py-3 rounded-2xl border-[3px] border-s2 hover:bg-s2 hover:-translate-y-2 ease-in-out duration-500 hover:shadow-500"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default StopWatch;
