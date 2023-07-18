import React from "react";
import { Link, AnimateScroll as scroll } from "react-scroll";

const About = () => {
  return (
    <section name="About" id="about" className="min-h-[80vh]">
      <div className=" container mx-auto lg:py-12">
        <div className=" pt-6 lg:pt-0">
          <p className="text-xl  md:text-2xl font-semibold text-center">
            About Me
          </p>
          <div className="aboutUnderline mx-auto "></div>
        </div>

        <div className="lg:flex justify-between mt-6 md:mt-10">
          {/* picture */}
          <div className="sm:mt-3 md:mt-0 lg:w-1/2 py-2">
            <img
              src="./pics/musili.jpg"
              alt=""
              className=" mx-auto rounded-full object-contain bg-gray-100 shadow-lg drop-shadow-sm  h-[250px] w-[250px] md:h-[300px] md:w-[300px] "
            />
          </div>

          {/* about me */}

          <div className="lg:w-1/2 mt-6 md:mt-0 py-4 ">
            <p className="mx-auto text-sm w-[90%] ">
              I’m a Full stack Developer located in Nairobi, Kenya, passionate
              about building robust, beautiful and clean experiences for my
              users. I enjoy taking complex concepts and turning them into
              simple and beautiful interface designs. I look at languages and
              frameworks as just tools that help bring an idea to life, thus I
              learn what needs to be learnt in order to build what needs to be
              built.
            </p>
            <br />
            <p className=" mx-auto w-[90%]  font-semibold">
              <span className="font-bold">Skills: </span>
              JavaScript, React, TypeScript, Express, Node, Redux,
            </p>

            <br />
            <p className=" mx-auto w-[90%] font-semibold">
              <span className="font-bold">Tools: </span>
              CSS, HTML, Git,Tailwind, Bootstrap, Mongo DB, SQL, MS server
            </p>

            <div className="flex  justify-between items-center  mx-auto w-[90%] mt-10 ">
              <a href="Resume.pdf" rel="noopener noreferrer">
                <button className=" bg-transparent   py-2  px-4  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded">
                  Resume
                </button>
              </a>

              <Link to="contact" smooth={true} offset={5} duration={500}>
                <button className=" bg-blue-500   py-2  px-4   text-white font-semibold hover:text-white  border border-blue-500 hover:bg-blue-700 rounded">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
