import Header from "../Components/Header";
import Footer from "../Components/homepageComponents/Footer";
import HomeContact from "../Components/homepageComponents/HomeContact";
import HomeSection2 from "../Components/homepageComponents/HomeSection2";
import HomeSection3 from "../Components/homepageComponents/HomeSection3";
import HomeSection4 from "../Components/homepageComponents/HomeSection4";
import HomeSection5 from "../Components/homepageComponents/HomeSection5";
import HomeSection6 from "../Components/homepageComponents/HomeSection6";
import HomeSection7 from "../Components/homepageComponents/HomeSection7";
import HomeSection8 from "../Components/homepageComponents/HomeSection8";
import HomeSection9 from "../Components/homepageComponents/HomeSection9";
import QuestionForm from "../Components/homepageComponents/QuestionForm";
import Slider from "../Components/Slider/Slider";

function HomePage() {
    return (
        <div className="homepage">
            <Header />
            <Slider />
            <HomeSection2 />
            <HomeSection3 link="/about" />
            <HomeSection4 />
            <HomeSection5 />
            <HomeSection6 />
            <HomeSection7 />
            <HomeSection8 />
            <HomeSection9 />
            <QuestionForm />
            <HomeContact />
            <Footer />
        </div>
    )
}

export default HomePage;