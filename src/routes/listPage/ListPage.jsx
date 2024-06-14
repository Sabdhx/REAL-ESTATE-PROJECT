import React, { useEffect, useState } from "react";
import "./ListPage.scss";
import Filter from "../../components/filter/Filter";
import { Card } from "../../components/card/Card";
import { data } from "../../data";
import Map from "../../components/map/Map";
import axios from "axios";

const ListPage = () => {

  

   
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchingData=async()=>{
      const response= await axios.get("http://localhost:5000/Posts")
      console.log(response.data.posts)
      setState(response.data.posts)
    }
    fetchingData()
    
  }, []);

  
  return (
    <div className="ListPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {state.map((item) => (
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
