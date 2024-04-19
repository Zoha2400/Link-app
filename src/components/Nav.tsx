import { Icon } from "@iconify/react";

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

      <div className="btn-sections h-5/6 flex justify-center flex-col">
        <p className=" hover:bg-blue-900 rounded-3xl w-full h-24 duration-150 cursor-pointer flex justify-center content-center  items-center">
          <Icon icon="ic:baseline-fullscreen" />
        </p>
        <p className=" hover:bg-blue-900 rounded-3xl w-full h-24 duration-150 cursor-pointer flex justify-center content-center  items-center">
          <Icon icon="ic:sharp-notifications" />
        </p>
        <p className=" hover:bg-blue-900 rounded-3xl w-full h-24 duration-150 cursor-pointer flex justify-center content-center items-center">
          <Icon icon="ic:baseline-settings" />
        </p>
        <p className=" hover:bg-blue-900 rounded-3xl w-full h-24 duration-150 cursor-pointer flex justify-center content-center items-center">
          <Icon icon="ic:baseline-account-circle" />
        </p>
      </div>
    </div>
  );
}

export default Nav;
