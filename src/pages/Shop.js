import React, { useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import "./Shop.css";
import WelcomePart from "./WelcomePart";
import Footer from "../Components/homepageComponents/Footer";
import CartComponent from "../Components/CartComponent";

function Shop() {
    
    const shopProducts = useSelector(function(state) {
        return state.shopProducts
    })

    const cartInventory = useSelector(function(state) {
        return state.cartInventory
    })

    const [price1, setPrice1] = useState("30");
    const [price2, setPrice2] = useState("70");

    const shopCartStyle = {
        padding: "0",
        border: "0",
        backgroundColor: "transparent",
        marginTop: "10px"
    }

    const [filteredItemsArray, setFilteredItemsArray] = useState(shopProducts);

    const dispatch = useDispatch()

    return(
        <div className="ShopPage">
            <Header />
            <WelcomePart PageName={"Shop"} />

            <section className="shopSection">
                <div className="shopContent">
                    <div className="shopFiltering">
                        <div className="cartInFilter">
                            <p>Shopping Cart</p>
                            <CartComponent style={shopCartStyle} />
                            
                        </div>
                        <div className="rangeInFilter">
                            <p>Price Filter</p>
                            <form className="filterForm">
                                <div>
                                    <input type="number" className="filterFrom" value={price1} onChange={(evt) => {
                                        setPrice1(evt.target.value)
                                    }}/>
                                    <span className="to"> - </span>
                                    <input type="number" className="filterTo" value={price2} onChange={(evt) => {
                                        setPrice2(evt.target.value)
                                    }}/>
                                </div>
                                <span className="filteredPriceSpan">Price: <span className="priceSpan price1">${price1}.00</span> — <span className="priceSpan price2">${price2}.00</span></span>
                                <button className="filterBtn" onClick={(evt) => {
                                    evt.preventDefault()
                                    setFilteredItemsArray(shopProducts.filter((item) => {
                                        let filteredItems = item.itemPrice > price1 && item.itemPrice < price2;
                                        return filteredItems;
                                    }))
                                }}>filter</button>
                            </form>
                        </div>


                        <div className="categoriesListDiv">
                            <p>Categories</p>
                            <div className="categoriesLists">
                                <li>Birthday Bouquets</li>
                                <li>Bride's Bouquets</li>
                                <li>Funeral Flowers</li>
                                <li>House Planting</li>
                                <li>Interior Decor</li>
                                <li>Wedding Decor</li>
                            </div>
                        </div>

                        <div className="productTagDiv">
                            <p>ProductTags</p>
                            <div className="ProductTags">
                                <div>bouquets</div>
                                <div>event</div>
                                <div>gift</div>
                                <div>joy</div>
                                <div>love</div>
                                <div>special</div>
                            </div>
                        </div>
                        

                    </div>


                    {/* <p>Showing all {filteredItemsArray.length} results</p> */}

                    <div className="ProductsDiv"> 
                        {filteredItemsArray.map((item) => (
                            <div className="EachProductItem" key={item.itemNum}>
                                <img src={item.itemImg}/>
                                <div className="EachProductItemContent">
                                    <h3>{item.itemName}</h3>
                                    <span>${item.itemPrice}.00</span>
                                    <button onClick={(evt) => {
                                        evt.preventDefault();
                                        dispatch({
                                            type: "add-item",
                                            newItem: item
                                        })
                                    }}>Add to Card</button>
                                </div>
                            </div>
                                
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Shop;

