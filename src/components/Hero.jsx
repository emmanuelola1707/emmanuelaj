
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">
            WEB DEVELOPER & CREATIVE DESIGNER
          </p>

          <h1>
            Hi, I'm Emmanuel.
            <br />
            I design and build
            <br />
            websites for businesses.
          </h1>

          <p className="hero-description">
            I combine web development, graphic design and
            creative thinking to help businesses build a
            stronger and more professional online presence.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary">
              View my work <span>↗</span>
            </a>

            <a href="#contact" className="hero-secondary">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/website-promo.jpg"
            alt="Website design displayed on a laptop and mobile phone"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
