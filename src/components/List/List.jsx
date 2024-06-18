import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../card/Card";
import axios from "axios";

function List() {
  const [state, setState] = useState([]);
  const location = useLocation();

  const fetchQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return {
      type: params.get("type"),
      location: params.get("location"),
      minPrice: params.get("minPrice"),
      maxPrice: params.get("maxPrice"),
    };
  };

  useEffect(() => {
    const fetchingData = async () => {
      const queryParams = fetchQueryParams();
      try {
        const response = await axios.get("http://localhost:5000/Posts", {
          params: queryParams,
        });
        setState(response.data.posts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchingData();
  }, [location.search]);

  return (
    <>
      <div className="List">
        {state.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default List;
