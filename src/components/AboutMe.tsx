import React from "react";

export const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col items-center max-w-[1920px] flex-wrap w-full pt-4">
      <h1 className="text-button font-gabarito text-2xl self-start">
        About Me
      </h1>
      <div className=" w-[250px] h-[250px] rounded-full overflow-hidden">
        <img
          src="src/assets/images/selfimage.png"
          alt="Joe Self Image"
          className="w-full h-full scale-150 object-cover"
          style={{ objectPosition: "center -75%" }}
        />
      </div>
      <p className="text-button font-gabarito text-2xl text-center">
        Hello! I'm Joe, a passionate web developer with a love for creating
        dynamic and responsive websites.
      </p>
      <p className="text-button font-gabarito text-2xl text-center">
        Welcome to my portfolio!
      </p>
    </div>
  );
};
