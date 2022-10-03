import "./Footer.css";
import { Link } from "react-router-dom";
import flonaLogo from '../../img/flonalogo.png';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoPinterest } from "react-icons/io";


function Footer() {
    return (
        <div className="footerDiv">
            <footer>
                <div className="footerDiv">
                    <Link to="/home"><img src={flonaLogo}/></Link>
                    <div className="footerLinks">
                        <a href="https://www.facebook.com/AncoraThemes/"><div className="eachFooterLink"><FaFacebookF /></div></a>
                        <a href="https://www.instagram.com/ancora_themes/"><div className="eachFooterLink"><AiOutlineInstagram /></div></a>
                        <a href="https://twitter.com/themes_ancora"><div className="eachFooterLink"><AiOutlineTwitter /></div></a>
                        <a href="https://www.pinterest.com/"><div className="eachFooterLink"><IoLogoPinterest /></div></a>
                    </div>
                </div>
            </footer>
            <div className="privacyDiv">
                <span className="privacySpan">Ashot Avetisyan © 2022. Terms of Use and Privacy Policy</span>
            </div>
        </div>
    )
}

export default Footer;