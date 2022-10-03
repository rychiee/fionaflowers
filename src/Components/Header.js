import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiPhone } from "react-icons/fi";
import flonaLogo from '../img/flonalogo.png';
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import CartComponent from "./CartComponent";

function Header() {

    // menu useStates

    const [display1, setdisplay1] = useState(
        {
            display: "none",
            transition: "0.5s"
        }
    )

    const [display2, setdisplay2] = useState(
        {
            display: "none",
            transition: "0.5s"           
        }
    )

    const [display3, setdisplay3] = useState(
        {
            display: "none",
            transition: "0.5s"
        }
    )

    const [display4, setdisplay4] = useState(
        {
            display: "none",
            transition: "0.5s"
        }
    )



    // mobile menu useStates


    const [mobMenuShow, setMobMenuShow] = useState(false);

    const [headerCartShow, setHeaderCartShow] = useState(false);
    
    const [mobDisplay1, setMobDisplay1] = useState(false)

    const [mobDisplay2, setMobDisplay2] = useState(false)

    const [mobDisplay3, setMobDisplay3] = useState(false)

    const [mobDisplay4, setMobDisplay4] = useState(false)


    const cartInventory = useSelector(function(state) {
        return state.cartInventory
    })

    const mobListHidden = {
        display: "none",
        transition: "0.5s",
        overflow: "auto"
    }

    const mobListShow = {
        display: "block",
        transition: "0.5s",
        overflow: "hidden"
    }

    const cartShown = {
        display: "block",
        position: "absolute",
        right: "-50px",
        transition: "0.5s"
    }

    const cartHidden = {
        display: "none",
        position: "absolute",
        transition: "0.5s"
    }


    const mobCartShown = {
        display: "block",
        position: "absolute",
        right: "20px",
        top: "100px",
        transition: "0.5s",
        backgroundColor: "#eff4f3"
    }

    const mobCartHidden = {
        display: "none",
        position: "absolute",
        transition: "0.5s",
        backgroundColor: "#eff4f3"
    }

    const page = document.querySelector("html");;
    mobMenuShow === true ? page.style.overflow = "hidden" : page.style.overflow = "auto"


    return (
        <header>
            <div className="HeaderForPc">
                <div className="headTop"> 
                    <div className="HeadCall">
                        <div className="callp1">
                            <span>Call Us</span>
                            <br/>
                            <a href="tel:800-123-4567">800-123-4567</a>
                        </div>
                        <div className="callp2">
                            <FiPhone className="HeaderPhoneIcon"/>
                        </div>
                    </div>
                    <div className="HeadLogo">
                        <Link to="/home"><img src={flonaLogo}/></Link>
                    </div>
                    <div className="HeadCard" onClick={() => {
                        setHeaderCartShow(!headerCartShow);
                    }}>
                        <div className="shopp1">
                            <HiOutlineShoppingBag className="HeaderBagIcon" />
                            <CartComponent style={headerCartShow ? cartShown : cartHidden} />
                        </div>
                        <div className="shopp2">
                            <span>Your cart:</span>
                            <br/>
                            <span><span className="generalPrice">({cartInventory.length})</span> - ${
                                cartInventory.reduce((aggr, object) => {
                                    return aggr + Number(object.itemPrice);
                                }, 0)}.00</span>
                        </div>

                    </div>
                </div>

                <div className="headBottom">
                    <nav className="generalNav">
                        <ul className="generalUl">
                            <div className="dropdown1">
                            <li onMouseEnter={(display1) => {
                                    setdisplay1(display1 = {display: "block", transition: "0.5s"})
                                }}
                                onMouseLeave={(display1) => {
                                    setdisplay1(display1 = {display: "none", transition: "0.5s"})
                                }}><Link to="/home">Home</Link></li>

                                <div className="homeDroppedMenu"
                                style={display1}
                                onMouseEnter={(display1) => {
                                    setdisplay1(display1 = {display: "block", transition: "0.5s"})
                                }}
                                onMouseLeave={(display1) => {
                                    setdisplay1(display1 = {display: "none", transition: "0.5s"})
                                }}>
                                    <nav>
                                        <ul>
                                            <li><Link to="/home">Home</Link></li>
                                            <li><Link to="/home">Home Boxed</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>    
                            
                            <div className="dropdown2">
                            <li onMouseEnter={(display2) => {
                                    setdisplay2(display2 = {display: "block", transition: "0.5s"})
                                }}
                                onMouseLeave={(display2) => {
                                    setdisplay2(display2 = {display: "none", transition: "0.5s"})
                                }}><a href="#">About</a></li>

                                <div className="homeDroppedMenu2"
                                style={display2}
                                onMouseEnter={(display2) => {
                                    setdisplay2(display2 = {display: "block", transition: "0.5s"})
                                }}
                                onMouseLeave={(display2) => {
                                    setdisplay2(display2 = {display: "none", transition: "0.5s"})
                                }}>
                                    <nav>
                                        <ul>
                                            <li><Link to="/about">About us</Link></li>
                                            <li><Link to="/pages">Pages</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>


                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/team-members">team</Link></li>

                            <div className="dropdown3">
                            <li onMouseEnter={(display3) => {
                                    setdisplay3(display3 = {display: "block", transition: "0.5s"})
                                }}
                                onMouseLeave={(display3) => {
                                    setdisplay3(display3 = {display: "none", transition: "0.5s"})
                                }}><a href="#">Servces</a></li>

                            <div className="homeDroppedMenu3"
                                style={display3}
                                onMouseEnter={(display3) => {
                                    setdisplay3(display3 = {display: "block", transition: "0.5s"})
                                }}
                                onMouseLeave={(display3) => {
                                    setdisplay3(display3 = {display: "none", transition: "0.5s"})
                                }}>
                                    <nav>
                                        <ul>
                                            <li><Link to="/our-services">Our Services</Link></li>
                                            <li><Link to="/our-services/brides-bridesmaids-bouquets">Single Service</Link></li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                            
                            <div className="dropdown4">
                            <li onMouseEnter={(display4) => {
                                    setdisplay4(display4 = {display: "block", transition: "0.5s"})
                                }}
                                onMouseLeave={(display4) => {
                                    setdisplay4(display4 = {display: "none", transition: "0.5s"})
                                }}><a href="#">Portfolio</a></li>

                            <div className="homeDroppedMenu4"
                                style={display4}
                                onMouseEnter={(display4) => {
                                    setdisplay4(display4 = {display: "block", transition: "0.5s"})
                                }}
                                onMouseLeave={(display4) => {
                                    setdisplay4(display4 = {display: "none", transition: "0.5s"})
                                }}>
                                    <nav>
                                        <ul>
                                            <li><Link to="/our-services/portfolio-grid">Style Grid</Link></li>
                                            <li><Link to="/our-services/portfolio-cobbles">Style Cobbles</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>


                            <li><Link to="/blog">Blog</Link></li>


                            <li><Link className="alastChild" to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>



            {/* Header For Mobile */}


            <div className="headerForMobile">
                <div className="HeadTopMobile">
                    <div className="menuReactIconDiv">
                        <FiMenu className="menuReactIcon" onClick={() => {
                            setMobMenuShow(!mobMenuShow)
                        }}/>
                    </div>
                    <div className="HeadMiddleDiv">
                        <div>
                            <Link to="/home"><img className="mobHeaderLogo" src={flonaLogo}/></Link>
                            <span>Welcome to Our Flowers Boutique!</span>
                        </div>
                    </div>
                    <div className="bagReactIconDiv">
                        <BsHandbag className="BagReactIcon" onClick={() => {
                            setHeaderCartShow(!headerCartShow);
                    }}
                    />
                    <CartComponent style={headerCartShow ? mobCartShown : mobCartHidden} />
                    </div>
                </div>

                <div className="mobileMenuActive" style={mobMenuShow ? mobListShow : mobListHidden}>
                    <div className="mobMenuLists">

                        <div className="mobDropDown mobDropDow1">
                            <li onClick={(mobDisplay2, mobDisplay3, mobDisplay4) => {
                                setMobDisplay1(!mobDisplay1)
                                setMobDisplay2(mobDisplay2 = false)
                                setMobDisplay3(mobDisplay3 = false)
                                setMobDisplay4(mobDisplay4 = false)
                            }}><a href="#">Home</a><RiArrowDropDownLine className="DrpIcon"/></li>
                            <div className="mobDropped mobDropped1"
                            style={mobDisplay1 ? mobListShow : mobListHidden}>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/home">Home Boxed</Link></li>
                            </div>
                        </div>

                        <div className="mobDropDown mobDropDow2">
                            <li onClick={(mobDisplay1, mobDisplay3, mobDisplay4) => {
                                setMobDisplay2(!mobDisplay2)
                                setMobDisplay1(mobDisplay1 = false)
                                setMobDisplay3(mobDisplay3 = false)
                                setMobDisplay4(mobDisplay4 = false)
                            }}><a href="#">About</a><RiArrowDropDownLine className="DrpIcon"/></li>
                            <div className="mobDropped mobDropped2"
                            style={mobDisplay2 ? mobListShow : mobListHidden}>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/pages">Pages</Link></li>
                            </div>
                        </div>                   

                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/team-members">team</Link></li>

                        <div className="mobDropDown mobDropDow3">
                            <li onClick={(mobDisplay1, mobDisplay2, mobDisplay4) => {
                                setMobDisplay3(!mobDisplay3)
                                setMobDisplay1(mobDisplay1 = false)
                                setMobDisplay2(mobDisplay2 = false)
                                setMobDisplay4(mobDisplay4 = false)
                            }}><a href="#">Servces</a><RiArrowDropDownLine className="DrpIcon"/></li>
                            <div className="mobDropped mobDropped3"
                            style={mobDisplay3 ? mobListShow : mobListHidden}>
                                    <li><Link to="/our-services">All Services</Link></li>
                                    <li><Link to="/our-services/brides-bridesmaids-bouquets">Single Service</Link></li>
                            </div>  
                        </div>
                        
                        <div className="mobDropDown mobDropDow4">
                            <li onClick={(mobDisplay1, mobDisplay2, mobDisplay3) => {
                                setMobDisplay4(!mobDisplay4)
                                setMobDisplay1(mobDisplay1 = false)
                                setMobDisplay2(mobDisplay2 = false)
                                setMobDisplay3(mobDisplay3 = false)
                            }}><a href="#">Portfolio</a><RiArrowDropDownLine className="DrpIcon"/></li>
                            <div className="mobDropped mobDropped4"
                            style={mobDisplay4 ? mobListShow : mobListHidden}>
                                <li><Link to="/our-services/portfolio-grid">Style Grid</Link></li>
                                <li><Link to="/our-services/portfolio-cobbles">Style Cobbles</Link></li>
                            </div>
                        </div>

                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li className="contactList"><a href="tel: +17479660333"><BsTelephoneFill className="teleReactIcon"/> 800-123-4567</a></li>
                    </div>

                    <div className="menuCancel" onClick={(mobDisplay1, mobDisplay2, mobDisplay3, mobDisplay4) => {
                            setMobMenuShow(!mobMenuShow)
                            setMobDisplay1(mobDisplay1 = false)
                            setMobDisplay2(mobDisplay2 = false)
                            setMobDisplay3(mobDisplay3 = false)
                            setMobDisplay4(mobDisplay4 = false)
                    }}></div>
                </div>
            </div>
        </header>
    )

    

}

export default Header;