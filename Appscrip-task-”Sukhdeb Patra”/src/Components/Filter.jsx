import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const Filter = () => {
  return (
    <>
      <hr />

      <div className="rowOne">
        <div className="col">3425</div>
        <div className="col">
          <FaAngleLeft /> <span>Hide Filter</span>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Filter;
