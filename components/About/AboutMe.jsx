import React, { useEffect, useState } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { IoFolderOpenSharp } from "react-icons/io5";
import Bio from "./Bio";
import Skills from "./Skills";
import Interest from "./Interest";

const AboutMe = () => {
  const [infoShown, setInfoShown] = useState(true);
  const [pagesOpen, setPagesOpen] = useState(["bio"]);
  console.log(pagesOpen);
  const [activeComponent, setActiveComponent] = useState("bio");
  const [pageClosed, setPageClosed] = useState(false);

  const handleOpenPage = (page) => {
    const indexOfPage = pagesOpen.indexOf(page);
    if (indexOfPage === -1) {
      setPagesOpen([...pagesOpen, page]);
    }
  };
  const closePage = (page) => {
    console.log(pagesOpen);
    const indexOfPage = pagesOpen.indexOf(page);
    if (indexOfPage !== -1) {
      const updatedPages = pagesOpen.filter((item) => item !== page);
      setPagesOpen(updatedPages);
      page === activeComponent && setPageClosed(true);
    }
  };
  useEffect(() => {
    if (pageClosed) {
      setActiveComponent(pagesOpen[0] ? pagesOpen[0] : "");
      setPageClosed(false);
    }
  }, [pageClosed]);

  return (
    <div className="text-[#84A4B5] h-full flex flex-col md:flex-row">
      <div className="w-full md:w-56 border-r border-[#1E2D3D] text-[#E4E6E7]">
        <button
          className="text-left w-full border-b border-[#1E2D3D] py-2 px-4 flex gap-3 items-center"
          onClick={() => setInfoShown(!infoShown)}
        >
          <BsFillTriangleFill
            size={15}
            className={` ${
              infoShown ? "rotate-180" : "rotate-90"
            } transition-all duration-100`}
          />
          <span>personal-info</span>
        </button>
        <div
          className={`${
            !infoShown && "hidden"
          } py-4 px-4 border-b border-[#1E2D3D] flex flex-col gap-3`}
        >
          <button
            className={`flex items-center gap-3 text-[#94AAC3] ${
              activeComponent === "bio" && "text-[#E4E6E7]"
            }`}
            onClick={() => {
              handleOpenPage("bio");
              setActiveComponent("bio");
            }}
          >
            <span>&gt;</span>
            <IoFolderOpenSharp size={18} className="text-[#E99287]" />
            <span>bio</span>
          </button>
          <button
            className={`flex items-center gap-3 text-[#94AAC3] ${
              activeComponent === "skills" && "text-[#E4E6E7]"
            }`}
            onClick={() => {
              handleOpenPage("skills");
              setActiveComponent("skills");
            }}
          >
            <span>&gt;</span>
            <IoFolderOpenSharp size={18} className="text-[#43D9AD]" />
            <span>skills</span>
          </button>
          <button
            className={`flex items-center gap-3 text-[#94AAC3] ${
              activeComponent === "interest" && "text-[#E4E6E7]"
            }`}
            onClick={() => {
              handleOpenPage("interest");
              setActiveComponent("interest");
            }}
          >
            <span>&gt;</span>
            <IoFolderOpenSharp size={18} className="text-[#4e5dde]" />
            <span>interest</span>
          </button>
        </div>
      </div>
      <div className="flex-1">
        <h2 className=" w-full border-b border-[#1E2D3D]  flex flex-wrap items-center">
          {pagesOpen.length === 0 && <span className="py-2">&nbsp;</span>}
          {pagesOpen.map((item, index) => (
            <div
              key={index}
              className="border-r border-[#1E2D3D] py-2 px-3 gap-3 flex justify-center items-center"
            >
              <button
                onClick={() => setActiveComponent(item)}
                className={`${activeComponent === item && "text-[#E4E6E7]"}`}
              >
                {item}
              </button>
              <button
                onClick={() => closePage(item)}
                className="hover:text-[#E4E6E7]"
              >
                <IoMdClose />
              </button>
            </div>
          ))}
        </h2>
        <div className="bg-red-950 h-[70vh] md:h-[75vh] px-2 py-3 md:px-5 overflow-y-auto pb-28">
          {activeComponent === "bio" ? (
            <Bio />
          ) : activeComponent === "skills" ? (
            <Skills />
          ) : (
            activeComponent === "interest" && <Interest />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
