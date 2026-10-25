
import './Contact.css'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="contact-inner">
        <Reveal delay={0.05}>
          <p className="section-label">
            HAVE A PROJECT IN MIND?
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h2>
            Let's make
            <br />
            something useful.
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="contact-description">
            If you need a website, better visual branding or
            creative support for your business, I'd be glad to
            hear about your project.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <a
            className="contact-email"
            href="mailto:olamideajayi1707@gmail.com"
          >
            olamideajayi1707@gmail.com ↗
          </a>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="contact-links">
            <a
              href="https://wa.me/2348156865669"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>

            <a
              href="https://www.linkedin.com/in/emmanuel-olamide-ajayi-8987b4446/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/emmanuelola1707"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
