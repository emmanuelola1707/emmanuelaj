
import './Services.css'

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
    <section className="services section-padding" id="services">
      <div className="services-inner">
        <div className="services-heading">
          <p className="section-label">WHAT I CAN HELP WITH</p>
          <h2>Services.</h2>
          <p>
            Practical creative support for businesses that want
            to improve their online presence.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
