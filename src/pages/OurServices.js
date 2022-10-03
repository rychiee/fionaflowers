import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/homepageComponents/Footer";
import HomeSection8 from "../Components/homepageComponents/HomeSection8";
import "./OurServices.css";
import WelcomePart from "./WelcomePart";
import serviceImg1 from "../img/service1.jpg";
import serviceImg2 from "../img/service2.jpg";
import serviceImg3 from "../img/service3.jpg";
import serviceImg4 from "../img/service4.jpg";
import serviceImg5 from "../img/service5.jpg";
import serviceImg6 from "../img/service6.jpg";

function OurServices() {

    const services = [
        {
            serviceNumber: 1,
            serviceImg: serviceImg1,
            serviceName: "BRIDE'S & BRIDESMAIDS' BOUQUETS",
            pageLink: "/our-services/brides-bridesmaids-bouquets"
        },
        {
            serviceNumber: 2,
            serviceImg: serviceImg2,
            serviceName: "CORSAGES & BOUTONNIERES",
            pageLink: "/our-services/corsages-boutonnieres"
        },
        {
            serviceNumber: 3,
            serviceImg: serviceImg3,
            serviceName: "CEREMONY MAIN ALTAR",
            pageLink: "/our-services/ceremony-main-altar"
        },
        {
            serviceNumber: 4,
            serviceImg: serviceImg4,
            serviceName: "AISLE PEW MARKERS",
            pageLink: "/our-services/aisle-pew-markers"
        },
        {
            serviceNumber: 5,
            serviceImg: serviceImg5,
            serviceName: "CEREMONY DECORATION",
            pageLink: "/our-services/ceremony-decoration"
        },
        {
            serviceNumber: 6,
            serviceImg: serviceImg6,
            serviceName: "TABLES & CAKE DECORATION",
            pageLink: "/our-services/tables-cake-decoration"
        },
    ]
    return (
        <div className="servicesPage">
            <Header />
            <WelcomePart PageName={"Our Services"} />
            <section className="offersDiv">
                <div className="offers">
                    {services.map(service => (
                        <div className="eachOffer" key={service.serviceNumber}>
                            <img src={service.serviceImg} />
                            <h2>{service.serviceName}</h2>
                            <Link to={service.pageLink}><button>Details</button></Link>
                        </div>
                    ))}
                </div>
            </section>
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
            <HomeSection8 />
            <Footer />
        </div>
    )
}

export default OurServices;