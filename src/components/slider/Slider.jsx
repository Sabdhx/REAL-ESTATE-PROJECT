import React, { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={prevImage}>
            <img src="/arrow.png" alt="Previous" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow right" onClick={nextImage}>
            <img src="/arrow.png" className="right" alt="Next" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>X</div>
        </div>
      )}
      <div className="bigImage">
        <img
          src={images[0]}
          alt=""
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
