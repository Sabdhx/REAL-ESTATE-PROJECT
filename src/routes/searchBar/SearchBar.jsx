import React, { useState } from "react";
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
    setQuery((prev)=>({...prev,type:value}))
    console.log(query)

  };
  return (
    <div className="searchBar">
      <div className="type">
        {array.map((item) => {
          return (
          <button
          onClick={()=>switchType(item)}
          className={query.type == item ? "active" : ""}
          key={item}>{item}</button>       
        )})}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="type your need" />
        <input
          type="number"
          name="minPrice"
          placeholder="min price"
          min={0}
          max={1000000}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max price"
          min={0}
          max={1000000}
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;