import React from "react";
import { Project } from "../../types/project";
import { Carousel } from "@mantine/carousel";
import projectsData from "../../assets/data/projects.json";
import { IndividualProject } from "./IndividualProject";
import { useMantineColorScheme } from "@mantine/core";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

export const Projects: React.FC = () => {
  return null;
};

export const CarouselProjects: React.FC = () => {
  const projects: Project[] = projectsData;
  const { colorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: "xl", sm: "md" }}
      align="start"
      slidesToScroll={1}
      controlsOffset="xs"
      controlSize={24}
      nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />}
      loop
      withIndicators
      styles={{
        control: {
          backgroundColor: isDarkMode ? "white" : "#0f0e17",
          color: isDarkMode ? "#0f0e17" : "white",
          border: "0.15rem solid #ff8906",
          cursor: "pointer",
        },
        indicator: {
          backgroundColor: isDarkMode ? "white" : "#0f0e17",
        },
        slide: {
          display: "flex",
          flexGrow: 1,
        },
      }}
    >
      {projects.map((project: Project) => (
        <Carousel.Slide key={project.id}>
          <IndividualProject key={project.id} project={project} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
