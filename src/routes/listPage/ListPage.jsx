import React, { useContext, useEffect, useState, Suspense, lazy } from "react";
import "./ListPage.scss";
import { Card } from "../../components/card/Card";
import axios from "axios";
import { myContext } from "../../useContext/UserContext";
import { data } from "../../data";
import { useLocation } from "react-router-dom";

// Lazy load the Filter and Map components
const Filter = lazy(() => import("../../components/filter/Filter"));
const Map = lazy(() => import("../../components/map/Map"));

// Loading component
const Loading = () => <div>Loading...</div>;

const ListPage = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type') || "";
    const city = params.get('location') || "";
    const minPrice = params.get('minPrice') || "";
    const maxPrice = params.get('maxPrice') || "";
    const bedroom = params.get('bedroom') || "";
    fetchData(type, city, minPrice, maxPrice, bedroom);
  }, [location]);

  const fetchData = async (type, city, minPrice, maxPrice, bedroom) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/Posts`, {
        params: {
          type: type || undefined,
          location: city || undefined,
          minPrice: minPrice || undefined,
          maxPrice: maxPrice || undefined,
          bedroom: bedroom || undefined,
        },
      });
      setState(response.data.posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="ListPage">
      <div className="listContainer">
        <div className="wrapper">
          <Suspense fallback={<div>Loading Filter...</div>}>
            <div>
              <Filter />
            </div>
          </Suspense>
          {loading ? (
            <Loading />
          ) : (
            state.map((item) => <Card key={item.id} item={item} />)
          )}
        </div>
        <div className="mapContainer">
          <Suspense fallback={<div>Loading Map...</div>}>
            <Map items={state} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ListPage;