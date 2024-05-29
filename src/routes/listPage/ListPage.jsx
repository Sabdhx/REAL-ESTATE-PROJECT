import React from "react";
import "./ListPage.scss";
import Filter from "../../components/filter/Filter";
import { Card } from "../../components/card/Card";
import { data } from "../../data";
import Map from "../../components/map/Map";

const ListPage = () => {
  return (
    <div className="ListPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <div className="mapContainer">
          <Map items={data}/>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
