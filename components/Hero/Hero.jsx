"use client";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Hello from "../Home/Hello";
import AboutMe from "../About/AboutMe";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Hero = () => {
  const navElements = ["_hello", "_about-me", "_projects"];
  const [activeComponent, setActiveComponent] = useState("_hello");
  console.log(activeComponent);
  const hanldeActiveComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="bg-[#010C15] p-4 font-coding h-screen">
      <div className="bg-[#01111E] border border-[#1E2D3D] rounded-lg h-full relative">
        <div className="flex text-[#84A4B5] justify-between border-b border-[#1E2D3D]">
          <div className="flex">
            <div className="py-2 px-4 w-60">
              <a href="/">ayaz_irshad</a>
            </div>
            <nav className="flex">
              {navElements.map((item, index) => {
                return (
                  <div
                    className={`border-r border-l py-2 px-6 border-[#1E2D3D] cursor-pointer hover:text-[#E4E6E7] border-b-2 ${
                      activeComponent === item
                        ? "border-b-[#FEA55F] text-[#E4E6E7]"
                        : "border-b-transparent"
                    }`}
                    key={index}
                    onClick={() => hanldeActiveComponent(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </nav>
          </div>
          <div
            className={`border-l py-2 px-6 border-[#1E2D3D] cursor-pointer hover:text-[#E4E6E7] border-b-2 transition-all duration-200 ${
              activeComponent === "_contact-me"
                ? "border-b-[#FEA55F] text-[#E4E6E7]"
                : "border-b-transparent"
            }`}
            onClick={() => hanldeActiveComponent("_contact-me")}
          >
            _contact-me
          </div>
        </div>
        <div className="h-full">
          {activeComponent === "_hello" ? (
            <Hello />
          ) : activeComponent === "_about-me" ? (
            <AboutMe />
          ) : activeComponent === "_projects" ? (
            <Projects />
          ) : (
            <Contact />
          )}
        </div>
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
