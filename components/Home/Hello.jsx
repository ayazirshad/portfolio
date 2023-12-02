import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

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
    <div className="text-[#84A4B5] h-full flex ">
      <div className="h-full w-full md:w-1/2 flex flex-col justify-center px-3 md:pl-20">
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
      <div className="h-full w-1/2 justify-center items-center hidden md:flex">
        2
      </div>
    </div>
  );
};

export default Hello;
