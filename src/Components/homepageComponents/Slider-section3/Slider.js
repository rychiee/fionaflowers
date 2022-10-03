import React, {useState} from 'react'
import '../Slider-section3/SliderSection3.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function SliderSection3() {

    const links = [
        'https://www.fairtradewinds.net/wp-content/uploads/2021/03/felt-flower-bouquet-wildflower-1-540x540.jpg',
        'https://www.fairtradewinds.net/wp-content/uploads/2021/03/felt-flower-bouquet-wildflower-1-540x540.jpg',
        'https://www.fairtradewinds.net/wp-content/uploads/2020/04/spring-blossom-540x540.jpg'
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
        <div className="sec3container-slider">
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
            <BtnSlider moveSlide={nextSlide} direction={"nextBtn"} />
            <BtnSlider moveSlide={prevSlide} direction={"prevBtn"}/>

        </div>
    )
}
