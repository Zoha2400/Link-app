import React from "react";

function Info() {
  return (
    <div className="w-full h-full relative text-black">
      <div className="pers-info flex justify-center items-center gap-3 flex-col pt-5">
        <div className="img w-80 h-80 bg-gray-600 rounded-full hover:rounded-3xl duration-700 ease-in-out">
          <img src="" alt="" />
        </div>
        <div className="text-info flex justify-center flex-col">
          <p className="text-black text-3xl text-center">Name Surname</p>
          <p className="text-black text-lg text-center font-light">
            smth@gmail.com
          </p>
          <p className="text-black text-lg text-center text-purple-800 font-extralight">
            Joined 3 march 2018
          </p>
        </div>
      </div>
      <div className="info  flex justify-center items-center flex-col *:text-start *:w-10/12 mt-10 *:text-lg *:cursor-pointer *:duration-100">
        <p className="text-blue-500 hover:ml-5">Links - 1564</p>
        <p className="text-green-500 hover:ml-5">Messages - 5465</p>
        <p className="text-gray-500 hover:ml-5">Pictures - 12</p>
        <p className="text-red-400 hover:ml-5">Files - 57</p>
      </div>

      <div className="buttons absolute flex justify-center gap-2 text-lg items-center flex-col bottom-0 p-5 z-30  w-full h-auto">
        <button className="change w-10/12 bg-gray-300 hover:shadow-lg hover:w-11/12 duration-100 rounded-lg">
          FAQ
        </button>
        <button className="change w-10/12 bg-red-400 hover:shadow-lg hover:bg-red-500 hover:w-11/12 duration-100 text-white rounded-lg">
          Quit account
        </button>
      </div>
    </div>
  );
}

export default Info;
