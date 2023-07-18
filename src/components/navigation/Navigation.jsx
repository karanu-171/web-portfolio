import React, { useState } from "react";
import { Link, AnimateScroll as scroll } from "react-scroll";
import { HiMenu, HiOutlineCode } from "react-icons/hi";
import { TbLetterX } from "react-icons/tb";
import useMediaQuery from "../hooks/UseMediaQuery.js";

const Navigation = ({ isTopOfPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  let links = [
    { name: "Home", link: "landing" },
    { name: "About", link: "About" },
    { name: "Services", link: "services" },
    { name: "Projects", link: "projects" },
  ];

  const navbarBg = isTopOfPage ? "" : "bg-gray-50  shadow-md  w-full";

  const aboveMediumQuery = useMediaQuery("(min-width: 1060px)");
  return (
    <div className={`${navbarBg}  fixed top-0 z-30 w-full py-2`}>
      {aboveMediumQuery ? (
        <div className=" mx-auto flex items-center justify-between py-4 md:px-10 px-7">
          <div className=" cursor-pointer flex items-center ">
            <span>
              <HiOutlineCode color="blue" size={28} className="mr-1" />
            </span>
            <p className="text-xl text-gray-700 font-semibold mr-2 ">
              MUSILI
              <span className="text-blue-600">.</span>
            </p>
          </div>
          <div>
            <ul className=" md:flex md:items-center hover:cursor-pointer">
              {links.map((each) => (
                <li key={each.name} className="md:mx-2 lg:mx-5 font-semibold ">
                  <Link
                    to={each.link}
                    className="hidden md:block text-gray-700 font-semibold hover:text-blue-600 duration-500"
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    {each.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Link to="contact" smooth={true} offset={5} duration={500}>
              <button className="hidden  md:block bg-transparent hover:bg-blue-500 text-blue-700 text-sm font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded">
                <span> CONTACT ME</span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-between cursor-pointer px-4 py-3 items-center">
          <div className=" cursor-pointer flex items-center ">
            <span>
              <HiOutlineCode color="blue" size={30} className="mr-1" />
            </span>
            <p className="text-xl text-gray-700 font-semibold mr-2 ">
              MUSILI
              <span className="text-blue-600">.</span>
            </p>
          </div>
          <div>
            <button
              className="rounded-full bg-primary-300 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <HiMenu size={30} />
            </button>
          </div>
        </div>
      )}

      {/* drop down */}

      {!aboveMediumQuery && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full  w-[300px] bg-white drop-shadow-lg">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button
              className="rounded-full "
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <TbLetterX className="font-bold" size={30} />
            </button>
          </div>

          {/* menu items */}

          <div className="ml-[33%] flex flex-col gap-6 text-xl">
            {links.map((each) => (
              <p key={each.name} className="my-2  w-full ">
                <Link
                  to={each.link}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className="font-semibold    text-gray-600 hover:text-blue-600 duration-500"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  {each.name}
                </Link>
              </p>
            ))}
            <div>
              <Link to={"contact"} smooth={true} offset={10} duration={500}>
                <button
                  className="mb-4 bg-transparent hover:bg-blue-500 text-blue-700 text-sm font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  CONTACT ME
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
