import "./HomeSection8.css";
import naghsh from "../../img/naghsh.png";
import { Link } from "react-router-dom";
import priceImg1 from "../../img/price-img1.jpg";
import priceImg2 from "../../img/price-img2.jpg";
import priceImg3 from "../../img/price-img3.jpg";


function HomeSection8() {

    const serviceTypes = [
        {
            serviceNum: 1,
            serviceImage: priceImg1,
            serviceName: "BOUQUETS",
            serviceAdvantages: ["Bridal Bouquets", "Bridesmaids' Bouquets", "Corsages", "Boutonnieres"],
            price: "399.00"
        },
        {
            serviceNum: 2,
            serviceImage: priceImg2,
            serviceName: "CEREMONY + BOUQUETS",
            serviceAdvantages: ["Bride's & Bridemaids' Bouquets", "Corsages & Boutonnieres", "Ceremony Main Altar", "Aisle Pew Markers"],
            price: "799.00"
        },
        {
            serviceNum: 3,
            serviceImage: priceImg3,
            serviceName: "FULL PACKAGE",
            serviceAdvantages: ["Bride's & Bridemaids' Bouquets", "Corsages & Boutonnieres", "Ceremony Decoration", "Tables & Cake Decoration"],
            price: "999.00"
        }
    ]

    return(
        <section className="section8">
            <div className="section8content">
                <div className="sec8part1">
                    <div className="section8description">
                        <h1>Our Events Plans</h1>
                        <p>Prices</p>
                        <img src={naghsh}/>
                    </div>
                </div>
                <div className="sec8part2">
                    <div className="serviceDivs">
                        {serviceTypes.map((serviceType) => (
                            <div className="eachService" key={serviceType.serviceNum}>
                                <img src={serviceType.serviceImage} />
                                <h1>{serviceType.serviceName}</h1>
                                <ul>
                                    {serviceType.serviceAdvantages.map((advantage, index) => {
                                        return(
                                            <li key={index} >{advantage}</li>
                                        )
                                    })}
                                </ul>
                                <p>From <span>${serviceType.price}</span></p>
                                <Link to="/shop"><button>Order Now</button></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection8;