import { combineReducers, createStore } from "redux";
import item1Img from "../img/flowers/product1.jpg";
import item2Img from "../img/flowers/product2.jpg";
import item3Img from "../img/flowers/product3.jpg";
import item4Img from "../img/flowers/product4.jpg";
import item5Img from "../img/flowers/product5.jpg";
import item6Img from "../img/flowers/product6.jpg";
import item7Img from "../img/flowers/product7.jpg";


const store = createStore(function(state, action){
    if(action.type === "add-item") {
        return {
            ...state,
            cartInventory: [...state.cartInventory, action.newItem]
            
        }
    }
    
    return state;
},{
    shopProducts: [
        {
            itemNum: 1,
            itemImg: item1Img,
            itemName: "BACHELOR'S BUTTON",
            itemPrice: "55"
        },
        {
            itemNum: 2,
            itemImg: item2Img,
            itemName: "DESERT ROSE",
            itemPrice: "65"
        },
        {
            itemNum: 3,
            itemImg: item3Img,
            itemName: "GRAPE HYACINTH",
            itemPrice: "45"
        },
        {
            itemNum: 4,
            itemImg: item4Img,
            itemName: "PAINTED DAISY",
            itemPrice: "55"
        },
        {
            itemNum: 5,
            itemImg: item5Img,
            itemName: "ROSE OF SHARON",
            itemPrice: "45"
        },
        {
            itemNum: 6,
            itemImg: item6Img,
            itemName: "TEA ROSE",
            itemPrice: "35"
        },
        {
            itemNum: 7,
            itemImg: item7Img,
            itemName: "MORNING GLORY",
            itemPrice: "35"
        }
    ],

    cartInventory: []
})

export default store;