
import './About.css'

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="about-layout">
        <div className="about-photo">
          <img
            src="/images/emmanuel-ajayi.jpeg"
            alt="Emmanuel Ajayi, web developer and creative designer"
            loading="lazy"
          />

          <span className="photo-caption">
            Emmanuel Ajayi · EMMANUEL Designs
          </span>
        </div>

        <div className="about-content">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Design with purpose.
            <br />
            Development with care.
          </h2>

          <p className="about-lead">
            I'm Emmanuel Ajayi, a web developer and creative
            designer who enjoys turning ideas into useful,
            well-designed digital experiences.
          </p>

          <p>
            I work across website development, graphic design
            and video editing, helping businesses communicate
            their value through thoughtful design and functional
            digital experiences.
          </p>

          <p>
            My approach is simple: understand the goal, pay
            attention to the details, and create work that is
            practical, clear and easy to use.
          </p>

          <a href="#contact" className="text-link">
            Let's discuss your project ↗
          </a>
        </div>
      </div>
    </section>
  )
}
