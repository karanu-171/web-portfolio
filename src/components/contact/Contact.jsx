import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Common from "../common/Common";
import Error from "../common/Error";

const Contact = () => {
  const form = useRef();

  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e.target.value)

    emailjs
      .sendForm(
        process.env.React_App_SERVICE_KEY,
        process.env.React_App_TEMPLATE_KEY,
        form.current,
        process.env.React_App_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSend(true);
          var timeout = setTimeout(function () {
            setSend(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setError(true);
          var timeout = setTimeout(function () {
            setError(false);
          }, 3000);
        }
      );
  };

  return (
    <section id="contact" className="bg-zinc-50 py-3 pb-10">
      <div>
        <p className="text-xl pt-10 lg:pt-5 md:text-2xl font-semibold text-center">
          Contact Me
        </p>
      </div>
      <div className="aboutUnderline mx-auto my-1"></div>
      <div className="container mx-auto  pb-32 md:py-6 md:flex space-y-10 items-center">
        <div className="md:w-1/2 ">
          <img
            src="pics/development-g37fb25579_1280.png"
            className=" mx-auto w-[90%] lg:w-[400px] object-cover"
            alt=""
          />
        </div>
        <div className="px-3 w-full  md:px-0 md:w-[45%] mx-auto  ">
          <div className="w-full ">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white shadow-lg border border-gray-200  rounded px-4 pt-4 pb-6 mb-4"
            >
              {send && <Common />}
              {error && <Error />}
              <div className="mb-1">
                <label
                  className="block text-sm text-gray-700   mb-1"
                  htmlFor="username"
                >
                  Email:
                </label>
                <input
                  className="form-input"
                  name="user_email"
                  id="username"
                  type="email"
                  placeholder="email@dormain.com"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-sm text-gray-700 mb-1 "
                  htmlFor="password"
                >
                  Name
                </label>
                <input
                  className="form-input"
                  name="user_name"
                  id="password"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="textBox"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center mt-2 w-full justify-center">
                <button
                  className="bg-blue-500 text-sm w-full hover:bg-blue-700 text-white font-semibold py-3 px-1 rounded-lg focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
