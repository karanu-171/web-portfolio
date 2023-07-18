import React from "react";

const Mern = () => {
  return (
    <div className="h-[450px]  lg:h-[420px] flex flex-col rounded-md   border">
      <div>
        <img
          src="/pics/mern.png"
          className="h-[200px] bg-zinc-50  w-full rounded-t-md object-contain lg:object-fill"
          alt=""
        />
      </div>
      <div className="my-6 w-[90%] mx-auto">
        <p className="text-sm">
          Mern stack project created with React JS, Node JS is a full mern stack
          app with both authentication and authorization role based system. With
          no much focus on the CSS the system provides unique functionalities
          depending on user role.
        </p>
      </div>
      <div className="w-[90%] mx-auto lg:mt-4">
        <p className="text-blue-800 font-semibold underline">
          <a
            href="https://technotes-o6u8.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-zinc-200 rounded-lg"
          >
            Mern stack project link
          </a>
        </p>
      </div>
    </div>
  );
};

export default Mern;
