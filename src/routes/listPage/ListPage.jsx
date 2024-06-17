import React, { useContext, useEffect, useState, Suspense, lazy } from "react";
import "./ListPage.scss";
import { Card } from "../../components/card/Card";
import { data } from "../../data";
import axios from "axios";
import { myContext } from "../../useContext/UserContext";

// Lazy load the Filter and Map components
const Filter = lazy(() => import("../../components/filter/Filter"));
const Map = lazy(() => import("../../components/map/Map"));

// Loading component
const Loading = () => <div>Loading...</div>;

const ListPage = () => {
  const { lenght } = useContext(myContext);
  console.log(lenght);

  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Posts");
        setState(response.data.posts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchingData();
  }, []);

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
            (lenght !== null
              ? lenght.map((item) => <Card key={item.id} item={item} />)
              : state.map((item) => <Card key={item.id} item={item} />))
          )}
        </div>
        <div className="mapContainer">
          <Suspense fallback={<div>Loading Map...</div>}>
            <Map items={data} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ListPage;