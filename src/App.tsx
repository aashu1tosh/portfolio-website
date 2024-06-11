import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './App.css'
import About from './Components/About/About'
import Background from './Components/Background/Background'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Avocation from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import Skills from './Components/Skills/Skills'
import SocialSideBar from './Components/SocialSideBar/SocialSideBar'
import { LanguageProvider } from './context/LanguageContext'

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <SocialSideBar />
        <Background />
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
