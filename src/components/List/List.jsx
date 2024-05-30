import React from 'react'
import { Card } from '../card/Card'
import { data } from '../../data'


function List() {
  return (
    <div className='List'>
      {
      data.map((item)=>{
        return (
          <Card item={item}/>
        )
      })
      }
    </div>
  )
}

export default List