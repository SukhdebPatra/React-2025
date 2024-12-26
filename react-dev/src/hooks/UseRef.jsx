import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    // focus the input element
    inputRef.current.focus();
  }, []);
  return (
    <>
      <h2>This is a example of useRef hook</h2>
      <div>
        <input
          className="form-control"
          ref={inputRef}
          type="text"
          name=""
          id=""
        />
      </div>
    </>
  );
};

export default UseRef;
