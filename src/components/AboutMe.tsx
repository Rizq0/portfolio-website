import React from "react";
// import selfUrl from "../assets/images/selfimage.png";
import selfPicture from "../assets/images/selfimage2.jpg";
import { ContactMe } from "./ContactMe";
import { Projects } from "./Projects";
import {
  IconId,
  IconBinaryTree,
  IconTimelineEventExclamation,
  IconMailSpark,
} from "@tabler/icons-react";
import { Skills } from "./skills-component/Skills";
import { useState, useEffect } from "react";
import { CarouselProjects } from "./projects-components/CarouselProjects";

export const AboutMe: React.FC = () => {
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const [mountKey, setMountKey] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (activeValue === "Skills" || activeValue === "Projects") {
      setMountKey((prev) => prev + 1);
      window.dispatchEvent(new Event("resize"));
    }
  }, [activeValue]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center flex-wrap w-full pt-4 mt-8">
      <div className="relative w-[266px] h-[266px]">
        <div className="absolute inset-0 rounded-full dark:bg-button shadow-lg dark:shadow-button/50 animate-orbit bg-backgrounddark shadow-backgrounddark/50"></div>

        <div className="absolute inset-[2px] w-[262px] h-[262px] rounded-full overflow-hidden bg-backgrounddark dark:bg-backgroundlight">
          <img
            src={selfPicture}
            alt="Joe Self Image"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="dark:bg-backgroundlight bg-backgrounddark rounded-lg p-4 mt-8">
        <h2 className="text-headlinedark dark:text-headlinelight font-gabarito font-medium text-4xl">
          Hello! I'm{" "}
          <span className="text-button font-gabarito font-medium">Joe!</span>
        </h2>
      </div>
      <hr className="text-button mt-12 mb-12 border-t-[4px] rounded w-full" />
      <div className="w-full flex flex-col gap-2">
        <div className="collapse collapse-arrow bg-backgroundlight dark:bg-backgrounddark rounded-md group">
          <input
            type="radio"
            name="about-accordion"
            checked={activeValue === "About Me"}
            onChange={() => {}}
            onClick={() =>
              setActiveValue(activeValue === "About Me" ? null : "About Me")
            }
          />
          <div className="collapse-title font-gabarito text-4xl font-medium dark:text-headlinedark text-headlinelight group-hover:text-button flex items-center gap-3">
            <IconId size={48} /> About Me
          </div>
          <div className="collapse-content bg-backgroundlight dark:bg-backgrounddark">
            <div className="dark:bg-backgroundlight bg-backgrounddark rounded-lg p-4">
              <p className="dark:text-headlinelight text-headlinedark font-gabarito font-medium text-lg text-center sm:text-2xl">
                A technology professional with a strong background spanning{" "}
                <span className="text-button">Software Development</span>,{" "}
                <span className="text-button">Cloud Infrastructure</span> and{" "}
                <span className="text-button">
                  Platform / DevOps Engineering
                </span>
                . Currently working as a{" "}
                <span className="text-button">
                  Platform &amp; DevOps Engineer
                </span>
                , delivering real world production impact across{" "}
                <span className="text-button">Kubernetes</span>,{" "}
                <span className="text-button">CI/CD Pipelines</span> and{" "}
                <span className="text-button">Azure Infrastructure</span>.
                Bringing a{" "}
                <span className="text-button">Full Stack Developer</span>{" "}
                mindset to platform engineering, with a history of driving
                process improvements and technical initiatives from planning
                through to delivery. Open to{" "}
                <span className="text-button">Software Development</span>,{" "}
                <span className="text-button">DevOps</span>, and{" "}
                <span className="text-button">Platform Engineer</span> roles.
              </p>
            </div>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-backgroundlight dark:bg-backgrounddark rounded-md group">
          <input
            type="radio"
            name="about-accordion"
            checked={activeValue === "Skills"}
            onChange={() => {}}
            onClick={() =>
              setActiveValue(activeValue === "Skills" ? null : "Skills")
            }
          />
          <div className="collapse-title font-gabarito text-4xl font-medium dark:text-headlinedark text-headlinelight group-hover:text-button flex items-center gap-3">
            <IconBinaryTree size={48} /> Skills
          </div>
          <div className="collapse-content bg-backgroundlight dark:bg-backgrounddark min-w-0 overflow-hidden">
            <Skills key={mountKey} />
          </div>
        </div>

        <div className="collapse collapse-arrow bg-backgroundlight dark:bg-backgrounddark rounded-md group">
          <input
            type="radio"
            name="about-accordion"
            checked={activeValue === "Projects"}
            onChange={() => {}}
            onClick={() =>
              setActiveValue(activeValue === "Projects" ? null : "Projects")
            }
          />
          <div className="collapse-title font-gabarito text-4xl font-medium dark:text-headlinedark text-headlinelight group-hover:text-button flex items-center gap-3">
            <IconTimelineEventExclamation size={48} /> Projects
          </div>
          <div className="collapse-content bg-backgroundlight dark:bg-backgrounddark min-w-0 overflow-hidden">
            {windowWidth < 768 ? (
              <CarouselProjects key={mountKey} />
            ) : (
              <Projects />
            )}
          </div>
        </div>

        <div
          id="contact"
          className="collapse collapse-arrow bg-backgroundlight dark:bg-backgrounddark rounded-md group"
        >
          <input
            type="radio"
            name="about-accordion"
            checked={activeValue === "Contact Me"}
            onChange={() => {}}
            onClick={() =>
              setActiveValue(activeValue === "Contact Me" ? null : "Contact Me")
            }
          />
          <div className="collapse-title font-gabarito text-4xl font-medium dark:text-headlinedark text-headlinelight group-hover:text-button flex items-center gap-3">
            <IconMailSpark size={48} /> Contact Me
          </div>
          <div className="collapse-content bg-backgroundlight dark:bg-backgrounddark">
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
};
