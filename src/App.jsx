import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skill from "./Components/Skill"
import Services from "./Components/Services"
import Projects from "./Components/Projects"
import Testimonial  from "./Components/Testimonials"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    easing: 'ease-in-out-sine',
  })
},[])

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Skill/>
     <Services/>
     <Projects/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
