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
    <div className="w-full h-full 200 relative overflow-auto overflow-x-hidden chat-dds">
      <h1 className="flex gap-2 items-center w-full h-20 z-20 backdrop-blur-md sticky chat-head  p-5 top-0">
        {" "}
        <Icon icon="ic:baseline-chat-bubble" color="#1e40af" />
        Chat
      </h1>
      <div className="chat-display w-full min-h-6/6 bg-gradient-to-tr mb-40 relative flex flex-col">
        <div
          className="bgimg w-full relative top-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3NtYWxsZGVzaWduY29tcGFueTAxX2FfY3V0ZV9pbGx1c3RyYXRpb25fb2ZfY29tcGFjdF9jaXR5X3ZpZXdfbV8yOWUwZDM5YS02MjI3LTQ4NjktODUwNi0wODIwMjFjN2IxODlfMS5qcGc.jpg')`,
          }}
        >
          <div className="msg-disp top-0 absolute z-10">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
        </div>
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
