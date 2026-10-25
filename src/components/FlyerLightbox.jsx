
import { useEffect } from 'react'
import './FlyerLightbox.css'

export default function FlyerLightbox({
  flyers,
  activeIndex,
  onClose,
  onNavigate,
}) {
  const flyer = flyers[activeIndex]

  useEffect(() => {
    if (!flyer) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()

      if (event.key === 'ArrowRight') {
        onNavigate(1)
      }

      if (event.key === 'ArrowLeft') {
        onNavigate(-1)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [flyer, onClose, onNavigate])

  useEffect(() => {
    if (!flyer) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [flyer])

  if (!flyer) return null

  return (
    <div
      className="lightbox-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      role="presentation"
    >
      <section
        className="lightbox-panel"
        role="dialog"
        aria-modal="true"
        aria-label={`Flyer preview: ${flyer.title}`}
      >
        <div className="lightbox-toolbar">
          <div className="lightbox-caption">
            <h2>{flyer.title}</h2>
            <p>
              {activeIndex + 1} of {flyers.length}
            </p>
          </div>

          <button
            type="button"
            className="lightbox-close"
            onClick={onClose}
            aria-label="Close flyer preview"
          >
            ✕
          </button>
        </div>

        <div className="lightbox-image-area">
          {flyers.length > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-prev"
              onClick={() => onNavigate(-1)}
              aria-label="Previous flyer"
            >
              ‹
            </button>
          )}

          <img
            className="lightbox-image"
            src={flyer.image}
            alt={flyer.alt}
          />

          {flyers.length > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-next"
              onClick={() => onNavigate(1)}
              aria-label="Next flyer"
            >
              ›
            </button>
          )}
        </div>

        <p className="lightbox-description">
          {flyer.description}
        </p>
      </section>
    </div>
  )
}
