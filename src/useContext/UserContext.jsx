import axios from "axios";
import { Children, useEffect, useState } from "react";
import { createContext } from "react";

export const myContext = createContext();

import React from "react";

function UserContext({ children }) {
  const [fetchedData, setfetchedData] = useState(null);

  useEffect(() => {
    const dataFetching = async () => {
      if (!fetchedData) {
        const response = await axios.get("http://localhost:5000/user");
        console.log("first");
        setfetchedData(response.data);
      }
    };
    dataFetching();
  }, []);

 const item= localStorage.getItem(('user'))
  return (
    <>
      <myContext.Provider value={{fetchedData,item}}>
        {children}
      </myContext.Provider>
    </>
  );
}

export default UserContext;
