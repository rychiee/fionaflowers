import Header from "../Components/Header";
import { Link } from "react-router-dom";
import HomeSection3 from "../Components/homepageComponents/HomeSection3";
import HomeSection6 from "../Components/homepageComponents/HomeSection6";
import HomeSection7 from "../Components/homepageComponents/HomeSection7";
import flonaLogo from "../img/flonalogo.png"
import "./About.css"
import WelcomePart from "./WelcomePart";
import Footer from "../Components/homepageComponents/Footer";


function About() {
    return (
        <div className="aboutUs">
            <Header />
            <WelcomePart PageName={"About Us"} />
            <HomeSection3 link="/team-members"/>
            <HomeSection6 />
            <HomeSection7 />
            <div className="section9part1">
                        <div className="updateDiv1">
                            <h3>Stay Tuned for Updates!</h3>
                        </div>
                        <div className="updateDiv2">
                            <form>
                                <input type="email" className="email_input" placeholder="enter email" />
                                <input type="submit" className="submit_input" value="submit" />
                            </form>
                        </div>
                </div>

                <Footer />
        </div>
    )
}

export default About;