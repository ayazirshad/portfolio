import React from "react";

const Bio = () => {
  let array = [...Array(35).keys()].map((i) => i + 1);
  return (
    <div className=" text-sm flex gap-4">
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
          <p>Hey there, I'm Ayaz Irshad, a web</p>
          <p>developer based in Punjab, Pakistan.</p>
          <p>with more than two in web development</p>
          <p>I specialize in creating visually appealing and functional</p>
          <p>websites and user interfaces.</p>
          <p>&nbsp;</p>
          <p>Outside of coding, I indulge in photography, videography, </p>
          <p>and exploring new technologies. </p>
          <p>These hobbies keep my creativity sharp and help me stay </p>
          <p>updated with the latest trends in design</p>
          <p>and technology.</p>
          <p>&nbsp;</p>
          <p>I pride myself on understanding clients' needs and</p>
          <p>delivering tailored solutions that exceed expectations.</p>
          <p>I'm always open to new challenges and opportunities.</p>
          <p>If you're seeking an experienced</p>
          <p>web developer or UI/UX designer, feel free to reach out.</p>
          <p>&nbsp;</p>
          <p>Let's collaborate to bring your ideas to life.</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
