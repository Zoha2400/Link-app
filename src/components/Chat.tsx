import { useState } from "react";

import { Icon } from "@iconify/react";
import "../App.css";
import Message from "./Message";

function Chat() {
  const [full, setFull] = useState(false);

  function sizing() {
    setFull(!full);
    console.log(full);
  }
  return (
    <div className="w-full h-full bg-gray-200 relative overflow-auto overflow-x-hidden chat-dds">
      <h1 className="flex gap-2 items-center w-full h-20  backdrop-blur-md sticky chat-head  p-5 top-0">
        {" "}
        <Icon icon="ic:baseline-chat-bubble" color="#1e40af" />
        Chat
      </h1>
      <div className="chat-display w-full min-h-screen bg-gray-300 ">
        <Message />
      </div>
      {/* <p
        onClick={() => sizing()}
        className="absolute h-full w-10 bg-gray-200 top-0 right-0 z-20 flex justify-center hover:bg-gray-300 duration-100 hover:pl-3 items-center"
      >
        <Icon icon="ic:outline-arrow-forward-ios" />
      </p> */}
    </div>
  );
}

export default Chat;
