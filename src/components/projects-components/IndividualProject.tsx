import React from "react";
import { Project } from "../../types/project";

interface Props {
  project: Project;
}

export const IndividualProject: React.FC<Props> = ({ project }) => {
  const { name, description, technologies, link, repository, image } = project;

  return (
    <div className="relative flex flex-col p-4 border-2 border-headlinelight dark:border-headlinedark rounded-lg h-full w-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.2",
        }}
      />
      <div className="relative z-10 flex flex-col h-full gap-4">
        <h2 className="text-headlinelight dark:text-headlinedark font-gabarito font-medium text-2xl">
          {name}
        </h2>
        <div>
          <p className="text-headlinelight dark:text-buttontext text-lg font-gabarito">
            {description}
          </p>
          <div>
            <h3 className="text-headlinelight dark:text-headlinedark font-gabarito font-medium text-2xl mt-4">
              Technologies
            </h3>
            <ul className="list-disc list-inside text-subheadlinelight dark:text-paragraphdark flex flex-row flex-wrap">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="list-none mr-2 my-2 rounded-full bg-button dark:text-buttontext font-gabarito font-medium px-3 text-lg"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-end gap-4 mt-auto">
          {link === "" ? null : (
            <a
              className="text-backgrounddark hover:text-button dark:text-backgroundlight dark:hover:text-button"
              href={link}
              target="_blank"
              title="Live Site"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="40"
                height="40"
                strokeWidth="2"
              >
                <path d="M9 15l6 -6"></path>
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
              </svg>
            </a>
          )}
          <a
            className="text-backgrounddark hover:text-button dark:text-backgroundlight dark:hover:text-button"
            href={repository}
            target="_blank"
            title="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="40"
              height="40"
              strokeWidth="2"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
