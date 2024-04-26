import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const nav = useNavigate()
    const { id } = useParams()

    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("");
    
    
    useEffect(() => {
      axios.get("http://localhost:8000/api/product/" + id)
      .then(res => {  
        setTitle(res.data.title);
        setPrice(res.data.price)
        setDescription(res.data.description)
        
      })
      .catch(err => {
        console.log(err)
      })
    }, [id])
    


    const updateHandler = (e) => {
        e.preventDefault()
        const newObj = {
             title,
             price,
             description
        }
        axios.patch(`http://localhost:8000/api/product/${id}/edit`, newObj)
            .then(res => {
                console.log("✅✅✅✅", res.data)
                nav("/")
            })
            .catch(err => console.log("❌❌", err))

    }

    return (
        <div>
            Update
            <form onSubmit={updateHandler}>
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
                <button> Update </button>
            </div>
        </form>


        </div>
    )
}

export default Update