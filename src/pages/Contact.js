import Header from "../Components/Header";
import Footer from "../Components/homepageComponents/Footer";
import HomeContact from "../Components/homepageComponents/HomeContact";
import QuestionForm from "../Components/homepageComponents/QuestionForm";
import WelcomePart from "./WelcomePart";


function Contact() {
    return (
        <div className="contactPage">
            <Header />
            <WelcomePart PageName={"Contact"} />
            <div className="contactPageContent">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44466.34489424998!2d-118.25382927583821!3d34.07000495580236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1658551692325!5m2!1sen!2sus&output=embed" style={{width: "100%", height: "600px", border: "0"}}></iframe>
            </div>
            <HomeContact />
            <QuestionForm style={{background: "#fff"}}/>
            <Footer />
        </div>
    )
}

export default Contact;