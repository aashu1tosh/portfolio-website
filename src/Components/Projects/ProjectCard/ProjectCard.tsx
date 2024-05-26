import { FaGithub } from 'react-icons/fa'
import './ProjectCard.css'

const ProjectCard = (props: { title: string, language: string, propsImage: string, githubLink: string, list: string[] }) => {
    const { title, language, githubLink, list, propsImage } = props
    return (
        <div className="flip-card"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-once="true">

            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="flip-card-front-img-container">
                        <img src={propsImage} alt="Prj 1" />
                    </div>
                    <div className='overlay-text'>{title}</div>
                </div>
                <div className="flip-card-back">
                    <h2>{title}</h2>
                    <h3>{language}</h3>
                    <ul>
                        {
                            list.map((data, index) => (
                                <li key={index}>{data}</li>
                            ))
                        }
                    </ul>
                    <h2 className='github-link'>
                        <a href={githubLink} target="_blank">
                            <FaGithub />
                        </a>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard