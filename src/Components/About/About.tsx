import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { portfolioLabel } from '../../data/main.language'
import './About.css'

const About = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className='about'>
            <h2 className='title'>{portfolioLabel?.about[language]}</h2>
            <p>{portfolioLabel?.aboutDescription[language]}</p>
        </div>
    )
}

export default About