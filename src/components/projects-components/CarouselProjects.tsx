import React, { useCallback, useEffect, useState } from "react";
import { Project } from "../../types/project";
import useEmblaCarousel from "embla-carousel-react";
import projectsData from "../../assets/data/projects.json";
import { IndividualProject } from "./IndividualProject";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

export const Projects: React.FC = () => {
  return null;
};

export const CarouselProjects: React.FC = () => {
  const projects: Project[] = projectsData;

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

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex sm:-ml-4">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] sm:pl-4 min-w-0"
            >
              <IndividualProject project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={scrollPrev}
          className="bg-base-content text-base-100 border border-primary rounded-full p-1 cursor-pointer"
          aria-label="Previous slide"
        >
          <IconArrowLeft size={16} />
        </button>

        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === selectedIndex ? "bg-base-content" : "bg-base-content/30"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="bg-base-content text-base-100 border border-primary rounded-full p-1 cursor-pointer"
          aria-label="Next slide"
        >
          <IconArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
