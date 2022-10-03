import { useContext } from "react";
import { useSelector } from "react-redux";
import "./CartComponent.css";
import { CartContext } from "../pages/Shop";

 
function CartComponent(props) {

    // const value = useContext(CartContext)

    const cartInventory = useSelector(function(state) {
        return state.cartInventory
    })

    const sum = cartInventory.reduce((aggr, object) => {
        return aggr + object.itemPrice;
    }, 0);


    return (
        <div className="cartContainer" style={props.style}>
            {cartInventory.length == 0 
                ?
                <span className="emptySpan">No product in Cart</span>
                :
                <div>
                {cartInventory.map((eachItem, index) => (
                    <div key={index}>
                        <div className="eachCartItem">
                            <img className="cartImgs" src={eachItem.itemImg} />
                            <div className="cartItemInfo">
                                <h2>{eachItem.itemName}</h2>
                                <p>${eachItem.itemPrice}.00</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="priceInformation">
                    <span>Subtotal: <span className="priceRow">
                    ${
                        cartInventory.reduce((aggr, object) => {
                            return aggr + Number(object.itemPrice);
                        }, 0)
                    }.00    
                    </span></span>
                </div>
                <div className="cartButtons">
                    <button>view cart</button>
                    <button>checkout</button>
                </div>
                </div>
            }
        </div>
    )
}

export default CartComponent;