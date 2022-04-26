import React from "react";
import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [state, setState] = useState({
    miliSeconds: 0,
    seconds: 0,
    toggle: false,
  });
  useEffect(() => {
    if (state.toggle) {
      setTimeout(() => {
        if (state.miliSeconds === 100) {
          setState((val) => {
            let seconds = val.seconds + 1;
            let miliSeconds = 0;
            return { ...val, seconds, miliSeconds };
          });
        }
        setState((val) => {
          let miliSeconds = val.miliSeconds + 1;
          return { ...val, miliSeconds };
        });
      }, 10);
    }
  }, [state]);

  const start = () => {
    setState((val) => {
      return { ...val, toggle: true };
    });
  };
  const stop = () => {
    setState((val) => {
      return { ...val, toggle: false };
    });
  };

  return (
    <div>
      <button onClick={start} className="btn btn-success">
        Start
      </button>
      <button onClick={stop} className="btn btn-info m-2">
        Stop
      </button>

      {state.seconds < 10 || state.miliSeconds < 10 ? (
        state.seconds < 10 ? (
          <h1 className="m-5">
            0{state.seconds} : {state.miliSeconds}
          </h1>
        ) : (
          <h1 className="m-5">
            {state.seconds} : 0{state.miliSeconds}
          </h1>
        )
      ) : (
        <h1 className="m-5">
          {state.seconds} : {state.miliSeconds}
        </h1>
      )}
    </div>
  );
};

export default Stopwatch;
