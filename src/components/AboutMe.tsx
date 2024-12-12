import React from "react";

export const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col items-center max-w-[1920px] flex-wrap w-full pt-4">
      <h1 className="text-headlinelight dark:text-headlinedark font-gabarito text-4xl self-start">
        About Me
      </h1>
      <div className=" w-[250px] h-[250px] rounded-full overflow-hidden border-solid border-4 border-button dark:border-headlinedark">
        <img
          src="src/assets/images/selfimage.png"
          alt="Joe Self Image"
          className="w-full h-full scale-150 object-cover"
          style={{ objectPosition: "center -75%" }}
        />
      </div>
      <h2 className="text-headlinelight dark:text-headlinedark font-gabarito text-4xl pt-4">
        Hello! I'm Joe!
      </h2>
      <p className="text-button font-gabarito text-2xl text-center pt-4">
        I’m a passionate Full Stack Developer with a solid foundation in web
        development and expertise in both front-end and back-end technologies. A
        quick learner and team player, I’m always eager to enhance my skills and
        explore new technologies. Excited to collaborate on innovative projects,
        I’m currently seeking new opportunities. Feel free to reach out!
      </p>
      <p className="text-headlinelight dark:text-headlinedark font-gabarito text-2xl text-center pt-4">
        Welcome to my portfolio!
      </p>
    </div>
  );
};
