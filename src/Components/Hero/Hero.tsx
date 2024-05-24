import { useContext } from 'react'
import { image } from '../../config/constant/image'
import { LanguageContext } from '../../context/LanguageContext'
import { portfolioLabel } from '../../data/main.language'
import './Hero.css'

const Hero = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className='hero'>
            <div className="hero-img">
                <img src={image?.me} alt="" />
                <div className="background-circle">
                </div>
            </div>

            <div className="hero-right">
                <h2 className='hero-rc'>{portfolioLabel?.hipart[language]}</h2>
                <p className='hero-rc'>{portfolioLabel?.softeng[language]}</p>
                <p className='hero-rc'>{portfolioLabel?.foundation[language]}</p>
            </div>
        </div>
    )
}

export default Hero