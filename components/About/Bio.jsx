import React from "react";

const Bio = () => {
  let array = new Array();
  array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="h-screen bg-blue-950">
      <div className="flex gap-2">
        <div className="w-max  text-right">
          {array.map((item, index) => (
            <h1 key={index}>{item}</h1>
          ))}
        </div>
        <div className="w-max  text-right">
          {array.map((item, index) => (
            <h1 key={index}>*</h1>
          ))}
        </div>
        <div>
          <p>My name is Ayaz Irshad</p>
          <p>I am a web developer and UI/UX designer from Sri Lanka.</p>
          <p>With over five years of experience in web development,</p>
          <p>I have gained extensive knowledge and expertise in</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Bio;
