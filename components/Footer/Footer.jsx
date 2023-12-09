import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const navElements = [
    {
      icon: <FaLinkedinIn size={14} />,
      link: "https://www.linkedin.com/in/ayaz-irshad-7b401622a",
    },
    {
      icon: <FaXTwitter size={14} />,
      link: "/",
    },
    {
      icon: <FaFacebookF size={14} />,
      link: "/",
    },
  ];
  return (
    <div className="border-t border-[#1E2D3D] text-[#84A4B5] w-full flex justify-between px-4">
      <div className="flex">
        <span className="py-1 border-r border-[#1E2D3D] pr-3 hidden sm:block">
          find me in:
        </span>
        <nav className="flex">
          {navElements.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                className="hover:text-[#E4E6E7]  border-r border-[#1E2D3D] flex place-items-center py-1 px-3 "
              >
                {item.icon}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-l border-[#1E2D3D] pl-4 py-1 flex justify-center items-center hover:text-[#E4E6E7]">
        <Link
          className="flex gap-4 place-items-center"
          target="_blank"
          href={"https://github.com/ayazirshad"}
        >
          @ayaz <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
