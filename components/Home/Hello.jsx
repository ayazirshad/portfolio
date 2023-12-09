import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hello.css";
import Image from "next/image";
import MyName from "../../public/images/my name.png";

const Hello = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Graphic Designer"],
      typeSpeed: 90,
      backSpeed: 40,
      loop: true,
      startDelay: 300,
      backDelay: 2000,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="text-[#84A4B5] h-full flex md:justify-between relative">
      <div className="h-full w-full md:w-1/2 flex flex-col justify-center px-3 md:pl-20 z-30">
        <div className="h-44">
          <h3 className="text-lg text-[#E4E6E7]">Hello world. I'm</h3>
          <h1 className="lg:text-[60px] text-[40px] sm:text-[42px]  text-[#E4E6E7] ">
            Ayaz Irshad
          </h1>
          <h3 className="text-[#4D5BCE] text-2xl sm:text-3xl ">
            <span className="mr-2">&gt;</span>
            <span ref={el} className=""></span>
          </h3>
        </div>
        <div className="h-36 pb-5 flex flex-col justify-end ">
          <p className="text-[12px] sm:text-sm">
            // transforming ideas into digital reality
          </p>
          <p className="text-[12px] sm:text-sm">
            // browse my gitHub for innovative ideas and techniques
          </p>
          <p className="text-[#E4E6E7] text-[16px]">
            <span className="text-[#37469B]">const</span>{" "}
            <span className="text-[#3ECAA3]">githubLink</span> ={" "}
            <Link
              href={"https://github.com/ayazirshad"}
              target="_blank"
              className="text-[#C67F78]"
            >
              "https://github.com/ayazirshad"
            </Link>
          </p>
        </div>
      </div>
      <div className="flex absolute  top-0 md:hidden left-0 h-full  w-full md:w-2/3 lg:w-1/2  place-items-center before:absolute before:h-[300px] before:w-[480px]  before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:z-20 after:h-[180px] after:w-[240px] after:translate-y-1/3 after:translate-x-36 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#0f969c] before:dark:opacity-30 after:dark:from-[#0f459c] after:dark:via-[#0513a9] after:dark:opacity-20 before:lg:h-[360px]"></div>
      <div className="mr-14 justify-center items-center hidden md:w-1/3 lg:w-1/2 md:flex relative place-items-center before:absolute before:h-[300px] before:w-[480px]  before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute  after:h-[180px] after:w-[240px] after:translate-y-1/3 after:translate-x-36 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#0f969c] before:dark:opacity-30 after:dark:from-[#0f459c] after:dark:via-[#0513a9] after:dark:opacity-30 before:lg:h-[360px] ">
        <div className="relative md:w-60 lg:w-72 md:h-60 lg:h-72 z-10 rounded-full flex justify-center items-center overflow-hidden rotatingBorder p-1">
          <Image
            src={MyName}
            alt="<Ayaz/>"
            className="w-full h-full z-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hello;
