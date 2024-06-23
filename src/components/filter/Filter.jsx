import React, { useState, useEffect, useContext } from "react";
import "./Filter.scss";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { myContext } from "../../useContext/UserContext";

const Filter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const cityParam = params.get("location") || "";
  const typeParam = params.get("type") || "";
  const propertyParam = params.get("property") || "";
  const minPriceParam = params.get("minPrice") || 0;
  const maxPriceParam = params.get("maxPrice") || 10000;
  const bedroomParam = params.get("bedroom") || 1;

  const [formValues, setFormValues] = useState({
    city: cityParam,
    type: typeParam,
    property: propertyParam,
    minPrice: minPriceParam,
    maxPrice: maxPriceParam,
    bedroom: bedroomParam,
  });

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFormValues({
      city: cityParam,
      type: typeParam,
      property: propertyParam,
      minPrice: minPriceParam,
      maxPrice: maxPriceParam,
      bedroom: bedroomParam,
    });
  }, [
    cityParam,
    typeParam,
    propertyParam,
    minPriceParam,
    maxPriceParam,
    bedroomParam,
  ]);

  useEffect(() => {
    filterData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:5000/Posts?type=${formValues.type}&location=${formValues.city}&minPrice=${formValues.minPrice}&maxPrice=${formValues.maxPrice}`);

    navigate(`?type=${formValues.type}&location=${formValues.city}&minPrice=${formValues.minPrice}&maxPrice=${formValues.maxPrice}&bedroom=${formValues.bedroom}`);

    setFilteredData(response.data.posts);
  };

  const filterData = () => {
    const data = [
      {
        id: 1,
        city: "New York",
        type: "buy",
        property: "apartment",
        price: 5000,
        bedroom: 2,
      },
      {
        id: 2,
        city: "Los Angeles",
        type: "rent",
        property: "house",
        price: 3000,
        bedroom: 3,
      },
    ];

    const filtered = data.filter((item) => {
      return (
        (formValues.city === "" ||
          item.city.toLowerCase().includes(formValues.city.toLowerCase())) &&
        (formValues.type === "" || item.type === formValues.type) &&
        (formValues.property === "" || item.property === formValues.property) &&
        (formValues.minPrice === "" || item.price >= formValues.minPrice) &&
        (formValues.maxPrice === "" || item.price <= formValues.maxPrice) &&
        (formValues.bedroom === "" || item.bedroom >= formValues.bedroom)
      );
    });

    setFilteredData(filtered);
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