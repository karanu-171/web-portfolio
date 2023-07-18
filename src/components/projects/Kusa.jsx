import React from "react";

const Kusa = () => {
  return (
    <div className="h-[420px] md:h-[450px] lg:h-[420px]  flex flex-col rounded-md border">
      <div>
        <img
          src="/pics/kusa-system.png"
          alt=""
          className="h-[200px] bg-zinc-50  w-full rounded-t-md object-contain lg:object-fill"
        />
      </div>
      <div className="my-6 w-[90%] mx-auto">
        <p className="text-sm">
          KUSA system - react, socket
          io, node js - automated fixture generation, live game
          transmission and league table generation.
        </p>
      </div>
      <div className="w-[90%] mx-auto mt-4">
        <p className="p-2 mt-3  underline font-semibold text-blue-800 bg-zinc-200 rounded-lg">
          https://github.com/MusiliC/KUSA-system
        </p>
      </div>
    </div>
  );
};

export default Kusa;
