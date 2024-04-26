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
    <div>
        <p>
            <Link to="/authors/new" >Add an author</Link>
        </p>

        <h3>We have quotes by:</h3>
        <p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action available</th>
                    </tr>
                </thead>
                <tbody>
                {authors.map(a => (
                    <tr key ={a._id}>
                        <td>{a.name}</td>
                        <td>
                            <button onClick={()=> nav(`/authors/${a._id}/edit`)}>edit</button>
                            <button onClick={()=> deleteObj(a._id)}>delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </p>

    </div>
  )
}

export default Dashboard