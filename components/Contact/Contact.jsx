import React, { useState } from "react";
import { BsFillTriangleFill, BsBoxArrowUpRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [contactShown, setContactShown] = useState(false);
  const [linksShown, setLinksShown] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const messageSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("please enter your name"),
    email: Yup.string().email().required("please enter your email"),
    message: Yup.string().required("please enter your message"),
  });
  let params = null;
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: messageSchema,
      onSubmit: (values, action) => {
        params = values;
        sendEmail();
        action.resetForm();
      },
    });

  const sendEmail = () => {
    setLoading(true);
    emailjs
      .send("service_h42okx8", "template_nedaoah", params, "QQ6xkm3sN4ti4oJfD")
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setMessageSent(true);
          alert("email sent successfully");
          setMessageSent(false);
        },
        (error) => {
          setLoading(false);
          alert(error.text);
        }
      );
  };

  return (
    <div className="text-[#84A4B5] w-full flex  flex-col md:flex-row h-full overflow-y-auto">
      <div className="w-full md:w-56 md:h-full flex flex-col border-r border-[#1E2D3D] text-[#E4E6E7] ">
        <button
          className="text-left border-b border-[#1E2D3D] py-2 px-4 flex gap-3 items-center"
          onClick={() => setContactShown(!contactShown)}
        >
          <BsFillTriangleFill
            size={15}
            className={`rotate-90 ${
              contactShown && "rotate-180"
            } transition-all duration-100`}
          />
          <span>Contacts</span>
        </button>
        <div
          className={`${
            !contactShown && "hidden"
          } py-4 px-4 border-b border-[#1E2D3D] `}
        >
          <Link
            href={"/"}
            className="flex items-center gap-3 text-[#94AAC3] hover:text-[#E4E6E7] mb-1"
          >
            <MdEmail />
            <span className=" truncate">ayazdev@gmail.com</span>
          </Link>
          <div className="flex items-center gap-3 text-[#94AAC3] hover:text-[#E4E6E7]">
            <IoMdCall />
            +923456789543
          </div>
        </div>
        <button
          className="text-left border-b border-[#1E2D3D] py-2 px-4 flex gap-3 items-center"
          onClick={() => setLinksShown(!linksShown)}
        >
          <BsFillTriangleFill
            size={15}
            className={`rotate-90 ${
              linksShown && "rotate-180"
            } transition-all duration-100`}
          />
          <span>find-me-also-on</span>
        </button>
        <div
          className={`${
            !linksShown && "hidden"
          } py-4 px-4 border-b border-[#1E2D3D]`}
        >
          <Link
            href={"/"}
            className="flex items-center gap-3 text-[#94AAC3] hover:text-[#E4E6E7]"
          >
            <BsBoxArrowUpRight size={15} />
            Linkedin
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-3 text-[#94AAC3] hover:text-[#E4E6E7]"
          >
            <BsBoxArrowUpRight size={15} />
            Fiverr
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-3 text-[#94AAC3] hover:text-[#E4E6E7]"
          >
            <BsBoxArrowUpRight size={15} />
            Youtube
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-3 text-[#94AAC3] hover:text-[#E4E6E7]"
          >
            <BsBoxArrowUpRight size={15} />
            Instagram
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full  md:h-full flex-1">
        <div className="w-full md:w-1/2 border-r border-[#1E2D3D] h-full flex flex-col justify-center items-center px-2 py-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full md:w-max"
          >
            <div className="flex flex-col w-full gap-1">
              <div className="flex  items-center gap-3">
                <label>_name</label>
                {errors.name && touched.name && (
                  <p className="text-[#CA5F62] text-xs">{errors.name}</p>
                )}
              </div>
              <input
                className="border border-[#84A4B5] bg-[#030E18] p-1 rounded-md focus:outline-none text-[#94AAC3] w-full md:w-60 lg:w-80"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <div className="flex  items-center gap-3">
                <label>_email</label>
                {errors.email && touched.email && (
                  <p className="text-[#CA5F62] text-xs">{errors.email}</p>
                )}
              </div>
              <input
                className="border border-[#84A4B5] bg-[#030E18] p-1 rounded-md focus:outline-none text-[#94AAC3] w-full md:w-60 lg:w-80"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <div className="flex  items-center gap-3">
                <label>_message</label>
                {errors.message && touched.message && (
                  <p className="text-[#CA5F62] text-xs">{errors.message}</p>
                )}
              </div>
              <textarea
                className="border border-[#84A4B5] bg-[#030E18] p-1 rounded-md focus:outline-none text-[#94AAC3] w-full md:w-60 lg:w-80"
                rows={3}
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button
              type="submit"
              className={`border border-[#1E2D3D] bg-[#011627] hover:bg-[#0a1e2f] transition-all duration-300 rounded-md w-full py-[6px] ${
                loading && "cursor-not-allowed"
              }`}
            >
              {loading ? "sending..." : "send-message"}
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center mb-20 md:mb-0">
          <div className=" px-2 py-4 text-sm flex gap-3 w-full md:w-max">
            <div className="w-max text-right">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
              <p>11</p>
              <p>12</p>
            </div>
            <div>
              <p>
                <span className="text-[#C98BDF]">const</span>&nbsp;
                <span className="text-[#5565E8]">message</span>{" "}
                <span className="text-[#C98BDF]">=</span> &#123;
              </p>
              <p>
                <span className="text-[#5565E8]">&nbsp;name:</span>{" "}
                <span className="text-[#FEA55F]">"{values.name}"</span>,
              </p>
              <p>
                <span className="text-[#5565E8]">&nbsp;email:</span>{" "}
                <span className="text-[#FEA55F]">"{values.email}"</span>,
              </p>
              <p>
                <span className="text-[#5565E8]">&nbsp;message:</span>{" "}
                <span className="text-[#FEA55F]">"{values.message}"</span>,
              </p>
              <p>&#125;</p>
              <p></p>
              <p>
                <span className="text-[#5565E8]">button.addEventListener</span>
                &#40;<span className="text-[#FEA55F]">'click'</span>, (){" "}
                <span className="text-[#C98BDF]">=&#62;</span> &#123;
              </p>
              <p>
                <span className="text-[#5565E8]">&nbsp;form.send</span>&#40;
                <span className="text-[#5565E8]">message</span>&#41;;
              </p>
              <p>&#125;&#41;</p>
              <p>
                <span className="text-[#C98BDF]">console.</span>
                <span className="text-[#5565E8]">log</span>&#40;
              </p>
              <p>
                &nbsp;&nbsp;"
                <span className="text-[#1DAA55]">
                  {loading ? "sending-message" : messageSent && "message-sent"}
                </span>
                "
              </p>
              <p>&#41;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
