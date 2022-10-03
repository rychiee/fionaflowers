import "./HSection4Mech.css"
import { useDispatch, useSelector } from "react-redux";
import product1Img from "../../img/flowers/product1.jpg";
import product2Img from "../../img/flowers/product2.jpg";
import product3Img from "../../img/flowers/product3.jpg";
import product4Img from "../../img/flowers/product4.jpg";
import product5Img from "../../img/flowers/product5.jpg";
import product6Img from "../../img/flowers/product6.jpg";

export default function HSection4Mech() {

    const flowers = [
        {
            N: 1,
            itemImg: product1Img,
            itemName: "BACHELOR'S BUTTON",
            itemPrice: "55",
        },
        {
            N: 2,
            itemImg: product2Img,
            itemName: "DESERT ROSE",
            itemPrice: "65"
        },
        {
            N: 3,
            itemImg: product3Img,
            itemName: "GRAPE HYACINTH",
            itemPrice: "45"
        },
        {
            N: 4,
            itemImg: product4Img,
            itemName: "PAINTED DAISY",
            itemPrice: "55"
        },
        {
            N: 5,
            itemImg: product5Img,
            itemName: "ROSE OF SHARON",
            itemPrice: "45"
        },
        {
            N: 6,
            itemImg: product6Img,
            itemName: "TEA ROSE",
            itemPrice: "35"
        }
    ]

    
    const dispatch = useDispatch()

    return(
        <div className="flowersAssort">
            {flowers.map(item => (
               <div className="eachAssortFlower" key={item.N}>
               <img src={item.itemImg} />
               <div className="assortContent">
                   <a href="#">{item.itemName}</a>
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
    )

}

