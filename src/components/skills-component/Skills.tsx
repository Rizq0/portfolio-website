import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import skillsData from "../../assets/data/skills.json";
import { SkillsType } from "../../types/skills";

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
    },
    {
      title: "Frameworks & Libraries",
      items: frameworks,
    },
    {
      title: "Databases & Data Management",
      items: databases,
    },
    {
      title: "Cloud & Infrastructure",
      items: cloud,
    },
    {
      title: "Version Control",
      items: versionControl,
    },
    {
      title: "Certifications",
      items: certifications,
    },
  ];

  return (
    <Carousel
      withIndicators
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: "xl", sm: "md" }}
      align="start"
      slidesToScroll={1}
    >
      {slides.map((slide) => (
        <Carousel.Slide key={slide.title}>
          <div className="p-4 h-full text-center border-2 border-headlinelight dark:border-headlinedark rounded-lg">
            <h1 className="text-button font-medium text-lg sm:text-2xl">
              {slide.title}
            </h1>
            <ul>
              {slide.items.map((item: string) => (
                <li
                  key={item}
                  className="dark:text-headlinedark text-subheadlinelight font-gabarito font-medium text-lg sm:text-2xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
