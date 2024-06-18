import React, { useContext, useState } from "react";
import axios from "axios";
import "./searchBar.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { myContext } from "../../useContext/UserContext";

const SearchBar = () => {
  const navigate = useNavigate();
  const { setLenght, lenght } = useContext(myContext);
  const location = useLocation()
  // const [searchTerm, setSearchTerm] = useState([]);
  const array = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Query Parameters:", query); 
    try {
      const response = await axios.get(
        `http://localhost:5000/Posts?type=${query.type}&location=${query.location}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`
      );
      setLenght(response.data.posts);
      console.log("Response Data:", response.data.posts); 
      console.log("Length:", lenght); 
      navigate(
        `/listPage/?type=${query.type}&location=${query.location}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="searchBar">
      <div className="type">
        {array.map((item) => (
          <button
            onClick={() => switchType(item)}
            className={query.type === item ? "active" : ""}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setQuery({ ...query, location: e.target.value })}
          name="location"
          placeholder="Type your need"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min price"
          min={0}
          max={1000000}
          onChange={(e) =>
            setQuery({ ...query, minPrice: parseInt(e.target.value) })
          }
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max price"
          min={0}
          max={1000000}
          onChange={(e) =>
            setQuery({ ...query, maxPrice: parseInt(e.target.value) })
          }
        />
        <button type="submit">
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
