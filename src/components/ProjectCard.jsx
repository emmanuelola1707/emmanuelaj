
import { motion, useReducedMotion } from 'motion/react'
import './ProjectCard.css'

export default function ProjectCard({ project, onPreview }) {
  const isFlyer = project.category === 'Flyer'
  const reduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const handlePreview = () => {
    if (isFlyer) {
      onPreview?.(project)
    } else if (project.link) {
      window.open(
        project.link,
        '_blank',
        'noopener,noreferrer'
      )
    }
  }

  return (
    <motion.article
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
              transition: { duration: 0.25 },
            }
      }
    >
      <motion.button
        type="button"
        className={`project-preview ${
          isFlyer ? 'flyer-preview' : ''
        }`}
        onClick={handlePreview}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        aria-label={
          isFlyer
            ? `Preview ${project.title}`
            : `Visit ${project.title} website`
        }
      >
        <motion.img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.035,
                  transition: { duration: 0.4 },
                }
          }
        />

        <span className="project-open">
          {isFlyer ? 'Enlarge design ↗' : 'View website ↗'}
        </span>
      </motion.button>

      <div className="project-info">
        <p className="project-category">
          {isFlyer ? 'GRAPHIC DESIGN' : 'WEB DESIGN'}
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

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
            onClick={() => onPreview?.(project)}
          >
            View full design ↗
          </button>
        )}
      </div>
    </motion.article>
  )
}
