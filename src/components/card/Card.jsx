import React, { useEffect } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export const Card=({item})=> {
  
  return (
   <div className="Card"  >
    <Link to={`singlePage/${item.id}`} className="imageContainer">
      <img src={item.images[0]} alt="" />
    </Link>
    <div className="textContainer">
    <h2 className="title">
            <div>{item.title}</div>
          </h2>
          <p className="address">
            <img src="/pin.png" alt="" />
            <span>{item.address}</span>
          </p>
          <p className="price">$ {item.price}</p>
          <div className="bottom">
            <div className="features">
              <div className="feature">
                <img src="/bed.png" alt="" />
                <span>{item.bedroom} bedroom</span>
              </div>
              <div className="feature">
                <img src="/bath.png" alt="" />
                <span>{item.bathroom} bathroom</span>
              </div>
            </div>
            <div className="icons">
              <div className="icon">
                <img src="/save.png" alt="" />
              </div>
            </div>

            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
    </div>
   </div>
  )
}

