import React, { useState } from "react";
import axios from "axios";
import "./searchBar.scss";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
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

  

  const createQueryString = () => {
    const params = new URLSearchParams(query);
    return `/ListPage?${params.toString()}`;
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
      <form >
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
        <Link to={createQueryString()}>
        
        <button type="submit">
          <img src="/search.png" alt="" />
        </button>
        </Link>
       
      </form>
    </div>
  );
};

export default SearchBar;