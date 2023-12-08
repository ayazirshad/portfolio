import React from "react";

const Skills = () => {
  let array = [...Array(26).keys()].map((i) => i + 1);

  return (
    <div className="text-sm flex gap-4">
      <div className="w-max  text-right">
        {array.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
      <div className="flex">
        <div className="">
          <p>/**</p>
          {array.map(
            (item, index) =>
              index !== 0 && (
                <h1 key={index}>{index === array.length - 1 ? "**/" : "*"}</h1>
              )
          )}
        </div>
        <div className="">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div className="md:flex hover:text-[#E4E6E7] cursor-pointer ">
            <div className="flex">
              <p>HTML</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div>
              <p className="flex">
                [########################
                <p className="tracking-[-2.9px]">-------</p>]
              </p>
            </div>
          </div>
          <div className="md:flex hover:text-[#E4E6E7] cursor-pointer ">
            <div className="flex">
              <p>CSS</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div>
              <p className="flex">
                [#######################
                <p className="tracking-[-2.5px]">--------</p>]
              </p>
            </div>
          </div>
          <div className="md:flex hover:text-[#E4E6E7] cursor-pointer ">
            <div className="flex">
              <p>JS</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div>
              <p className="flex">
                [###################
                <p className="tracking-[-3px]">---------------</p>]
              </p>
            </div>
          </div>
          <div className="md:flex hover:text-[#E4E6E7] cursor-pointer ">
            <div className="flex">
              <p>Java</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div>
              <p className="flex">
                [####################
                <p className="tracking-[-2.8px]">-------------</p>]
              </p>
            </div>
          </div>
          <div className="md:flex hover:text-[#E4E6E7] cursor-pointer ">
            <div className="flex">
              <p>C++</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div>
              <p className="flex">
                [######################
                <p className="tracking-[-2.8px]">----------</p>]
              </p>
            </div>
          </div>
          <p>&nbsp;</p>
          <div className="md:flex hover:text-[#E4E6E7] cursor-pointer ">
            <div className="flex">
              <p>React JS</p>
              <p>&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div>
              <p className="flex">
                [#####################
                <p className="tracking-[-3px]">------------</p>]
              </p>
            </div>
          </div>
          <div className="md:flex hover:text-[#E4E6E7] cursor-pointer ">
            <div className="flex">
              <p>Next JS</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div>
              <p className="flex">
                [#############
                <p className="tracking-[-2.9px]">------------------------</p>]
              </p>
            </div>
          </div>
          <div className="md:flex hover:text-[#E4E6E7] cursor-pointer ">
            <div className="flex">
              <p>Tailwind</p>
              <p>&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div>
              <p className="flex">
                [####################
                <p className="tracking-[-2.8px]">-------------</p>]
              </p>
            </div>
          </div>
          <p>&nbsp;</p>
          <div className="md:flex hover:text-[#E4E6E7] cursor-pointer ">
            <div className="flex">
              <p>Adobe PS</p>
              <p>&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div>
              <p className="flex">
                [##################
                <p className="tracking-[-2.8px]">----------------</p>]
              </p>
            </div>
          </div>
          <div className="md:flex hover:text-[#E4E6E7] cursor-pointer ">
            <div className="flex">
              <p>Filmora 9</p>
              <p>&nbsp;&nbsp;</p>
            </div>
            <div>
              <p className="flex">
                [######################
                <p className="tracking-[-2.8px]">----------</p>]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
