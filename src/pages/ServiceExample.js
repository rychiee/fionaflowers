import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/homepageComponents/Footer";
import "./mainServicePage.css"
import WelcomePart from "./WelcomePart";

function ServiceExample(props) {
    return (
        <div className="EachServicePage">
            <Header />
            <WelcomePart PageName={"Bride's & Bridesmaids' Bouquets"} />
                <section className="serviceSection">
                    <div className="serviceContentDiv">
                        <div className="servicesList">
                            <div className="servicesListContent">
                                <h2>Services</h2>
                                <li><Link to="/our-services/brides-bridesmaids-bouquets">Bride's & Bridesmaids' Bouquets</Link></li>
                                <li><Link to="/our-services/corsages-boutonnieres">Corsages & Boutonnieres</Link></li>
                                <li><Link to="/our-services/ceremony-main-altar">Ceremony Main Altar</Link></li>
                                <li><Link to="/our-services/aisle-pew-markers">Aisle Pew Markers</Link></li>
                                <li><Link to="/our-services/ceremony-decoration">Ceremony Decoration</Link></li>
                                <li><Link to="/our-services/tables-cake-decoration">Tables & Cake Decoration</Link></li>
                            </div>
                        </div>
                        <div className="ServiceContent">
                            <img src={props.img} />
                            <h2>{props.name}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem.</p>
                            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait.</p>
                            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                        </div>
                    </div>
                </section>
            <Footer />
        </div>
    )
}

export default ServiceExample;