import React from "react";

const Budget = () => {
  return (
    <div className="h-[420px] md:h-[450px] lg:h-[420px]  flex flex-col rounded-md border">
    <div>
      <img
        src="/pics/budget-tracker.png"
        alt=""
        className="h-[200px] bg-zinc-50  w-full rounded-t-md object-contain lg:object-fill"
      />
    </div>
    <div className="my-6 w-[90%] mx-auto">
      <p className="text-sm">
      Budget tracker is a web app used to track your income
      with respect to your spending habits and shows you how
      well you utilize your money
      </p>
    </div>
    <div className="w-[90%] mx-auto">
      <p className="p-2 mt-3  underline font-semibold text-blue-800 bg-zinc-200 rounded-lg">
      https://github.com/karanu-171/budget-tracker
      </p>
    </div>
  </div>
  );
};

export default Budget;
