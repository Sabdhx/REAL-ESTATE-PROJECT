import React from 'react';
import './HomePage.scss'; // Make sure to import your CSS file if it's external
import SearchBar from '../searchBar/SearchBar';

function HomePage() {
  return (
    <div className='homePage'> {/* Corrected className */}
    <div className='textContainer'>
      <div className="wrapper">
    <h1 className="title">Find Real Estate and Get Your Dream Place</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque nulla provident soluta at ratione officiis corrupti vero optio, repellat voluptatem, necessitatibus sapiente ipsum omnis non recusandae quibusdam totam sit!
    </p>

    <SearchBar/>
    <div className="boxes">
      <div className="box">
        <h1>16+</h1>
        <h2>Years of Experience</h2>
      </div>
   

      <div className="box">
        <h1>200</h1>
        <h2>Award Gained</h2>
      </div>
  

 
      <div className="box">
        <h1>1200+</h1>
        <h2>Property Ready</h2>
      </div>
  
      </div>

    </div>
    </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
