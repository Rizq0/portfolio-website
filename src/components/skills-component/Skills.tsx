import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { useMantineColorScheme } from "@mantine/core";
import skillsData from "../../assets/data/skills.json";
import { SkillsType } from "../../types/skills";
import {
  IconBrandTypescript,
  IconKeyframes,
  IconCloudCheck,
  IconCertificate,
  IconArrowRight,
  IconTools,
  IconArrowLeft,
} from "@tabler/icons-react";

export const Skills: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === "dark";

  const {
    languages,
    frameworks,
    tools,
    cloud,
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
      title: "Tools & Practices",
      items: tools,
      icon: IconTools,
    },
    {
      title: "Cloud & Infrastructure",
      items: cloud,
      icon: IconCloudCheck,
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
      loop
      controlsOffset="xs"
      controlSize={24}
      nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />}
      withIndicators
      styles={{
        control: {
          backgroundColor: isDarkMode ? "#0f0e17" : "white",
          color: isDarkMode ? "white" : "#0f0e17",
          border: "0.15rem solid #ff8906",
          cursor: "pointer",
        },
        indicator: {
          backgroundColor: isDarkMode ? "#0f0e17" : "white",
        },
      }}
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
                    className="dark:text-headlinelight text-headlinedark font-gabarito font-medium text-lg sm:text-xl mx-4 h-[60px]"
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
