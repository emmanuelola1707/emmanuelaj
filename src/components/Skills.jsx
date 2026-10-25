
import './Skills.css'
import Reveal from './Reveal'

const skillGroups = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Building responsive, functional websites for desktop and mobile.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Vite',
      'Responsive Design',
      'Git & GitHub',
      'Vercel',
    ],
  },
  {
    number: '02',
    title: 'Website Design & E-commerce',
    description:
      'Designing clear website experiences and online stores for businesses.',
    skills: [
      'Website Design',
      'UI Design',
      'Shopify Store Setup',
      'Landing Pages',
      'Mobile-first Design',
    ],
  },
  {
    number: '03',
    title: 'Graphic Design & Branding',
    description:
      'Creating visual assets that help businesses communicate their identity.',
    skills: [
      'Brand Identity',
      'Logo Design',
      'Flyer Design',
      'Marketing Graphics',
      'Canva',
    ],
  },
  {
    number: '04',
    title: 'Video Editing',
    description:
      'Editing visual content for promotions and digital platforms.',
    skills: [
      'Video Editing',
      'Social Media Content',
      'Promotional Videos',
    ],
  },
]

export default function Skills() {
  return (
    <section
      className="skills section-padding"
      id="skills"
    >
      <div className="skills-inner">
        {/* Animated section heading */}
        <div className="skills-heading">
          <Reveal>
            <p className="section-label">
              EXPERTISE & CAPABILITIES
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2>
              Skills built around
              <br />
              creative problem-solving.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="skills-intro">
              I combine technical development with visual design
              to help businesses create a stronger digital presence.
            </p>
          </Reveal>
        </div>

        {/* Animated skill groups */}
        <div className="skills-groups">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.number}
              delay={index * 0.12}
            >
              <article className="skill-group">
                <div className="skill-group-top">
                  <span className="skill-number">
                    {group.number}
                  </span>

                  <div className="skill-group-info">
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span
                      className="skill-tag"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
