import React from "react";
import "./slider.scss";

function Slider({ images }) {
  
  return (
    <div className="slider">
      <div className="fullSlider">
        <div className="arrow">
          <img src="/arrow.png" alt="" />
        </div>
        <div className="imgContainer">
          <img src={images[0]} alt="" />
           </div>
          <div className="arrow">
            <img src="/arrow.png" className="right" alt="" />
          </div>
       <div className="close">X</div>
      </div>
      <div className="bigImage">
        <img
          src="https://images.pexels.com/photos/7247545/pexels-photo-7247545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img src={image} alt="" key={index} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
