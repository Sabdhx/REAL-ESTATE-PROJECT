import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const socketContext = createContext();

function SocketContext({ children }) {
  const [socketData, setSocketData] = useState(null);

  useEffect(() => {
   setSocketData(io("http://localhost:4000"));
  }, []);
  console.log(socketData)
  return (
    <socketContext.Provider value={{socketData,setSocketData}}>
      {children}
    </socketContext.Provider>
  );
}

export default SocketContext;
