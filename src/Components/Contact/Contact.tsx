import { useContext, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { portfolioLabel } from '../../data/main.language'
import './Contact.css'

const Contact = () => {
    const { language } = useContext(LanguageContext);
    const [result, setResult] = useState<string>("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a8d486cc-3192-46aa-b849-fa06bbff2e82");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }); const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact'>
            <h2 className="title">{portfolioLabel.contact[language]}</h2>

            <div className="contact-content">
                <form onSubmit={onSubmit}>
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" placeholder='Your Email Address' required />
                    <textarea name='message' placeholder='Your message' required />
                    <button type='submit' className=''>Submit</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact