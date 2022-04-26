import Stopwatch from "./components/StopWatch";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Timer from "./components/Timer";
import { useState } from "react";
function App() {
  const [option, setOption] = useState(true);

  const timer = () => {
    setOption(false);
  };
  const stopwatch = () => {
    setOption(true);
  };
  return (
    <>
      <div className="container mt-5">
        <button
          onClick={timer}
          className="inline btn btn-primary m-2"
          style={{ marginLeft: "20rem" }}
        >
          Timer
        </button>
        <button onClick={stopwatch} className="inline btn btn-primary m-2">
          Stop Watch
        </button>
        {option ? (
          <div class="card">
            <div class="card-body">
              <h1>Stop Watch</h1>
              <Stopwatch />
            </div>
          </div>
        ) : (
          <div class="card">
            <div class="card-body">
              <h1>Timer</h1>
              <Timer />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
