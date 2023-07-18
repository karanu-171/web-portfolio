import React from "react";
import { BsFillTelephoneFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-gray-600 px-3">
      <hr />
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 container mx-auto py-8">
        {/* pages */}

        <div className="text-white font-semibold hover:cursor-pointer text-center ">
          <ul>
            <li className="mb-3">
              <Link to="/"> Home</Link>
            </li>
            <li className="mb-3">
              <Link to="/">About</Link>
            </li>
            <li className="mb-3">
              <Link to="/">Services</Link>
            </li>
            <li className="mb-3">
              <Link to="/"> Projects</Link>
            </li>
          </ul>
        </div>

        {/* contacts */}

        <div className="text-white font-semibold  ">
          <div className="mb-3 flex items-center justify-center space-x-2">
            <p>Phone</p>
            <BsFillTelephoneFill size={20} />
            <span className="mx-2 text-orange-200 ">: +254768687334</span>
          </div>
          <div className="mb-3 flex items-center justify-center space-x-2">
            <p>Email</p>
            <MdEmail size={20} />
            <span className="mx-2 text-orange-200">
              : musilibrian07@gmail.com
            </span>
          </div>
          <div className="mb-3 flex items-center space-x-2 justify-center hover:cursor-pointer">
            <a
              href="https://www.linkedin.com/in/brian-musili-405b1220a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p> Linkedln</p>
            </a>

            <a
              href="http://www.linkedin.com/in/brian-musili-405b1220a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={20} />
            </a>
          </div>
          <div className="mb-3 flex items-center justify-center space-x-2 hover:cursor-pointer">
            <a
              href="https://github.com/MusiliC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github</p>
            </a>
            <a
              href="https://github.com/MusiliC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={20} />
            </a>
          </div>
        </div>

        {/* made by */}

        <div className="text-white font-semibold  text-center ">
          <p className="mb-3">Privacy Policy and Terms of Use</p>
          <p className="mb-3">
            Made and Designed by
            <span className="text-orange-200"> @Brian Musili</span> 2023{" "}
          </p>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Footer;
