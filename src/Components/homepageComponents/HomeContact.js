import "./HomeContact.css";
import Footer from "./Footer";

function HomeContact() {


    return  (
        <section className="HomeContactSection">
            <div className="contactContent">
                <div className="homeContacts">
                    <div className="EachContact contact1">
                        <div className="contactPart1">
                            <div className="greenIcon"></div>
                        </div>
                        <div className="contactPart2">
                            <p href="#">ADDRESS</p>
                            <span>Los Angeles, California</span>
                        </div>
                    </div>
                    <div className="EachContact contact2">
                        <div className="contactPart1">
                            <div className="greenIcon"></div>
                        </div>
                        <div className="contactPart2">
                            <div className="forBorder">
                                <p>PHONE</p>
                                <a href="tel:+17479660333">747-966-0333</a>
                            </div>
                        </div>
                    </div>
                    <div className="EachContact contact3">
                        <div className="contactPart1">
                            <div className="greenIcon"></div>
                        </div>
                        <div className="contactPart2">
                            <p>EMAIL ADDRESS</p>
                            <a href = "mailto: 2004ashota@gmail.com">2004ashota@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeContact;