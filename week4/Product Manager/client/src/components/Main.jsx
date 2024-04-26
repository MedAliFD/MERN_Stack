import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from './ProductList'

const Main = () => {

    const[title,setTitle]=useState("")
    const[price,setPrice]=useState("")
    const[description,setDescription]=useState("")
    const[errors,setErrors]=useState([])

    const nav=useNavigate()



    
    
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/product", {title,price,description})
        .then(res => nav("/"))
        .catch(err =>{ console.log(err)
           
         })
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
        <div>
                <label htmlFor="">Title : </label>
                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Price : </label>
                <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Description : </label>
                <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} />
            </div>
            <div>
                <button> Create </button>
                {/*  need to refresh to show the new added data // product */}

            </div>
        </form>
        <div>
        <ProductList/>
        </div>
    </div>
  )
}

export default Main