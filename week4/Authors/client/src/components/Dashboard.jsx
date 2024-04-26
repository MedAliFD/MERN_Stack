import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link,useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [authors, setAuthors]= useState([])
    const nav = useNavigate()

    useEffect (()=> {
        axios.get("http://localhost:8000/api/authors")
        .then(res => setAuthors(res.data))
        .catch(err=> console.error(err))
    },[]) 

    const deleteObj =(id)=> {
        axios.delete('http://localhost:8000/api/authors/'+id)
        .then(res=> setAuthors(authors.filter(a=>a._id!== id))) 
        .catch (err => console.error(err))
    }

  return (
    <div className="container mt-4">
            <p>
                <Link to="/authors/new" >Add an author</Link>
            </p>

            <h3>We have quotes by:</h3>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Action available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map(a => (
                            <tr key={a._id}>
                                <td>{a.name}</td>
                                <td>
                                    <button className='btn btn-secondary mr-2' onClick={() => nav(`/authors/${a._id}/edit`)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => deleteObj(a._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Dashboard