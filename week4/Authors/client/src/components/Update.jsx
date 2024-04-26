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
    
    <div className="container mt-4">
            <div>
                <Link to="/authors" className="btn btn-link">Home</Link>
            </div>
            <h2>Edit this author</h2>
            <form onSubmit={(e) => submitHandler(e)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    {errors.map((err, i) => <p key={i} className="text-danger">{err}</p>)}
                </div>
                <div className="mt-3">
                    <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
  )
}

export default Update