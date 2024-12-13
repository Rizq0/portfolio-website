import React from "react";
import { Project } from "../../types/project";

interface Props {
  project: Project;
}

export const IndividualProject: React.FC<Props> = ({ project }) => {
  return (
    <div className="relative flex flex-col p-4 border rounded-lg min-h-[300px]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.2",
        }}
      />
      <div className="relative z-10 flex flex-col h-full gap-4">
        <h2 className="text-headlinelight dark:text-headlinedark font-gabarito text-2xl">
          {project.name}
        </h2>
        <p className="text-subheadlinelight dark:text-paragraphdark">
          {project.description}
        </p>
        <div>
          <h3 className="text-headlinelight dark:text-headlinedark font-gabarito text-2xl">
            Technologies
          </h3>
          <ul className="list-disc list-inside text-subheadlinelight dark:text-paragraphdark flex flex-row flex-wrap">
            {project.technologies.map((technology) => (
              <li key={technology} className="list-none mr-2 my-2">
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-between mt-auto">
          {project.link === "" ? null : (
            <a
              className="bg-button text-buttontext font-gabarito text-xl p-2 rounded-lg mt-2 mr-2 flex-1 text-center self-end"
              href={project.link}
            >
              Link
            </a>
          )}
          <a
            className="bg-button text-buttontext font-gabarito text-xl p-2 rounded-lg mt-2 flex-1 text-center self-end"
            href={project.respository}
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};
