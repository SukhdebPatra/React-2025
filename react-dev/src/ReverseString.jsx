import React, { useEffect, useState } from "react";

const ReverseString = () => {
  const [reverseData, setReverseData] = useState([]);
  // let data='please revese me'

  function revrese(str) {
    let data = "";
    for (let i = str.length - 1; i >= 0; i--) {
      data += str[i];
    }
    return data;
  }
  useEffect(() => {
    setReverseData(revrese("hi there"));
  }, []);

  return (
    <>
      <div className="container">
        {/* <h4>ReverseString</h4> */}
        {/* {reverseData} */}
      </div>
    </>
  );
};

export default ReverseString;
