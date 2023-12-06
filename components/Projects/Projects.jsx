import Link from "next/link";
import React, { useState } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import { FaReact, FaHtml5, FaRegSquare, FaSquareCheck } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { projects } from "./ProjectsData";

const Projects = () => {
  const [filtersShown, setFiltersShown] = useState(true);
  const [filters, setFilters] = useState(["react js", "html", "next js"]);
  const [proj, setProj] = useState(projects);
  console.log(proj);

  const handleFilters = (filter) => {
    const indexOfFilter = filters.indexOf(filter);

    if (indexOfFilter !== -1) {
      const updatedFilters = filters.filter((item) => item !== filter);
      const updatedProjects = proj.filter((item) => item.type !== filter);
      setProj(updatedProjects);
      setFilters(updatedFilters);
    } else {
      const projectToBeAdded = projects.find((item) => item.type === filter);
      if (projectToBeAdded) {
        setProj([...proj, projectToBeAdded]);
        setFilters([...filters, filter]);
      }
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
        <div className="h-[70vh] md:h-[75vh] grid grid-cols-1 md:grid-cols-2 gap-5 px-2 py-3 md:px-5 overflow-y-auto pb-28 md:pb-0">
          {proj.map((item, index) => {
            return (
              <div key={index} className="h-64 w-full bg-blue-950 rounded-xl">
                {item.type}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
