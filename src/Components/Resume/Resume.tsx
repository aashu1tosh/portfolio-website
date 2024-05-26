import { useContext } from "react";
import { MdOutlineComputer } from "react-icons/md";
import { LanguageContext } from "../../context/LanguageContext";
import { portfolioLabel } from "../../data/main.language";

import { FaCrown } from "react-icons/fa";
import './Resume.css';

const Resume = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div className="resume">
      <h2 className="title">{portfolioLabel.resume[language]}</h2>
      <p id="resume-desc">
        {portfolioLabel.resumeDescription[language]}
      </p>

      <div className="resume-content">
        <div className="education">
          <div className="education-heading">
            <span><FaCrown /></span>
            <h3>{portfolioLabel?.education[language]}</h3>
          </div>
          <div className="education-detail">
            <div data-aos="zoom-in-up" data-aos-once="true" className="education-box">
              <p>{portfolioLabel?.educationBEDate[language]}</p>
              <h4>{portfolioLabel?.educationBE[language]}</h4>
              <p>{portfolioLabel?.educationBEDescription[language]}</p>
              <p>{portfolioLabel?.educationBEInstitue[language]}</p>
            </div>

            <div data-aos="zoom-in-up"
              data-aos-once="true"
              className="education-box">
              <p>{portfolioLabel?.educationp2Date[language]}</p>
              <h4>{portfolioLabel?.educationp2[language]}</h4>
              <p>{portfolioLabel?.educationp2Description[language]}</p>
              <p>{portfolioLabel?.educationp2Institue[language]}</p>
            </div>

            <div data-aos="zoom-in-up" data-aos-once="true" className="education-box">
              <p>{portfolioLabel?.educationSlcDate[language]}</p>
              <h4>{portfolioLabel?.educationSlc[language]}</h4>
              <p>{portfolioLabel?.educationSlcDescription[language]}</p>
              <p>{portfolioLabel?.educationSlcInstitue[language]}</p>
            </div>
            
          </div>
        </div>

        <div className="education">
          <div className="education-heading">
            <span><MdOutlineComputer /></span>
            <h3>{portfolioLabel.experience[language]}</h3>
          </div>
          <div className="education-detail">
            <div data-aos="zoom-in-up" data-aos-once="true" className="education-box">
              <p>{portfolioLabel?.experience1Date[language]}</p>
              <h4>{portfolioLabel?.experience1Role[language]}</h4>
              <p>{portfolioLabel?.experience1Description[language]}</p>
              <p>{portfolioLabel?.experience1Company[language]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume