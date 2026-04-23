import { projectFilters } from "../../data/projects";

export default function ProjectFilter({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar" aria-label="Project filters">
      {projectFilters.map((filter) => (
        <button
          key={filter.id}
          className={`f-btn reveal${activeFilter === filter.id ? " f-btn--on" : ""}`}
          type="button"
          aria-pressed={activeFilter === filter.id}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
