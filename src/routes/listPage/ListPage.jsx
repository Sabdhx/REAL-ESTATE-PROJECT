import React, { useContext, useEffect, useState } from "react";
import "./ListPage.scss";
import Filter from "../../components/filter/Filter";
import { Card } from "../../components/card/Card";
import { data } from "../../data";
import Map from "../../components/map/Map";
import axios from "axios";
import { myContext } from "../../useContext/UserContext";

const ListPage = () => {
  const { lenght } = useContext(myContext);
  console.log(lenght);

  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      axios
        .get("http://localhost:5000/Posts")
        .then((response) => setState(response.data.posts))
        .catch((error) => console.error(error));
    };
    fetchingData();
  }, []);

  // Show loading message if lenght is not available
  // if (lenght === null) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div className="ListPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {lenght !== null
            ? lenght.map((item) => <Card key={item.id} item={item} />)
            : state.map((item) => <Card key={item.id} item={item} />)}
        </div>
        <div className="mapContainer">
          <Map items={data} />
        </div>
      </div>
    </div>
  );
};

export default ListPage;