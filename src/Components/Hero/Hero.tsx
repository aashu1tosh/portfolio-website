import { useContext } from 'react'
import { image } from '../../config/constant/image'
import { LanguageContext } from '../../context/LanguageContext'
import { portfolioLabel } from '../../data/main.language'
import Background from '../Background/Background'
import './Hero.css'

const Hero = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className='hero'>
            <Background />
            <div className="hero-img">
                <img src={image?.me} alt="" />
                <div className="background-circle">
                </div>
            </div>

            <div data-aos="fade-down-left"
                className="hero-right"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="hero-rc">
                    <h2>{portfolioLabel?.hipart[language]}</h2>
                    <p>{portfolioLabel?.softeng[language]}</p>
                    <p>{portfolioLabel?.foundation[language]}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero