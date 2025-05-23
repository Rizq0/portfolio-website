import React from "react";
// import selfUrl from "../assets/images/selfimage.png";
import selfPicture from "../assets/images/selfimage2.jpg";
import { Accordion } from "@mantine/core";
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
      <Accordion
        value={activeValue}
        onChange={setActiveValue}
        variant="separated"
        radius="md"
        chevronPosition="left"
        styles={{ item: { border: "none" } }}
        className="dark:bg-backgrounddark bg-backgroundlight w-full"
      >
        <Accordion.Item
          key="About Me"
          value="About Me"
          className="dark:bg-backgrounddark bg-backgroundlight"
        >
          <Accordion.Control
            icon={<IconId size={48} />}
            className="dark:bg-backgrounddark bg-backgroundlight hover:text-button font-gabarito text-4xl dark:text-headlinedark text-headlinelight"
          >
            About Me
          </Accordion.Control>
          <Accordion.Panel className="dark:bg-backgrounddark bg-backgroundlight">
            {
              <div className="dark:bg-backgroundlight bg-backgrounddark rounded-lg p-4">
                <p className="dark:text-headlinelight text-headlinedark font-gabarito font-medium text-lg text-center sm:text-2xl">
                  I’m a passionate{" "}
                  <span className="text-button">Full Stack Developer</span> with
                  a solid foundation in web development and expertise in both
                  frontend and backend technologies. A quick learner and team
                  player, I’m always eager to explore new tools, frameworks, and
                  technologies that can enhance my skills. I also have a strong
                  interest in <span className="text-button">DevOps</span>, and
                  enjoy learning about infrastructure, CI/CD, and tools that
                  help bridge development and operations. I’m currently seeking
                  new opportunities to contribute my skills and grow further in
                  the tech industry. Feel free to reach out!
                </p>
              </div>
            }
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item
          key="Skills"
          value="Skills"
          className="dark:bg-backgrounddark bg-backgroundlight"
        >
          <Accordion.Control
            icon={<IconBinaryTree size={48} />}
            className="dark:bg-backgrounddark bg-backgroundlight text-4xl hover:text-button font-gabarito dark:text-headlinedark text-headlinelight"
          >
            Skills
          </Accordion.Control>
          <Accordion.Panel className="dark:bg-backgrounddark bg-backgroundlight">
            {<Skills key={mountKey} />}
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item
          key="Projects"
          value="Projects"
          className="dark:bg-backgrounddark bg-backgroundlight"
        >
          <Accordion.Control
            icon={<IconTimelineEventExclamation size={48} />}
            className="dark:bg-backgrounddark bg-backgroundlight text-4xl hover:text-button font-gabarito dark:text-headlinedark text-headlinelight "
          >
            Projects
          </Accordion.Control>
          <Accordion.Panel className="dark:bg-backgrounddark bg-backgroundlight">
            {windowWidth < 768 ? (
              <CarouselProjects key={mountKey} />
            ) : (
              <Projects />
            )}
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item
          key="Contact Me"
          value="Contact Me"
          id="contact"
          className="dark:bg-backgrounddark bg-backgroundlight"
        >
          <Accordion.Control
            icon={<IconMailSpark size={48} />}
            className="dark:bg-backgrounddark bg-backgroundlight hover:text-button font-gabarito text-4xl dark:text-headlinedark text-headlinelight"
          >
            Contact Me
          </Accordion.Control>
          <Accordion.Panel className="dark:bg-backgrounddark bg-backgroundlight">
            {<ContactMe />}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
