import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Avocation from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import Skills from './Components/Skills/Skills'
import SocialSideBar from './Components/SocialSideBar/SocialSideBar'
import { LanguageProvider } from './context/LanguageContext'
import Hero from './Components/Hero/Hero'

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <SocialSideBar />
        <Hero />
        <div className="main-container ">
          <About />
          <Skills />
          <Resume />
          <Avocation />
          <Contact />
        </div>
        <Footer />
      </LanguageProvider>
    </>
  )
}

export default App
