
import { useCallback, useState } from 'react'
import ProjectCard from './ProjectCard'
import FlyerLightbox from './FlyerLightbox'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'JAT Global Property Limited',
    category: 'Website',
    description:
      'A real estate website concept with property-focused messaging and accessible contact options.',
    image: '/images/jat-global.PNG',
    alt: 'JAT Global Property website preview',
    link: 'https://jat-global.vercel.app/',
    tags: ['Web Design', 'Real Estate'],
  },
  {
    id: 2,
    title: 'Mattizzy Furniture',
    category: 'Website',
    description:
      'A furniture website concept with a warm visual identity and product-focused layout.',
    image: '/images/mattizzy-furniture.PNG',
    alt: 'Mattizzy Furniture website preview',
    link: 'https://matizzy-furniture.vercel.app/',
    tags: ['Web Design', 'Furniture'],
  },
  {
    id: 3,
    title: 'Pelium Beauty Empire',
    category: 'Flyer',
    description:
      'A promotional graphic for a beauty brand.',
    image: '/images/flyer-pelium.png',
    alt: 'Pelium Beauty Empire promotional flyer',
    tags: ['Graphic Design', 'Beauty'],
  },
  {
    id: 4,
    title: "Breaking Free",
    category:'Flyer',
    description: "A guided journal cover and editorial design for an addiction recovery journal.",
    image: "/images/breaking-free.png",
    tags: ['Graphic Design', 'E-Book cover'],
  },
  {
    id: 5,
    title: "Zayn Wear",
    category: 'Flyer',
    description: "A bold fashion promotional design for a clothing brand.",
    image: "/images/zayn-wear.png",
  },
  {
    id:6,
    title: "Eyinju Wrapstars & Glams",
    category: 'Flyer',
    description: "A beauty and accessories promotional flyer.",
    image: "/images/eyinju-glams.png",
  },
  {
    id: 7,
    title: "Creative Future",
    category:'Flyer',
    description: "An editorial-style magazine cover exploring design and technology.",
    image: "/images/creative-future.png",
  },
  {
    id: 8,
    title: "Birthday Design",
    category: 'Flyer',
    description: "A personalized birthday greeting design.",
    image: "/images/birthday-design.png",
  },
  {
    id: 9,
    title: "Cleaning & Fumigation Services",
    category: 'Flyer',
    description: "A business advertising flyer showcasing cleaning services.",
    image: "/images/cleaning-services.png",
  },
];

const categories = ['All Work', 'Website', 'Flyer']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Work')
  const [activeFlyerId, setActiveFlyerId] = useState(null)

  const flyers = projects.filter(
    (project) => project.category === 'Flyer'
  )

  const filteredProjects =
    activeCategory === 'All Work'
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        )

  const activeIndex = flyers.findIndex(
    (flyer) => flyer.id === activeFlyerId
  )

  const closeLightbox = useCallback(() => {
    setActiveFlyerId(null)
  }, [])

  const navigateFlyers = useCallback(
    (direction) => {
      setActiveFlyerId((currentId) => {
        const currentIndex = flyers.findIndex(
          (flyer) => flyer.id === currentId
        )

        if (currentIndex === -1 || flyers.length === 0) {
          return currentId
        }

        const nextIndex =
          (currentIndex + direction + flyers.length) %
          flyers.length

        return flyers[nextIndex].id
      })
    },
    [flyers]
  )

  return (
    <section className="projects section-padding" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <p className="section-label">SELECTED WORK</p>

            <h2>
              Design that works.
              <br />
              Creativity with purpose.
            </h2>
          </div>

          <p className="projects-intro">
            Explore website concepts and graphic designs
            created to help businesses present themselves
            professionally.
          </p>
        </div>

        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? 'project-filter active'
                  : 'project-filter'
              }
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'Website' ? 'Websites' : category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPreview={(selectedProject) =>
                setActiveFlyerId(selectedProject.id)
              }
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="projects-empty">
            No projects in this category yet.
          </p>
        )}
      </div>

      {activeIndex !== -1 && (
        <FlyerLightbox
          flyers={flyers}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onNavigate={navigateFlyers}
        />
      )}
    </section>
  )
}
