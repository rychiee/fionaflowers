import React, {useState} from 'react';
import './SliderSection6.css';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

import Cust1 from "../../../img/Cust1.jpg";
import Cust2 from "../../../img/Cust2.jpg";
import Cust3 from "../../../img/Cust3.jpg";

export default function SliderSection6() {

    const customers = [
        {
            id: 1,
            image: Cust1,
            comment: '"I was surprised by the gorgeous wedding decorations. Fantastic job, really!"',
            info: "Monica Johnson, CA"
        },
        {
            id: 2,
            image: Cust2,
            comment: '"Lovely! My wife was happy to receive one the most amazing bouquets ever."',
            info: "James Carter, TX"
        },
        {
            id: 3,
            image: Cust3,
            comment: '"Your flower compositions are great. Simple and elegant, just how I like them."',
            info: "Alice Mason, NYC"
        },
    ]

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="containerSlider">
            {customers.map((customer, index) => {
                return (
                    <div
                    key={customer.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >


                            <div className="customerDiv" >
                                <div className="customerDivContent">
                                    <img className="customerDivImg"src={customer.image} />
                                    <h1 className="customerDivContentH1">{customer.comment}</h1>
                                    <span className="customerDivContentSpan">{customer.info}</span>
                                </div>
                            </div>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        </div>
    )
}