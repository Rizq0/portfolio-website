import React from "react";
import { Project } from "../../types/project";
import { Carousel } from "@mantine/carousel";
import projectsData from "../../assets/data/projects.json";
import { IndividualProject } from "./IndividualProject";

export const Projects: React.FC = () => {
  return null;
};

export const CarouselProjects: React.FC = () => {
  const projects: Project[] = projectsData;
  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: "xl", sm: "md" }}
      align="start"
      slidesToScroll={1}
    >
      {projects.map((project: Project) => (
        <Carousel.Slide key={project.id}>
          <IndividualProject key={project.id} project={project} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
