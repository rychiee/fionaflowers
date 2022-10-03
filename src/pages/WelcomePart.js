import "./WelcomePart.css"
import { Link } from "react-router-dom";

function WelcomePart({PageName}) {
    return(
        <div className="welcomeBackground">
            <div className="welcomeBackContent">
                <h2>{PageName}</h2>
                <p><Link to="/home">Home</Link> / {PageName}</p>
            </div>
        </div>
    )
}

export default WelcomePart;