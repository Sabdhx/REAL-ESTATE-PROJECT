import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const myContext = createContext();

function SocketContext({ children }) {
  const [socketData, setSocketData] = useState(null);

  useEffect(() => {
   setSocketData(io("http://localhost:4000"));
  }, []);
  console.log(socketData)
  return (
    <myContext.Provider value={{socketData,setSocketData}}>
      {children}
    </myContext.Provider>
  );
}

export default SocketContext;
