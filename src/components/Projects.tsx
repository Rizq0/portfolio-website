import React from "react";
import projectsData from "../assets/data/projects.json";
import { IndividualProject } from "./ProjectsComponents/IndividualProject";
import { Project } from "../types/project";

export const Projects: React.FC = () => {
  const projects: Project[] = projectsData;

  return (
    <div className="flex flex-col items-center max-w-[1920px] flex-wrap w-full">
      <h1 className="text-headlinelight underline underline-offset-4 md:no-underline dark:text-headlinedark font-gabarito text-4xl self-center md:self-start pb-4">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <IndividualProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
