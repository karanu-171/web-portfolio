import React from "react";

const Services = () => {
  return (
    <section name="services" id="services" className="bg-zinc-50 min-h-[80vh]">
      <div className="container mx-auto py-10 lg:pb-14">
        <div>
          <p className="text-xl md:text-2xl font-semibold text-center">
            Services
          </p>
        </div>
        <div className="aboutUnderline mx-auto my-1"></div>

        {/* tools and services */}
        <div
          id="main-container"
          className="my-8 p-6 md:p-4   grid  md:grid-cols-2 lg:grid-cols-3 grid-rows-2 md:grid-rows-3 lg:grid-rows-2  gap-6 "
        >
          {/* services */}

          <div
            id="services"
            className="border-white shadow-lg rounded-md bg-white"
          >
            <div>
              <img
                src="/pics/web-g413f50a65_1280.jpg"
                className="h-[180px]  rounded-t-md w-full object-cover"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-center my-4 text-sm font-semibold">
                Web Development
              </p>
            </div>
          </div>

          <div
            id="services"
            className="border border-sky-200 shadow-lg p-3 order-3  lg:order-2 md:col-span-2 md:row-span-2  rounded-md"
          >
            <div className="mx-3">
              <p className=" text-blue-900  my-4 md:text-md font-semibold text-center">
                Programming Languages and Tools
              </p>
            </div>
            <div className="grid gap-4  grid-cols-3 md:grid-cols-4 grid-rows-3 ">
              <div className="tools">
                <img
                  src="/pics/icons8-react.svg"
                  className="icon-size"
                  alt=""
                />
                <p className="tools-text">React JS</p>
              </div>
              <div className="tools">
                <img
                  src="/pics/icons8-node-js.svg"
                  className="icon-size"
                  alt=""
                />
                <p className="tools-text">Node JS</p>
              </div>
              <div className="tools">
                <img
                  src="/pics/icons8-tailwindcss.svg"
                  className="icon-size"
                  alt=""
                />
                <p className="tools-text">Tailwind CSS</p>
              </div>
              <div className="tools">
                <img
                  src="/pics/icons8-redux.svg"
                  className="icon-size"
                  alt=""
                />
                <p className="tools-text">Redux</p>
              </div>
              <div className="tools">
                <img
                  src="/pics/icons8-mongodb.svg"
                  className="icon-size"
                  alt=""
                />
                <p className="tools-text">Mongo DB</p>
              </div>
              <div className="tools">
                <img
                  src="/pics/icons8-javascript-logo.svg"
                  className="icon-size"
                  alt=""
                />
                <p className="tools-text">JavaScript</p>
              </div>
              <div className="tools">
                <img
                  src="/pics/icons8-mysql-logo.svg"
                  className="icon-size"
                  alt=""
                />
                <p className="tools-text">My Sql</p>
              </div>
              <div className="tools">
                <img
                  src="/pics/icons8-typescript.svg"
                  className="icon-size"
                  alt=""
                />
                <p className="tools-text">TypeScript</p>
              </div>
              <div className="tools">
                <img
                  src="/pics/icons8-html-5.svg"
                  className="icon-size"
                  alt=""
                />
                <p className="tools-text">HTML 5</p>
              </div>

              <div className="tools">
                <img src="/pics/icons8-css3.svg" className="icon-size" alt="" />
                <p className="tools-text">CSS 3</p>
              </div>

              <div className="tools">
                <img src="/pics/icons8-git.svg" className="icon-size" alt="" />
                <p className="tools-text">Git</p>
              </div>
            </div>
          </div>

          <div
            id="services"
            className=" lg:order-3 rounded-md  border-white shadow-lg bg-white"
          >
            <div className="">
              <img
                src="/pics/web-design-g4b18c5b33_1280.jpg"
                className="h-[180px]   w-full rounded-t-md object-cover"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-center my-4 text-sm font-semibold">
                Responsive Web Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
