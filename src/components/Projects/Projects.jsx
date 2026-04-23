import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../../data/projects";
import VideoModal from "../Modal/VideoModal";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

const formatCount = (value) => String(value).padStart(2, "0");

function getCardStep(grid, totalProjects) {
  if (!grid || totalProjects < 1) return 360;
  return grid.scrollWidth / totalProjects;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const gridRef = useRef(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const updateCounter = () => {
    const grid = gridRef.current;
    if (!grid) return;

    const cardWidth = getCardStep(grid, filteredProjects.length);
    const index = Math.round(grid.scrollLeft / cardWidth) + 1;
    setCurrentIndex(Math.min(Math.max(index, 1), filteredProjects.length || 1));
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;

    grid.scrollTo({ left: 0 });
    setCurrentIndex(1);

    const handleScroll = () => updateCounter();
    grid.addEventListener("scroll", handleScroll, { passive: true });

    return () => grid.removeEventListener("scroll", handleScroll);
  }, [filteredProjects.length]);

  const scrollByCard = (direction) => {
    const grid = gridRef.current;
    if (!grid) return;

    const cardWidth = getCardStep(grid, filteredProjects.length);
    grid.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects__header reveal">
          <span className="section-label">03 &mdash; Projects</span>
          <h2 className="section-title">
            Selected
            <br />
            <em>Work</em>
          </h2>
          <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        <div className="carousel">
          <button className="carousel__arrow carousel__arrow--left" type="button" aria-label="Previous project" onClick={() => scrollByCard(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12,19 5,12 12,5" />
            </svg>
          </button>
          <button className="carousel__arrow carousel__arrow--right" type="button" aria-label="Next project" onClick={() => scrollByCard(1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </button>

          <div className="projects__grid" ref={gridRef}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpenVideo={setSelectedVideo} />
            ))}
          </div>

          <div className="carousel__counter" aria-live="polite">
            <span className="carousel__current">{formatCount(currentIndex)}</span>
            <span className="carousel__divider">/</span>
            <span className="carousel__total">{formatCount(filteredProjects.length)}</span>
          </div>
        </div>
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}
