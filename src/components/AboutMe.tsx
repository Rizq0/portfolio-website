import React from "react";
import selfUrl from "../assets/images/selfimage.png";

export const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col items-center max-w-[1920px] flex-wrap w-full pt-4 mt-8">
      <div className=" w-[250px] h-[250px] rounded-full overflow-hidden border-solid border-4 border-backgrounddark dark:border-headlinedark">
        <img
          src={selfUrl}
          alt="Joe Self Image"
          className="w-full h-full scale-150 object-cover"
          style={{ objectPosition: "center -75%" }}
        />
      </div>
      <h2 className="text-headlinelight dark:text-headlinedark font-gabarito font-medium text-4xl pt-4">
        Hello! I'm{" "}
        <span className="text-button font-gabarito font-medium">Joe!</span>
      </h2>
      <p className="dark:text-headlinedark text-subheadlinelight font-gabarito text-2xl text-center pt-4">
        I’m a passionate{" "}
        <span className="text-button">Full Stack Developer</span> with a solid
        foundation in web development and expertise in both frontend and backend
        technologies. A quick learner and team player, I’m always eager to
        explore new tools, frameworks, and technologies that can enhance my
        skills. I’m currently seeking new opportunities to contribute my skills
        and grow further in the tech industry. Feel free to reach out!
      </p>
    </div>
  );
};
