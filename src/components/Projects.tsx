import React from "react";
import projectsData from "../assets/data/projects.json";
import { IndividualProject } from "./projects-components/IndividualProject";
import { Project } from "../types/project";

export const Projects: React.FC = () => {
  const projects: Project[] = projectsData;

  return (
    <div className="flex flex-col items-center max-w-[1920px] flex-wrap w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <IndividualProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
