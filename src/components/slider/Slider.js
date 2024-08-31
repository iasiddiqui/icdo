import React, { useState } from "react";
import "./slider.css";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://plus.unsplash.com/premium_photo-1661715812379-23d652805042?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "9th Edition of International Conference on Dentistry and Oral Health"
    },
    // Add more slides here if needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <main className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <h2>{slide.text}</h2>
          </div>
        ))}
      </div>
      <div className="main-buttons">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </main>
  );
}

export default Slider;
