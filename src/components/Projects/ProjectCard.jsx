export default function ProjectCard({ project, onOpenVideo }) {
  const imageStyle = {
    backgroundImage: `url("${project.image}")`,
    backgroundPosition: project.imagePosition || "center",
  };

  const action = project.vimeoId ? (
    <button className="pcard__view" type="button" onClick={() => onOpenVideo(project)}>
      {project.actionLabel} &#8599;
    </button>
  ) : (
    <a href={project.link} className="pcard__view" target="_blank" rel="noopener noreferrer">
      {project.actionLabel} &#8599;
    </a>
  );

  return (
    <article className="pcard reveal in">
      <div className="pcard__thumb">
        <div className="pcard__bg is-loaded" style={imageStyle} />
        <div className="pcard__overlay">{action}</div>
      </div>
      <div className="pcard__body">
        <div className="pcard__meta">
          <span className="pcard__cat">{project.categoryLabel}</span>
          <span className="pcard__yr">{project.year}</span>
        </div>
        <h3 className="pcard__title">{project.title}</h3>
        <p className="pcard__desc">{project.description}</p>
        <div className="pcard__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
