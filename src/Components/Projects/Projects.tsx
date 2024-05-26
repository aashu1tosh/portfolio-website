import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { portfolioLabel } from '../../data/main.language';

import { image } from '../../config/constant/image';
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.css';

const Projects = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className='project-section'>
            <h2 className='title'>{portfolioLabel.projects[language]}</h2>
            {/* <p id='project-desc'>Some of my Solo Projects.</p> */}

            <div className="projects">
                <ProjectCard
                    title={"Annata Auto's (Classic Car Buying Selling Website)"}
                    language={"React Typescript"}
                    propsImage={image?.auto}
                    githubLink={"https://github.com/aashu1tosh/annata-Vechile-Buying-Selling-Website-"}
                    list={["Full Stack MERN Application",
                        "Implemented user authentication, tokenization, role-based login and conditional rendering.",
                        "Utilized MongoDB for database management and Git for version control.",
                        "Understood passing data through headers",
                        "Devloped this with enhance backendskills"
                    ]}
                />

                <ProjectCard
                    title={"Youtube Clone"}
                    language={"React JSX"}
                    propsImage={image?.youtubeClone}
                    githubLink={"https://github.com/aashu1tosh/youtube-clone"}
                    list={["Integrated google’s open youtube api",
                        "Is responsive, beautiful and I learned CSS concepts during this project"]}
                />

                <ProjectCard
                    title={"News Application"}
                    language={"React Typescript"}
                    propsImage={image?.newsApp}
                    githubLink={"https://github.com/aashu1tosh/news-app"}
                    list={[
                        "Integrated newsapi.orgs api",
                        "Is responsive and beautiful with Dark Light Theme toggle option."]}
                />

                <ProjectCard
                    title={"Weather Application"}
                    language={"React Typescript"}
                    propsImage={image?.weatherapp}
                    githubLink={"https://github.com/aashu1tosh/my-weather-app"}
                    list={["Integrated a openweathermap’s api",
                        "Multi Language Support (English and Nepali) where I used createContext and useContext hook.",
                        "Is responsive and beautiful with Dark Light Theme toggle option."]}
                />

            </div>
        </div>
    )
}

export default Projects