
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
