import React from "react";

const One = () => {
  return (
    <>
      <div className="first-letter m-6 grid place-content-center h-screen">
        <h1 className="bg-slate-950 text-yellow-400 text-4xl">test</h1>
        <div className="">
          <div className="p-6 max-w-sm mx-auto bg-stone-800 rounded-2xl shadow-lg flex items-center space-x-4">
            <div>
              <img
                className="h-12 w-12 rounded-md"
                src="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg"
                alt="one"
              />
            </div>

            <div className="text-2xl font-medium text-white">
              Tailwind css
              <p className="text-slate-500 text-base">By Sukhdeb</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default One;
