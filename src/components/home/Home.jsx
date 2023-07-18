import React from "react";
import { Link, AnimateScroll as scroll } from "react-scroll";
import { BsGithub } from "react-icons/bs";

import "./home.css";

export const Home = () => {
  return (
    <div>
      <section
        id="landing"
        name="Landing"
        className="bg-gray-50 py-10 pt-24 md:pt-36 min-h-[80vh]"
      >
        <div className="container mx-auto lg:flex lg:space-x-8">
          {/* intro */}
          <div className="w-full  md:pt-2  lg:w-1/2 ">
            <div className="px-4  lg:w-3/4  mx-auto">
              <h2 className="text-3xl px-4 font-bold drop-shadow-sm lg:text-4xl">
                Hey, I'm
                <div className="text-3xl my-2 md:my-2  lg:text-4xl">
                  Brian Musili
                </div>
              </h2>

              <div className="w-full px-4 my-3 md:text-xl   md:my-8 font-semibold">
                <span className="text-blue-600 text-xl mb-4 md:text-xl ">
                  Junior Full Stack Developer
                  <br />
                </span>
                <p className="mt-4 ">
                  Let's code!, let's build something amazing together!
                  <br />
                  Welcome To
                  <span className="text-blue-600"> My Profile</span>
                </p>
              </div>

              {/* buttons */}

              <div className="flex px-2 my-6  w-full justify-between flex-wrap ">
                <Link
                  to={"contact"}
                  className="hidden md:block font-bold hover:text-blue-600 duration-500"
                  smooth="true"
                  offset={30}
                  duration={500}
                >
                  <button className="btn">Hire Me</button>
                </Link>
                <a
                  href="http://github.com/MusiliC/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn flex items-center space-x-2">
                    <BsGithub size={20} />
                    <p>Github</p>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* image */}

          <div className="w-full lg:w-1/2 ">
            <img
              src="/pics/interface-gad897d0ae_1280.png"
              className="mx-auto h-[270px] w-[270px] object-cover rounded-full md:h-[350px] md:w-[350px] "
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};
