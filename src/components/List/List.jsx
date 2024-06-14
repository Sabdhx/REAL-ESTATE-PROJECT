import React, { useEffect, useState } from 'react'
import { Card } from '../card/Card'
import { data } from '../../data'
import axios from 'axios';


function List() {
  const [state,setState]= useState([])
  useEffect(() => {
    const fetchingData=async ()=>{
      axios.get("http://localhost:5000/Posts")
      .then(response => setState(response.data.posts))
      .catch(error => console.error(error)); 

    }
    fetchingData()
  }, []);
  console.log(state)
  return (
    <>
    <div className='List'>
      {
      state.map((item)=>{
        return (
          <Card item={item}/>
        )
      })
      }
    </div>
    
</>
  )
}

export default List