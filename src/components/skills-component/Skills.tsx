import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import skillsData from "../../assets/data/skills.json";
import { SkillsType } from "../../types/skills";
import {
  IconBrandTypescript,
  IconKeyframes,
  IconDatabaseCog,
  IconCloudCheck,
  IconGitBranch,
  IconCertificate,
} from "@tabler/icons-react";

export const Skills: React.FC = () => {
  const {
    languages,
    frameworks,
    databases,
    cloud,
    versionControl,
    certifications,
  } = skillsData as SkillsType;

  const slides = [
    {
      title: "Languages",
      items: languages,
      icon: IconBrandTypescript,
    },
    {
      title: "Frameworks & Libraries",
      items: frameworks,
      icon: IconKeyframes,
    },
    {
      title: "Databases & Data Management",
      items: databases,
      icon: IconDatabaseCog,
    },
    {
      title: "Cloud & Infrastructure",
      items: cloud,
      icon: IconCloudCheck,
    },
    {
      title: "Version Control",
      items: versionControl,
      icon: IconGitBranch,
    },
    {
      title: "Certifications",
      items: certifications,
      icon: IconCertificate,
    },
  ];

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: "xl", sm: "md" }}
      align="start"
      slidesToScroll={1}
    >
      {slides.map((slide) => (
        <Carousel.Slide key={slide.title}>
          <div className="flex flex-col justify-start dark:bg-backgroundlight bg-backgrounddark p-4 h-full rounded-lg">
            <div className="text-center w-full flex flex-row justify-between items-center">
              <h1 className="text-button font-medium text-2xl">
                {slide.title}
              </h1>
              <slide.icon
                size={48}
                className="dark:text-headlinelight text-headlinedark"
              />
            </div>
            <ul>
              <div className="text-center w-full flex flex-row flex-wrap justify-evenly mt-4">
                {slide.items.map((item: string) => (
                  <li
                    key={item}
                    className="dark:text-headlinelight text-headlinedark font-gabarito font-medium text-lg sm:text-xl mx-4"
                  >
                    {item}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
