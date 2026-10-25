
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="footer-brand">
        EMMANUEL Designs
      </a>

      <p>
        © {new Date().getFullYear()} Emmanuel Ajayi.
        All rights reserved.
      </p>

      <a href="#home" className="back-to-top">
        Back to top ↑
      </a>
    </footer>
  )
}
