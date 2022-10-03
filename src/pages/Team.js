import Header from "../Components/Header";
import Footer from "../Components/homepageComponents/Footer";
import HomeSection3 from "../Components/homepageComponents/HomeSection3";
import WelcomePart from "./WelcomePart";
import naghsh from "../img/naghsh.png";
import member1Img from "../img/member1.jpg";
import member2Img from "../img/member2.jpg";
import member3Img from "../img/member3.jpg";
import "./Team.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoPinterest } from "react-icons/io";

function Team() {

    const members = [
        {
            memberNumber: 1,
            memberPicture: member1Img,
            memberName: "MARTA TOMPSON",
            memberDescription: "Sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
            memberFB: "https://www.facebook.com/AncoraThemes/",
            memberTT: "https://twitter.com/themes_ancora",
            memberIG: "https://www.instagram.com/ancora_themes/"
        },
        {
            memberNumber: 2,
            memberPicture: member2Img,
            memberName: "LINDA BROOKS",
            memberDescription: "Sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
            memberFB: "https://www.facebook.com/AncoraThemes/",
            memberTT: "https://twitter.com/themes_ancora",
            memberIG: "https://www.instagram.com/ancora_themes/"
        },
        {
            memberNumber: 3,
            memberPicture: member3Img,
            memberName: "AMANDA GELLAR",
            memberDescription: "Sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
            memberFB: "https://www.facebook.com/AncoraThemes/",
            memberTT: "https://twitter.com/themes_ancora",
            memberIG: "https://www.instagram.com/ancora_themes/"
        }
    ]

    return (
        <div className="teamPage">
            <Header />
            <WelcomePart PageName={"Our Team"} />
            <HomeSection3 link="/team-members" style={{display: "none"}}/>
            <div className="teamDiv">
                <div className="teamDivDescription">
                    <h1>The best of professionals</h1>
                    <span>Team</span>
                    <img src={naghsh} />
                </div>
                <div className="membersDiv">
                    <div className="members">
                        {members.map(member => (
                            <div className="eachMember" key={member.memberNumber}>
                                <img src={member.memberPicture}/>
                                <h2>{member.memberName}</h2>
                                <span>{member.memberDescription}</span>
                                <div className="footerLinks" style={{margin: "30px auto", justifyContent: "space-evenly"}}>
                                    <a href="https://www.facebook.com/AncoraThemes/"><div className="eachFooterLink"><FaFacebookF /></div></a>
                                    <a href="https://www.instagram.com/ancora_themes/"><div className="eachFooterLink"><AiOutlineInstagram /></div></a>
                                    <a href="https://twitter.com/themes_ancora"><div className="eachFooterLink"><AiOutlineTwitter /></div></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Team;