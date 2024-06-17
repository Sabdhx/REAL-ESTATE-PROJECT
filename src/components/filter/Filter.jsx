import React, { useState, useEffect } from "react";
import "./Filter.scss";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Example of getting a specific query parameter
  const cityParam = searchParams.get("location") || "";
  const typeParam = searchParams.get("type") || "";
  const propertyParam = searchParams.get("property") || "";
  const minPriceParam = searchParams.get("minPrice") || 0;
  const maxPriceParam = searchParams.get("maxPrice") || 10000;
  const bedroomParam = searchParams.get("bedroom") || 1;

  const [formValues, setFormValues] = useState({
    city: cityParam,
    type: typeParam,
    property: propertyParam,
    minPrice: minPriceParam,
    maxPrice: maxPriceParam,
    bedroom: bedroomParam,
  });

  useEffect(() => {
    setFormValues({
      city: cityParam,
      type: typeParam,
      property: propertyParam,
      minPrice: minPriceParam,
      maxPrice: maxPriceParam,
      bedroom: bedroomParam,
    });
  }, [cityParam, typeParam, propertyParam, minPriceParam, maxPriceParam, bedroomParam]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(formValues);
    console.log(searchParams)
  };

  return (
    <div className="filter">
      <h1>
        Search results for <b>{cityParam}</b>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="top">
          <div className="item">
            <label htmlFor="city">Location</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City Location"
              value={formValues.city}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              value={formValues.type}
              onChange={handleInputChange}
            >
              <option value="">any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select
              name="property"
              id="property"
              value={formValues.property}
              onChange={handleInputChange}
            >
              <option value="">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="any"
              value={formValues.minPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="item">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="any"
              value={formValues.maxPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="item">
            <label htmlFor="bedroom">Bedroom</label>
            <input
              type="number"
              id="bedroom"
              name="bedroom"
              placeholder="any"
              value={formValues.bedroom}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">
            <img src="/search.png" alt="Search" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;