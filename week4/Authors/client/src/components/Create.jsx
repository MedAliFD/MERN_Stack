import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const[name,setName]=useState("")
    const[errors,setErrors]=useState([])

    const nav=useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors", {name})
        .then(res => nav("/authors"))
        .catch(err =>{
            const errorResponse =err.response.data.errors 
            const errorArr =[]
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
                setErrors(errorArr)
            }
         })
    }
    const handleCancel = () => {
        nav('/authors');
    };


    <Link to="/authors" >Home</Link>

  return (
    <div>
        <p>Add a new author:</p>
        <form onSubmit={(e)=>submitHandler(e)}>
            
            <div>
                <label htmlFor="">Name : </label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
            <div>
                {errors.map((err,i)=>
                <p key={i}>{err}</p>)}
            </div>
            <div>
                <button onClick={handleCancel}> Cancel </button>
                <button> Submit </button>

            </div>
        </form>
    </div>
  )
}

export default Create