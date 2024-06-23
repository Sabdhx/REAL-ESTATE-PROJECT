import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  // Check if item.images is defined and has at least one element
  const imageUrl = item.images && item.images.length > 0 ? item.images[0] : "/default-image.png";

  return (
    <div className="Card">
      <Link to={`singlePage/${item.id}`} className="imageContainer">
        <img src={imageUrl} alt={item.title || "Item Image"} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <div>{item.title}</div>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="Location Pin" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="Bed Icon" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="Bath Icon" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="Save Icon" />
            </div>
          </div>
          <div className="icon">
            <img src="/chat.png" alt="Chat Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};