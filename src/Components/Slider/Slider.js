import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider() {

    const links = [
        'https://cdn.shopify.com/s/files/1/0584/4693/8291/files/Retail_School_Operations_Manager_e49b835e-7513-4575-b75f-425af53a3f50.jpg?v=1651678363',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/floral-beauty-index-1523046688.jpg',
        'https://cdn.shopify.com/s/files/1/0601/5857/4799/files/EB32E25F-FE31-4A80-A970-11E7168FE05C_x800.jpg?v=1651728507',
        'https://cdn.shopify.com/s/files/1/0584/4693/8291/files/Retail_School_Operations_Manager_e49b835e-7513-4575-b75f-425af53a3f50.jpg?v=1651678363'
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
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                            src={links[index + 1]} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}