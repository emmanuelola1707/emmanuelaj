
import './Hero.css'
import { motion, useReducedMotion } from 'motion/react'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const textAnimation = {
    initial: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0.2 : 0.65,
      ease: 'easeOut',
    },
  }

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <motion.p
            className="hero-eyebrow"
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.1,
            }}
          >
            WEB DEVELOPER & CREATIVE DESIGNER
          </motion.p>

          <motion.h1
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.2,
            }}
          >
            Hi, I'm Emmanuel.
            <br />
            I design and build
            <br />
            websites for businesses.
          </motion.h1>

          <motion.p
            className="hero-description"
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.35,
            }}
          >
            I combine web development, graphic design and
            creative thinking to help businesses build a
            stronger and more professional online presence.
          </motion.p>

          <motion.div
            className="hero-actions"
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.5,
            }}
          >
            <a href="#projects" className="hero-primary">
              View my work <span>↗</span>
            </a>

            <a href="#contact" className="hero-secondary">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: 35, scale: 0.98 }
          }
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.85,
            delay: reduceMotion ? 0 : 0.25,
            ease: 'easeOut',
          }}
        >
          <img
            src="/images/website-promo.jpg"
            alt="Website design displayed on a laptop and mobile phone"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  )
}
