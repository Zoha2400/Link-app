import React from "react";

import { Icon } from "@iconify/react";

function Chat() {
  return (
    <div className="w-full h-full bg-gray-200 p-6">
      <h1 className="flex gap-2 items-center">
        {" "}
        <Icon icon="ic:baseline-chat-bubble" color="#1e40af" />
        Chat
      </h1>
    </div>
  );
}

export default Chat;
