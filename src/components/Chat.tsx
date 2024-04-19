import { useState } from "react";

import { Icon } from "@iconify/react";

function Chat() {
  const [full, setFull] = useState(false);

  function sizing() {
    setFull(!full);
    console.log(full);
  }
  return (
    <div className="w-full h-full bg-gray-200 p-6 relative">
      <h1 className="flex gap-2 items-center">
        {" "}
        <Icon icon="ic:baseline-chat-bubble" color="#1e40af" />
        Chat
      </h1>

      <p
        onClick={() => sizing()}
        className="absolute h-full w-10 bg-gray-200 top-0 right-0 z-20 flex justify-center hover:bg-gray-300 duration-100 hover:pl-3 items-center"
      >
        <Icon icon="ic:outline-arrow-forward-ios" />
      </p>
    </div>
  );
}

export default Chat;
