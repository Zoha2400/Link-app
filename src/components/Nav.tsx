import React from "react";

function Nav() {
  return (
    <div className="h-full w-full">
      <p className="icon flex justify-center content-center flex-col">
        <span className="icon-letter text-6xl p-2 hover:bg-blue-900 rounded-3xl duration-150 cursor-pointer flex justify-center content-center">
          LM
        </span>
        {/* <span className="justify-center flex content-center text-lg">
          LinkMemo
        </span> */}
      </p>
    </div>
  );
}

export default Nav;
