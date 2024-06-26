import { useContext, useEffect, useState } from 'react'
import { RiMenu4Fill } from 'react-icons/ri'
import { Link } from 'react-scroll'
import { LanguageContext } from '../../context/LanguageContext'
import { portfolioLabel } from '../../data/main.language'
import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton'
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton'
import './Navbar.css'

const Navbar = () => {
    const { language } = useContext(LanguageContext);
    const [sticky, setSticky] = useState<boolean>(false);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 10 ? setSticky(true) : setSticky(false);
        })
    }, []);

    return (
        <div className={`nav-full ${sticky ? 'dark-nav' : ''}`}>

            <div className="nav-left">
                <Link to='/'>{portfolioLabel.title[language]}</Link>
            </div>
            <div className="nav-middle">
                <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                    <li><Link to='about' smooth={true} offset={-180} duration={500} onClick={toggleMenu} >{portfolioLabel?.about[language]}</Link> </li>
                    <li><Link to='skills' smooth={true} offset={-180} duration={500} onClick={toggleMenu} >{portfolioLabel?.skills[language]}</Link></li>
                    <li><Link to='resume' smooth={true} offset={-180} duration={500} onClick={toggleMenu} >{portfolioLabel?.resume[language]}</Link></li>
                    <li><Link to='project' smooth={true} offset={-180} duration={500} onClick={toggleMenu} >{portfolioLabel?.projects[language]}</Link></li>
                    <li><Link to='contact' smooth={true} offset={-180} duration={500} onClick={toggleMenu} >{portfolioLabel?.contact[language]}</Link></li>
                </ul>
            </div>
            <div className="nav-right">
                <span><LanguageToggleButton /></span>
                <span><ThemeToggleButton /></span>
                <span id="toggle-button" onClick={toggleMenu}>
                    <RiMenu4Fill size={30} />
                </span>
            </div>

        </div>
    )
}

export default Navbar