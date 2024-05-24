import { useContext } from 'react';
import { image } from '../../config/constant/image';
import { LanguageEnum } from '../../types/global.types';
import { LanguageContext } from '../../context/LanguageContext';
import './LanguageToggleButton.css';

const LanguageToggleButton = () => {
    const { language, changeLanguage } = useContext(LanguageContext);

    const languageChange = () => {
        if (language === LanguageEnum.en) {
            changeLanguage(LanguageEnum.ne);
        } else {
            changeLanguage(LanguageEnum.en)
        }
    }
    return (
        <span id='language-toggle-button' onClick={
            languageChange
        }>
            {language === 'en' ? <img src={image.nepal} alt="" /> : <img src={image.usa} alt="" />}
        </span>
    )
}

export default LanguageToggleButton