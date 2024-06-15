import React, { createContext, useEffect, useState } from "react";

export const myContext = createContext();

function UserContext({ children }) {
  const [fetchedData, setFetchedData] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null});
   const [lenght,setLenght] =useState(null)


  const updateUser = (data) => {
    setFetchedData(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setFetchedData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <myContext.Provider value={{ fetchedData, updateUser ,lenght,setLenght}}>
      {children}
    </myContext.Provider>
  );
}

export default UserContext;
