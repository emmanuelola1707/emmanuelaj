
import './Services.css'
import Reveal from './Reveal'

const services = [
  {
    number: '01',
    title: 'Website Development',
    description:
      'Responsive websites built with modern tools, with attention to structure, performance and usability.',
  },
  {
    number: '02',
    title: 'Website Design',
    description:
      'Thoughtful page layouts and interfaces that make a business easy to understand and navigate.',
  },
  {
    number: '03',
    title: 'Graphic Design',
    description:
      'Brand visuals, promotional graphics and digital assets that communicate a consistent identity.',
  },
  {
    number: '04',
    title: 'Video Editing',
    description:
      'Edited visual content for social media, promotions and other digital communication.',
  },
]

export default function Services() {
  return (
    <section
      className="services section-padding"
      id="services"
    >
      <div className="services-inner">
        {/* Animated section heading */}
        <div className="services-heading">
          <Reveal>
            <p className="section-label">
              WHAT I CAN HELP WITH
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2>My Services</h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="services-subtitle">
              Creative solutions for growing brands.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="services-intro">
              Practical creative support for businesses that
              want to improve their online presence.
            </p>
          </Reveal>
        </div>

        {/* Animated service list */}
        <div className="services-list">
          {services.map((service, index) => (
            <Reveal
              key={service.number}
              delay={index * 0.1}
            >
              <article className="service-item">
                <span className="service-number">
                  {service.number}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span
                  className="service-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
