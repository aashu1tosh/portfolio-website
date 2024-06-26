import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import './SocialSideBar.css';

const SocialSideBar = () => {
    return (
        <div className='social-side-bar'>
            <a href="https://www.linkedin.com/in/parajuliaashutosh/" target="_blank">
                <div className="social-links">
                    <p>Linkedin</p>
                    <FaLinkedin size={25} />
                </div>
            </a>

            <a href="https://github.com/aashu1tosh" target="_blank">
                <div className="social-links">
                    <p>Github</p>
                    <FaGithub size={25} />
                </div>
            </a>

            <a href="mailto:aashutosh282@gmail.com" target="_blank">
                <div className="social-links">
                    <p>Email</p>
                    <MdMarkEmailUnread size={25} />
                </div>
            </a>

            <a href="https://leetcode.com/u/aashutosh282/" target="_blank">
                <div className="social-links">
                    <p>LeetCode</p>
                    <SiLeetcode size={25} />
                </div>
            </a>

            <a href="https://www.instagram.com/_._aashutosh_._" target="_blank">
                <div className="social-links">
                    <p>Instagram</p>
                    <FaInstagram size={25} />
                </div>
            </a>

        </div>
    )
}

export default SocialSideBar