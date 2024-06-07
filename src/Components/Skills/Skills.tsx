// import React from 'react'

import { useContext } from "react"
import { image } from "../../config/constant/image"
import { LanguageContext } from "../../context/LanguageContext"
import { portfolioLabel } from "../../data/main.language"
import './Skills.css'

const Skills = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className="skills">
            <h2 className="title">{portfolioLabel.skills[language]}</h2>
            <div className="skills-content">
                <div className="skill">
                    <img src={image?.python} alt="1" />
                    <p>Python</p>
                </div>
                <div className="skill">
                    <img src={image?.js} alt="2" />
                    <p>Javascript</p>
                </div>
                <div className="skill">
                    <img src={image?.git} alt="3" />
                    <p>Git</p>
                </div>
                <div className="skill" >
                    <img src={image?.linux} alt="4" />
                    <p >Linux</p>
                </div>
                <div className="skill" >
                    <img src={image?.node} alt="5" />
                    <p>NodeJS</p>
                </div>
                <div className="skill">
                    <img src={image?.typescript} alt="6" />
                    <p>Typescript</p>
                </div>
                <div className="skill">
                    <img src={image?.html} alt="7" />
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <img src={image?.css} alt="8" />
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <img src={image?.react} alt="9" className="logo-react" />
                    <p>ReactJS</p>
                </div>
                <div className="skill">
                    <img src={image?.mongo} alt="20" />
                    <p>MongoDB</p>
                </div>
                <div className="skill">
                    <img src={image?.mysql} alt="21" />
                    <p>MySql</p>
                </div>

                <div className="skill">
                    <img src={image?.c} alt="22" />
                    <p>C</p>
                </div>

                <div className="skill">
                    <img src={image?.cplus} alt="23" />
                    <p>C++</p>
                </div>
            </div>
        </div>
    )
}

export default Skills