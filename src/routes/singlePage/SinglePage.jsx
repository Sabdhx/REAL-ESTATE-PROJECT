import React from "react";
import "./SinglePage.scss";
import { useParams } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import { singlePost } from "../../data";


function SinglePage() {
  
  console.log(singlePost);
  return (
    <div className="SinglePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePost.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePost.title}</h1>

                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePost.address}</span>
                </div>
                <div className="price">${singlePost.price}</div>
              </div>
              <div className="user">
                <img src='https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*' alt="" />
                <h3>lana del ray</h3>
              </div>
            </div>
            <div className="bottom">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quibusdam ea nobis similique. Debitis ullam, saepe minima vel voluptatum blanditiis quisquam dolorem porro tenetur, itaque accusamus ipsa error, nulla illum.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, expedita voluptatibus amet, similique praesentium sit necessitatibus deleniti, sapiente error tempore reprehenderit quasi perferendis vero sint repellendus odit laborum cum minima!
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className="features">
          <div className="wrapper"></div>
        </div>
      
    </div>
  );
}

export default SinglePage;
