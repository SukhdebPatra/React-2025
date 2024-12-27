import React, { useEffect, useRef, useState } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  //   useEffect(() => {

  //   }, []);

  const clareInterValHandler = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
  };
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  };
  return (
    <>
      {" "}
      <h2>Timer example with useRef</h2>
      <div style={{ marginTop: "10px" }}>
        Hook Timer - {timer}
        <button
          style={{
            borderRadius: "10px",
            backgroundColor: "violet",
            marginLeft: "6%",
          }}
          onClick={startTimer}
        >
          Start TImer
        </button>
        <button
          style={{
            marginLeft: "1%",
            borderRadius: "10px",
            backgroundColor: "palevioletred",
            marginTop: "3%",
          }}
          onClick={clareInterValHandler}
        >
          Clear hook Timer
        </button>
      </div>
    </>
  );
};

export default HookTimer;
