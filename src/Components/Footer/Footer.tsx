import { useContext } from 'react';
import { portfolioLabel } from '../../data/main.language';
import { LanguageContext } from '../../context/LanguageContext';
import './Footer.css';
const Footer = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className='footer'>
            {portfolioLabel.footer[language]}
        </div>
    )
}

export default Footer