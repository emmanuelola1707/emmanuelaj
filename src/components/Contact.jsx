
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="contact-inner">
        <p className="section-label">HAVE A PROJECT IN MIND?</p>

        <h2>
          Let's make
          <br />
          something useful.
        </h2>

        <p className="contact-description">
          If you need a website, better visual branding or
          creative support for your business, I'd be glad to
          hear about your project.
        </p>

        <a
          className="contact-email"
          href="mailto:olamideajayi1707@gmail.com"
        >
          olamideajayi1707@gmail.com ↗
        </a>

        <div className="contact-links">
          <a
            href="https://wa.me/2348156865669"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp ↗
          </a>

          <a
            href="https://www.linkedin.com/in/emmanuel-olamide-ajayi-8987b4446/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8ETDKaiaQ8izlYG3eS2mFQ%3D%3D"
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
      </div>
    </section>
  )
}
