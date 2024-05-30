import React from "react";
import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePost } from "../../data";
// import  Map  from "../../components/map/Map";

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
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*"
                  alt=""
                />
                <h3>lana del ray</h3>
              </div>
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                quibusdam ea nobis similique. Debitis ullam, saepe minima vel
                voluptatum blanditiis quisquam dolorem porro tenetur, itaque
                accusamus ipsa error, nulla illum. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Qui, expedita voluptatibus amet,
                similique praesentium sit necessitatibus deleniti, sapiente
                error tempore reprehenderit quasi perferendis vero sint
                repellendus odit laborum cum minima!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>

            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>

            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fee</span>
                <p>Must have 3x the rent in total houseHold income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqrft</span>
            </div>

            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 bed</span>
            </div>

            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizantal">

          <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>100m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Restraunt</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <p className="title">location</p>
          <div className="mapContainer">
            {/* <Map/> */}
          </div>
          <div className="buttons">
            <button>
              <img src="./chat.png" alt="" />
              Send a message
            </button>

            <button>
              <img src="./save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
