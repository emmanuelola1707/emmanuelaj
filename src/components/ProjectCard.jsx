
import './ProjectCard.css'

export default function ProjectCard({ project, onPreview }) {
  const isFlyer = project.category === 'Flyer'

  return (
    <article className="project-card">
      <button
        type="button"
        className={`project-preview ${isFlyer ? 'flyer-preview' : ''}`}
        onClick={() => {
          if (isFlyer) {
            onPreview(project)
          } else if (project.link) {
            window.open(
              project.link,
              '_blank',
              'noopener,noreferrer'
            )
          }
        }}
        aria-label={
          isFlyer
            ? `Preview ${project.title}`
            : `Visit ${project.title} website`
        }
      >
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
        />

        <span className="project-open">
          {isFlyer ? 'Enlarge design ↗' : 'View website ↗'}
        </span>
      </button>

      <div className="project-info">
        <p className="project-category">
          {isFlyer ? 'GRAPHIC DESIGN' : 'WEB DESIGN'}
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        {/* <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div> */}

        {project.link && !isFlyer && (
          <a
            className="project-visit"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore live website ↗
          </a>
        )}

        {isFlyer && (
          <button
            type="button"
            className="flyer-view-link"
            onClick={() => onPreview(project)}
          >
            View full design ↗
          </button>
        )}
      </div>
    </article>
  )
}
