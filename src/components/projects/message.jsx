import React from "react";

const Message = () => {
  return (
    <div className="h-[420px] md:h-[450px] lg:h-[420px]  flex flex-col rounded-md border">
    <div>
      <img
        src="/pics/chat-app.png"
        alt=""
        className="h-[200px] bg-zinc-50  w-full rounded-t-md object-contain lg:object-fill"
      />
    </div>
    <div className="my-6 w-[90%] mx-auto mt-4">
      <p className="text-sm">
      Message app is a web based messaging app 
      where people can join and send messages to each 
      other. Developed using mern technologies
      </p>
    </div>
    <div className="w-[90%] mx-auto">
      <p className="p-2 mt-3  underline font-semibold text-blue-800 bg-zinc-200 rounded-lg">
        https://github.com/karanu-171/message-app
      </p>
    </div>
  </div>
  );
};

export default Message;
