import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="text-[#84A4B5] w-full h-full flex justify-center items-center">
      <div className="bg-red-950 w-56 h-full flex flex-col">
        <button className="text-left border-b border-[#1E2D3D] py-2 px-4">
          <BsFillTriangleFill />
        </button>
        <button className="text-left border-b border-[#1E2D3D] py-2 px-4">
          2
        </button>
      </div>
      <div className="md:flex w-full h-full flex-1">
        <div className="w-full md:w-1/2 bg-yellow-700 h-full">2</div>
        <div className="w-full md:w-1/2 bg-blue-900 h-full">3</div>
      </div>
    </div>
  );
};

export default Contact;
