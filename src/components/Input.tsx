import { Icon } from "@iconify/react";

function Input() {
  return (
    <div className=" absolute z-10 bottom-0 w-full h-32 font-normal flex justify-center items-center backdrop-blur-lg">
      <div className="input w-11/12 h-4/6 bg-white flex justify-center content-center rounded-3xl shadow-gray shadow-2xl overflow-hidden">
        <input
          type="text"
          className="w-11/12 rounded-3xl p-6 text-xl font-light border-none outline-none"
          placeholder="Send something..."
        />
        <button className="w-1/12 hover:bg-blue-700 hover:text-white duration-100 rounded-3xl flex justify-center items-center">
          <Icon icon="ic:baseline-send" />
        </button>
      </div>
    </div>
  );
}

export default Input;
