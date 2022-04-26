import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [state, setState] = useState({
    seconds: 0,
    minutes: 0,
    start: false,
  });

  useEffect(() => {
    if (state.minutes < 0) setState({ ...state, minutes: 0 });
    if (state.seconds < 0) setState({ ...state, seconds: 0 });
    if (state.seconds > 60) setState({ ...state, seconds: 60 });
    if (state.minutes > 60) setState({ ...state, minutes: 60 });

    setTimeout(() => {
      if (state.start) {
        if (state.seconds === 0) {
          setState((val) => {
            let minutes = val.minutes - 1;
            let seconds = 60;
            return { ...val, minutes, seconds };
          }, 1000);
        }
        setState((val) => {
          let seconds = val.seconds - 1;
          return { ...val, seconds };
        });
      }
    }, 1000);
    if (state.minutes === 0 && state.seconds === 0) stopHandler();
  }, [state]);

  const setTime = (e) => {
    let name = e.target.name;
    let value = e.target.value || 0;
    setState((val) => {
      return { ...val, [name]: value };
    });
  };
  const startHandler = () => {
    setState((val) => {
      return { ...val, start: true };
    });
  };
  const stopHandler = () => {
    setState((val) => {
      return { ...val, start: false };
    });
  };
  return (
    <div>
      <input
        className="m-2"
        placeholder="Minutes"
        name="minutes"
        onChange={setTime}
      />
      <input placeholder="seconds" name="seconds" onChange={setTime} />
      <button onClick={startHandler} className="btn btn-primary m-2">
        Start
      </button>
      <button onClick={stopHandler} className="btn btn-info m-2">
        Stop
      </button>
      <h3>
        Minutes: {state.minutes} | Seconds: {state.seconds}
      </h3>
    </div>
  );
};

export default Timer;
