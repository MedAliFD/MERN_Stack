import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Update = () => {
    const {id}=useParams()
    const nav = useNavigate()
    const[errors,setErrors]=useState([])

    const handleCancel = () => {
        nav('/authors');
    };
    const[name,setName]=useState("");
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/"+id)
        .then(res=> {
            setName(res.data.name)

        })
        .catch(err=>console.error(err))
    },[id])
    
        const submitHandler = (e)=> {
            e.preventDefault()
            axios.patch("http://localhost:8000/api/authors/"+id+"/edit", {name})
            .then( res=> nav("/authors"))
            .catch(err =>{
                const errorResponse =err.response.data.errors 
                const errorArr =[]
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                    setErrors(errorArr)
                }
             })
        }

    <Link to="/authors" >Home</Link>
  return (
    
    <div>
        <p> Edit this author</p>
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

export default Update