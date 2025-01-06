import { useState } from "react";

const CounterEx = () => {
  const [counter, setCounter] = useState(0);
  const handleInc = () => {
    // setCounter(counter + 1);

    if (counter < 10) {
      setCounter((pre) => pre + 1);
    }
  };
  const handleDec = () => {
    // setCounter(counter - 1);
    if (counter > 0) {
      setCounter((pre) => pre - 1);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <button className="btn btn-dark" onClick={handleInc}>
              INC
            </button>
          </div>
          <div className="col-3">
            <h4>Counter :{counter}</h4>
          </div>
          <div className="col-3">
            <button className="btn btn-dark " onClick={handleDec}>
              Dec
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterEx;
