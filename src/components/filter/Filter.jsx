import React from "react";
import "./Filter.scss";

const Filter = () => {
  return (
    <div className="Filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label className="city">Type</label>
          <select name="type" id="type">
          <option value="buy">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label className="Property">Property</label>
         <select name="property" id="property">
         <option value="">any</option>
          <option value="apartement">Apartement</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="Land">Land</option>

         </select>
        </div>

        <div className="item">
          <label className="minPrice">Min Price</label>
          <input
            type="text"
            id="minPrice"
            name="minPrice"
            placeholder="City location"
          />
        </div>

        <div className="item">
          <label className="city">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>

        <div className="item">
          <label className="Bedroom">Bedroom</label>
          <input
            type="text"
            id="Bedroom"
            name="Bedroom"
            placeholder="any"
          />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
