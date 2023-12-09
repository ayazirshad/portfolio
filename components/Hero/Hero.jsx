"use client";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Hello from "../Home/Hello";
import AboutMe from "../About/AboutMe";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import { CiMenuFries } from "react-icons/ci";
import "./Hero.css";

const Hero = () => {
  const navElements = ["_hello", "_about-me", "_projects"];
  const [activeComponent, setActiveComponent] = useState("_hello");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const hanldeActiveComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="bg-[#010C15] p-[6px] sm:p-4 font-coding h-screen">
      <div className="bg-[#01111E] border border-[#1E2D3D] rounded-lg h-full w-full flex flex-col overflow-hidden relative">
        <div className="flex text-[#84A4B5] justify-between border-b border-[#1E2D3D]">
          <div className="flex justify-between w-full relative " id="nav-div">
            <div className="py-2 px-4 w-56">
              <a href="/">ayaz_irshad</a>
            </div>
            <nav className="flex" id="nav">
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
            <div
              id="menu-icon"
              className="h-full hidden justify-center items-center px-4 cursor-pointer"
            >
              <CiMenuFries
                size={24}
                onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
              />
            </div>
            <nav
              className={`absolute top-16 w-max border border-[#1E2D3D] rounded-lg bg-[#01111E] backdrop-blur-2xl bg-opacity-30 ${
                isSideMenuOpen ? "right-5" : "-right-full"
              } transition-all duration-300 z-50`}
              id="side-menu"
            >
              {navElements.map((item, index) => {
                return (
                  <div
                    className=" border-b
                     border-[#1E2D3D] text-center cursor-pointer hover:text-[#E4E6E7] py-2 px-5"
                    key={index}
                    onClick={() => {
                      hanldeActiveComponent(item);
                      setIsSideMenuOpen(false);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
              <div
                className={
                  "text-center cursor-pointer hover:text-[#E4E6E7] py-2 px-5"
                }
                onClick={() => {
                  hanldeActiveComponent("_contact-me");
                  setIsSideMenuOpen(false);
                }}
              >
                _contact-me
              </div>
            </nav>
          </div>
          <div
            className={`border-l py-2 px-6 border-[#1E2D3D] w-max cursor-pointer hover:text-[#E4E6E7] border-b-2 transition-all duration-200 ${
              activeComponent === "_contact-me"
                ? "border-b-[#FEA55F] text-[#E4E6E7]"
                : "border-b-transparent"
            }`}
            onClick={() => hanldeActiveComponent("_contact-me")}
            id="nav-contact"
          >
            _contact-me
          </div>
        </div>
        <div className="flex-1 h-full">
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
        <div className="w-full absolute bottom-0 bg-[#01111E]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
