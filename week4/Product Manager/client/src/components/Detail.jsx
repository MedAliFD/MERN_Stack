import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const {id}= useParams()
  const [thisproduct, setProduct]= useState(null)

  useEffect(()=> {
    axios.get("http://localhost:8000/api/product/" + id)
    .then(res=>{
      console.log(res.data)
      setProduct(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[id])
  
  return (
    <div>
      {thisproduct?
      <ul>
        <p> {thisproduct.title}</p>
        <p> {thisproduct.price}</p>
        <p> {thisproduct.description}</p>
      </ul> : <h3>loading</h3>
      }
    </div>
  )
}

export default Detail