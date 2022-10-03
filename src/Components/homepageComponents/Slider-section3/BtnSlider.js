import React from "react";
import "./SliderSection3.css";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "nextBtn" ? "btn-slidee nextBtn" : "btn-slidee prevBtn"}
    >
      <span>{direction === "nextBtn" ? ">" : "<"}</span>
    </button>
  );
}
