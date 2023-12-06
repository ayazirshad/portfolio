import Link from "next/link";
import React, { useState } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import { FaReact, FaHtml5, FaRegSquare, FaSquareCheck } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { projects } from "./ProjectsData";
import Image from "next/image";

const Projects = () => {
  const [filtersShown, setFiltersShown] = useState(true);
  const [filters, setFilters] = useState(["react js", "html", "next js"]);
  const [proj, setProj] = useState(projects);

  const handleFilters = (filter) => {
    const indexOfFilter = filters.indexOf(filter);

    if (indexOfFilter !== -1) {
      const updatedFilters = filters.filter((item) => item !== filter);
      const updatedProjects = proj.filter((item) => item.type !== filter);
      setProj(updatedProjects);
      setFilters(updatedFilters);
    } else {
      const projectToBeAdded = projects.filter((item) => item.type === filter);

      if (projectToBeAdded.length > 0) {
        projectToBeAdded.forEach((project) => {
          setProj((prevProjects) => [...prevProjects, project]);
        });
      }
      setFilters([...filters, filter]);
    }
  };

  return (
    <div className="text-[#84A4B5] h-full md:flex ">
      <div className="w-full md:w-56 border-r border-[#1E2D3D] text-[#E4E6E7]">
        <button
          className="text-left w-full border-b border-[#1E2D3D] py-2 px-4 flex gap-3 items-center"
          onClick={() => setFiltersShown(!filtersShown)}
        >
          <BsFillTriangleFill
            size={15}
            className={` ${
              filtersShown ? "rotate-180" : "rotate-90"
            } transition-all duration-100`}
          />
          <span>projects-gellery</span>
        </button>
        <div
          className={`${
            !filtersShown && "hidden"
          } py-4 px-4 border-b border-[#1E2D3D] flex flex-col gap-3`}
        >
          <button
            href={"/"}
            className="flex items-center gap-3 text-[#94AAC3] hover:text-[#E4E6E7]"
            onClick={() => handleFilters("react js")}
          >
            {filters.indexOf("react js") !== -1 ? (
              <FaSquareCheck size={20} />
            ) : (
              <FaRegSquare size={20} />
            )}

            <FaReact size={20} />
            <span>React JS</span>
          </button>
          <button
            className="flex items-center gap-3 text-[#94AAC3] hover:text-[#E4E6E7]"
            onClick={() => handleFilters("html")}
          >
            {filters.indexOf("html") !== -1 ? (
              <FaSquareCheck size={20} />
            ) : (
              <FaRegSquare size={20} />
            )}
            <FaHtml5 size={20} />
            <span>HTML</span>
          </button>
          <button
            className="flex items-center gap-3 text-[#94AAC3] hover:text-[#E4E6E7]"
            onClick={() => handleFilters("next js")}
          >
            {filters.indexOf("next js") !== -1 ? (
              <FaSquareCheck size={20} />
            ) : (
              <FaRegSquare size={20} />
            )}
            <TbBrandNextjs size={20} />
            <span>Next JS</span>
          </button>
        </div>
      </div>
      <div className="flex-1 ">
        <h2 className="text-left w-full border-b border-[#1E2D3D] py-2 px-4 flex flex-wrap gap-3 items-center">
          <span>filters:</span>
          {filters.map((item, index) => (
            <div key={index}>
              {item}
              {index === filters.length - 1 ? null : ","}
            </div>
          ))}
        </h2>
        <div className="h-[70vh] md:h-[75vh] grid grid-cols-1 md:grid-cols-2 gap-5 px-2 py-3 md:px-5 overflow-y-auto pb-28">
          {proj.map((item, index) => {
            return (
              <div
                key={index}
                className="h-64 w-full  rounded-md overflow-hidden relative"
              >
                <Image
                  src={item.pic}
                  className="w-full h-full object-cover transition-all duration-500"
                  alt={item.title}
                />
                <div className="absolute h-full flex  flex-col justify-center items-center top-0 left-0 opacity-0 hover:opacity-100 w-full py-2 px-3 bg-[rgba(0,0,0,0.45)] transition-all duration-500 text-[#E4E6E7] text-lg font-bold backdrop-blur-sm rounded-md gap-3">
                  <span>{item.title}</span>
                  <span className="text-center text-[16px] font-normal">
                    {item.description}
                  </span>
                  <div className="grid gap-3 grid-cols-2">
                    <Link
                      href={item.link}
                      target="_blank"
                      className="border px-3 py-2 rounded-md text-sm font-normal bg-[#011627] hover:bg-[#0a1e2f] bg-opacity-25 border-[#1E2D3D] hover:bg-opacity-50 text-center"
                    >
                      Preview
                    </Link>

                    <Link
                      href={item.source}
                      target="_blank"
                      className="border px-3 py-2 rounded-md text-sm font-normal bg-[#011627] hover:bg-[#0a1e2f] bg-opacity-25 border-[#1E2D3D] hover:bg-opacity-50 text-center"
                    >
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
