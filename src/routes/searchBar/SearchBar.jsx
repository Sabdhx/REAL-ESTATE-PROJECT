import React, { useState } from "react";
import axios from "axios";
import "./searchBar.scss"

const SearchBar = () => {
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
    const url = new URL(window.location.origin +"/listPage");
    url.search = new URLSearchParams(query).toString();
    console.log(url.toString());
    try {
      const postData = await axios.post("http://localhost:5000/Posts", query); 
      console.log(postData);
    } catch (error) {
      console.error(error);
    }
    
    window.location.href = url;
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
          onChange={(e) => setQuery({ ...query, minPrice: parseInt(e.target.value) })}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max price"
          min={0}
          max={1000000}
          onChange={(e) => setQuery({ ...query, maxPrice: parseInt(e.target.value) })}
        />
        <button type="submit">
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
