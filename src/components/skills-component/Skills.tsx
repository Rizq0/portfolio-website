import React from "react";
import skillsData from "../../assets/data/skills.json";
import { SkillsType } from "../../types/skills";

const Skills: React.FC = () => {
  const {
    languages,
    frameworks,
    databases,
    cloud,
    versionControl,
    certifications,
  } = skillsData as SkillsType;

  console.log(languages, databases, cloud, versionControl, certifications);

  return (
    <div className="text-center font-gabarito grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-4 border-2 border-headlinelight dark:border-headlinedark rounded-lg min-h-[375px]">
        <h1 className="text-button font-medium text-lg sm:text-2xl">
          Languages
        </h1>
        <ul>
          {languages.map((language: string) => (
            <li
              key={language}
              className="dark:text-headlinedark text-subheadlinelight font-gabarito font-medium text-lg sm:text-2xl"
            >
              {language}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-2 border-headlinelight dark:border-headlinedark rounded-lg min-h-[375px]">
        <h1 className="text-button font-medium text-lg sm:text-2xl">
          Frameworks & Libraries
        </h1>
        <ul>
          {frameworks.map((framework: string) => (
            <li
              key={framework}
              className="dark:text-headlinedark text-subheadlinelight font-gabarito font-medium text-lg sm:text-2xl"
            >
              {framework}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-2 border-headlinelight dark:border-headlinedark rounded-lg min-h-[375px]">
        <h1 className="text-button font-medium text-lg sm:text-2xl">
          Databases & Data Management
        </h1>
        <ul>
          {databases.map((database: string) => (
            <li
              key={database}
              className="dark:text-headlinedark text-subheadlinelight font-gabarito font-medium text-lg sm:text-2xl"
            >
              {database}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-2 border-headlinelight dark:border-headlinedark rounded-lg min-h-[375px]">
        <h1 className="text-button font-medium text-lg sm:text-2xl">
          Cloud & Infrastructure
        </h1>
        <ul>
          {cloud.map((clouditem: string) => (
            <li
              key={clouditem}
              className="dark:text-headlinedark text-subheadlinelight font-gabarito font-medium text-lg sm:text-2xl"
            >
              {clouditem}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-2 border-headlinelight dark:border-headlinedark rounded-lg min-h-[375px]">
        <h1 className="text-button font-medium text-lg sm:text-2xl">
          Version Control
        </h1>
        <ul>
          {versionControl.map((versionitem: string) => (
            <li
              key={versionitem}
              className="dark:text-headlinedark text-subheadlinelight font-gabarito font-medium text-lg sm:text-2xl"
            >
              {versionitem}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-2 border-headlinelight dark:border-headlinedark rounded-lg">
        <h1 className="text-button font-medium text-lg sm:text-2xl">
          Certifications
        </h1>
        <ul>
          {certifications.map((certification: string) => (
            <li
              key={certification}
              className="dark:text-headlinedark text-subheadlinelight font-gabarito font-medium text-lg sm:text-2xl"
            >
              {certification}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
