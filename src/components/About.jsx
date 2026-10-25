
import './About.css'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="about-layout">
        {/* Profile photo animation */}
        <div className="about-photo">
          <Reveal direction="left">
            <img
              src="/images/emmanuel-ajayi.jpeg"
              alt="Emmanuel Ajayi, web developer and creative designer"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <span className="photo-caption">
              Emmanuel Ajayi · EMMANUEL Designs
            </span>
          </Reveal>
        </div>

        {/* About content animation */}
        <div className="about-content">
          <Reveal>
            <p className="section-label">ABOUT ME</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2>
              Design with purpose.
              <br />
              Development with care.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="about-lead">
              I'm Emmanuel Ajayi, a web developer and creative
              designer who enjoys turning ideas into useful,
              well-designed digital experiences.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p>
              I work across website development, graphic design
              and video editing, helping businesses communicate
              their value through thoughtful design and functional
              digital experiences.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p>
              My approach is simple: understand the goal, pay
              attention to the details, and create work that is
              practical, clear and easy to use.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <a href="#contact" className="text-link">
              Let's discuss your project ↗
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
