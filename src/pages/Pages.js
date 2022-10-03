import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "./Pages.css";
import flonaLogo from "../img/flonalogo.png";
import WelcomePart from "./WelcomePart";
import Footer from "../Components/homepageComponents/Footer";

function Pages() {

    const packages = [
        {
            packageName: "INSTALLATION + LOGO CHANGE",
            packageAdvantages: ["The template will be installed on your server exactly as the demo looks like. You will get access to the admin panel, so you can manage your website.", "We will replace the template’s logo with yours on each page of the template. The logo has to be  in good quality in .PSD, .EPS, .PNG, .JPG format. Logo width should be 300px and 600px"],
            price: "39"
        },
        {
            packageName: "READY-TO-USE WEBSITE",
            packageAdvantages: ["Theme installation on you server with your logo", "Google map with your address set", "Content and images replacement up to 6 pages (without layout change)", "Removing elements that you do not need on your website", "Social icons set (without changing theme layout)", "Color scheme replacement"],
            price: "350"
        },
        {
            packageName: "FULL WEBSITE PACKAGE",
            packageAdvantages: ["WordPress and theme installation", "Customization of website branding", "Content Development (15 royalty-free images and 1500 words of text)", "Content setup (adding 6 pages, 6 posts, Revolution sliders)", "SEO Essentials", "Website speed optimization"],
            price: "699"
        }
    ]


    return(
        <div className="Pages">
            <Header />
            <WelcomePart PageName={"Service Plus"} />

            <div className="CustomerDiv">
                <div className="customerMessage">
                    <h1>Dear Customers,</h1>
                    <p>Our primary goal is developing a secure and customizable theme framework that meets the needs of the end user. Therefore, our customers are able to create websites using our templates as easy as 1-2-3! This process requires minimum knowledge of WordPress and coding, and extended documentation and our Support Team is always at your service. However, we ask you to keep in mind that sometimes issues occur not because of templates malfunction. There might be situations when it doesn’t depend on us and the framework. For example, server settings, some extra functional that requires deep file customization, or additional plugins usage. And of course, an attempt to build a website in a very short time.</p>
                    <p>We know our theme framework perfectly and have a highly-professional team of developers. They will help you to develop the website you need. If you need website customization, contact us for </p>
                </div>
            </div>

            <h1 className="packageTitle">Packages</h1>
            <div className="webPackages">
                    <div className="serviceDivs">
                        {packages.map((eachPackage, index) => (
                            <div className="eachPackage eachService" key={index}>
                                <h1>{eachPackage.packageName}</h1>
                                <ul>
                                    {eachPackage.packageAdvantages.map((advantage, index) => {
                                        return(
                                            <li key={index}>{advantage}</li>
                                        )
                                    })}
                                </ul>
                                <p>From <span>${eachPackage.price}</span></p>
                                <button>Grab This Deal</button>
                            </div>
                        ))}
                    </div>
            </div>

            <Footer />

        </div>
    )
}

export default Pages;