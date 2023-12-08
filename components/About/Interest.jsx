import React from "react";

const Interest = () => {
  let array = [...Array(31).keys()].map((i) => i + 1);

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
          <p>My interests revolve around web development,</p>
          <p>
            machine learning, and the creative realms of photo & video editing.
          </p>
          <p>While proficient in web development and editing,</p>
          <p>I'm passionate about expanding my knowledge in</p>
          <p>machine learning, aiming to integrate innovative solutions</p>
          <p> into my skill set.</p>
          <p>&nbsp;</p>
          <p>Furthermore, I have a deep fondness for language learning,</p>
          <p>utilizing multiple languages to create diverse</p>
          <p>and impactful projects.</p>
          <p>This fusion of technology and linguistic exploration</p>
          <p>drives my continuous pursuit of growth and innovation</p>
          <p>in the tech space.</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>"Create. Innovate. Inspire."</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default Interest;
