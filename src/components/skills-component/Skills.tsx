import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
  const isDarkMode = document.documentElement.classList.contains("dark");

  const { languages, frameworks, tools, cloud, certifications } =
    skillsData as SkillsType;

  const slides = [
    { title: "Languages", items: languages, icon: IconBrandTypescript },
    { title: "Frameworks & Libraries", items: frameworks, icon: IconKeyframes },
    { title: "Tools & Practices", items: tools, icon: IconTools },
    { title: "Cloud & Infrastructure", items: cloud, icon: IconCloudCheck },
    { title: "Certifications", items: certifications, icon: IconCertificate },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const controlStyle = {
    backgroundColor: isDarkMode ? "white" : "#0f0e17",
    color: isDarkMode ? "#0f0e17" : "white",
    border: "0.15rem solid #ff8906",
  };

  const indicatorActive = isDarkMode ? "white" : "#0f0e17";
  const indicatorInactive = isDarkMode ? "#555" : "#ccc";

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex sm:-ml-4">
          {slides.map((slide) => (
            <div
              key={slide.title}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] sm:pl-4 min-w-0"
            >
              <div className="flex flex-col justify-start dark:bg-backgroundlight bg-backgrounddark p-4 h-full rounded-lg">
                <div className="text-center w-full flex flex-row justify-between items-center">
                  <h1 className="text-button font-medium text-2xl">{slide.title}</h1>
                  <slide.icon size={48} className="dark:text-headlinelight text-headlinedark" />
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
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={scrollPrev}
          style={controlStyle}
          className="rounded-full p-1 cursor-pointer"
          aria-label="Previous slide"
        >
          <IconArrowLeft size={16} />
        </button>

        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="w-2 h-2 rounded-full transition-colors"
              style={{ backgroundColor: index === selectedIndex ? indicatorActive : indicatorInactive }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          style={controlStyle}
          className="rounded-full p-1 cursor-pointer"
          aria-label="Next slide"
        >
          <IconArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
