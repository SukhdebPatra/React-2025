import React from "react";

const ResponsiveDesign = () => {
  return (
    <>
      <button className="bg-sky-500 'text-center' mt-2 text-white text-base p-2 rounded-xl dark:bg-red-600 hover:bg-white hover:text-black ">
        Buy Now
      </button>
      <div className="text-center my-4">
        <p className="text-black md:text-green-500 sm:text-red-600">
          Lorem ipsum dolor
        </p>
      </div>
      <div className="mt-3">
        <div className="max-w-sm mx-auto bg-slate-500 rounded-xl  overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div>
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="https://images.pexels.com/photos/29399294/pexels-photo-29399294/free-photo-of-serene-winter-landscape-with-snowy-mountains.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-200 font-semibold">
                A card
              </div>
              <a
                href=""
                className="block mt-1 text-lg font-medium text-white hover:text-black"
              >
                Tailwind Css is amazimg once you understant the power of
              </a>
              <p className="mt-2 text-slate-400">
                it Lorem ipsum, dolor sit amet
                <span className="bg-yellow-300 p-[2px] px-[14px]">
                  consectetur
                </span>
                adipisicing elit. Omnis sunt neque ipsam magnam praesentium
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveDesign;
