import React from "react";

const WebPage = () => {
  return (
    <>
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
        <div className="text-2xl text-indigo-700 font-bold"> Pw Skills</div>
        <ul className="md:flex font-semibold hidden">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About Us</li>
          <li className="mx-[10px] cursor-pointer"> Contact Us</li>
        </ul>
        <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded-md font-bold cursor-pointer">
          Login/SignUp
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
      {/* navbar ends here  */}
      <header className="w-full h-auto">
        <img
          className="w-full hidden md:block "
          src="https://images.pexels.com/photos/21315786/pexels-photo-21315786/free-photo-of-photo-of-a-total-solar-eclipse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="w-full md:hidden"
          src="https://images.pexels.com/photos/566193/pexels-photo-566193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </header>
      {/* our students section  */}
      <div className="h-auto w-100 flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex-wrap flex-col items-center text-center">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            "Pure Hardwork"
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12 text-center"></div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly">
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-35 h-10 "
              src="https://images.pexels.com/photos/30079555/pexels-photo-30079555/free-photo-of-crescent-moon-over-silhouetted-branches-at-twilight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="text-3xl font-bold text-yellow-500">600+</p>
            <p className="text-3xl font-bold text-gray-500">Diffrent Courses</p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-35 h-10 "
              src="https://images.pexels.com/photos/30079555/pexels-photo-30079555/free-photo-of-crescent-moon-over-silhouetted-branches-at-twilight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="text-3xl font-bold text-yellow-500">600+</p>
            <p className="text-3xl font-bold text-gray-500">Diffrent Courses</p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-35 h-10 "
              src="https://images.pexels.com/photos/30079555/pexels-photo-30079555/free-photo-of-crescent-moon-over-silhouetted-branches-at-twilight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="text-3xl font-bold text-yellow-500">600+</p>
            <p className="text-3xl font-bold text-gray-500">Diffrent Courses</p>
          </div>
        </div>
      </div>
      {/* our students section ends  */}

      {/* our Product section  */}
      <div className="h-auto w-100 flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex-wrap flex-col items-center text-center">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            "Our Product"
          </p>
          <div className="w-36 text-center h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12 "></div>
        </div>{" "}
        <div className="w-[100%] h-auto flex flex-wrap justify-around">
          <div className="w-60 flex flex-col items-center mb-12 border-gray-400 border-2 rounded-xl p-2">
            <img
              className="w-20 h-10"
              src="https://images.pexels.com/photos/14686005/pexels-photo-14686005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="text-center text-xl font-bold text-green-500">
              PW Skils lab
            </p>
            <p className="text-center text-sm font-bold text-gray-500">
              Super charge yout project development with Our Robust lab
            </p>
          </div>
          <div className="w-60 flex flex-col items-center mb-12 border-gray-400 border-2 rounded-xl p-2">
            <img
              className="w-20 h-10"
              src="https://images.pexels.com/photos/14686005/pexels-photo-14686005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="text-center text-xl font-bold text-green-500">
              PW Skils lab
            </p>
            <p className="text-center text-sm font-bold text-gray-500">
              Super charge yout project development with Our Robust lab
            </p>
          </div>
          <div className="w-60 flex flex-col items-center mb-12 border-gray-400 border-2 rounded-xl p-2">
            <img
              className="w-20 h-10"
              src="https://images.pexels.com/photos/14686005/pexels-photo-14686005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="text-center text-xl font-bold text-green-500">
              PW Skils lab
            </p>
            <p className="text-center text-sm font-bold text-gray-500">
              Super charge yout project development with Our Robust lab
            </p>
          </div>
          <div className="w-60 flex flex-col items-center mb-12 border-gray-400 border-2 rounded-xl p-2">
            <img
              className="w-20 h-10"
              src="https://images.pexels.com/photos/14686005/pexels-photo-14686005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="text-center text-xl font-bold text-green-500">
              PW Skils lab
            </p>
            <p className="text-center text-sm font-bold text-gray-500">
              Super charge yout project development with Our Robust lab
            </p>
          </div>
          <div className="w-60 flex flex-col items-center mb-12 border-gray-400 border-2 rounded-xl p-2">
            <img
              className="w-20 h-10"
              src="https://images.pexels.com/photos/14686005/pexels-photo-14686005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="text-center text-xl font-bold text-green-500">
              PW Skils lab
            </p>
            <p className="text-center text-sm font-bold text-gray-500">
              Super charge yout project development with Our Robust lab
            </p>
          </div>
        </div>
      </div>

      {/* footer  */}
      <footer className="w-full bg-gray-900 px-4 text-blue-400 pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
        <div className="">
          <img
            className="w-8 h-5"
            src="https://images.pexels.com/photos/16850988/pexels-photo-16850988/free-photo-of-view-of-the-night-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p className="my-4">Email us</p>
          <img
            className="w-8 h-4"
            src="https://images.pexels.com/photos/21298470/pexels-photo-21298470/free-photo-of-crescent-moon-in-space.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
            <h2 className="font-bold text-xl mt-4">Pw Skils</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
            <div >
            <p>About us</p>
            <p>FAQS</p>
            <p>Privacy Policy</p>
        </div> 
        </div>
        <div>
            <h2 className="font-bold text-xl mt-4">Pw Skils</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
            <div >
            <p>About us</p>
            <p>FAQS</p>
            <p>Privacy Policy</p>
        </div> 
        </div>
        <div>
            <h2 className="font-bold text-xl mt-4">Pw Skils</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
            <div >
            <p>About us</p>
            <p>FAQS</p>
            <p>Privacy Policy</p>
        </div> 
        </div>
      </footer>
    </>
  );
};

export default WebPage;
