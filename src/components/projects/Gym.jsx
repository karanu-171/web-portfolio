import React from "react";

const Gym = () => {
  return (
    <div className=" h-[400px] md:h-[450px] lg:h-[420px] flex flex-col rounded-md border">
      <div>
        <img
          src="/pics/gym-screenshot.png"
          className="h-[200px] bg-zinc-50   w-full rounded-t-md object-contain lg:object-fill"
          alt=""
        />
      </div>
      <div className="my-6 w-[90%] mx-auto">
        <p className="text-sm">
          Gym app site made with react, typescript , react-framer-motion is a
          complete website with great ux experience. Link below:
        </p>
      </div>
      <div className="w-[90%] mx-auto md:mt-16 lg:mt-14  ">
        <p className="text-blue-800 font-semibold underline">
          <a
            href="https://a4718aa7.gym-typescript-61v.pages.dev/"
            target="_blank"
            className="p-2 bg-zinc-200 rounded-lg"
            rel="noopener noreferrer"
          >
            Gym app site link
          </a>
        </p>
      </div>
    </div>
  );
};

export default Gym;
