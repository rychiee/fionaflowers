import "./portfolio.css";
import Header from "../Components/Header";
import WelcomePart from "./WelcomePart"
import Footer from "../Components/homepageComponents/Footer";
import naghsh from "../img/naghsh.png";

function PortfolioCobbles() {
    return (
        <div className="portfolioPage">
        <Header />
        <WelcomePart PageName={"Portfolio Cobbles"} />
            <div className="portfolioDescriptionDiv">
                <div className="portfolioDescriptionContent">
                    <h1>Our Latest Projects</h1>
                    <p>Gallery</p>
                    <img src={naghsh} />
                </div>
            </div>
        <Footer />
    </div>
    )
}

export default PortfolioCobbles;