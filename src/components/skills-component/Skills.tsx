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
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: "xl", sm: "md" }}
      align="start"
      slidesToScroll={1}
    >
      {slides.map((slide) => (
        <Carousel.Slide key={slide.title}>
          <div className="p-4 h-full text-center rounded-lg dark:bg-backgroundlight bg-backgrounddark">
            <h1 className="text-button font-medium text-lg sm:text-xl">
              {slide.title}
            </h1>
            <ul>
              {slide.items.map((item: string) => (
                <li
                  key={item}
                  className="dark:text-headlinelight text-headlinedark font-gabarito font-medium text-lg sm:text-xl"
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
