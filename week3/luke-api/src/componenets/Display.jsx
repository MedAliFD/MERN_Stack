import React,{useEffect,useState} from 'react'
import{useParams} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Display() {
    const [planet, setPlanet]= useState([])
    const {id}= useParams()
    const nav=useNavigate()



    useEffect(()=>{
        axios.get(`https://swapi.py4e.com/api/${searchFor}/${id}`)
        .then( res => setPlanet(res.data))
        .catch(err=>console.error(err))
    },[id])

    
  return (
    <div>

        <h2>Welcome to planet {planet.name} </h2>
        <p>Climate : {planet.name}</p>
        <p>Terrain : {planet.terrain}</p>
        <p>Surface Water {planet.surface_water? "True" : "False"}</p>
        <p>Population : {planet.population}</p>

        <button onClick={()=> nav("/")}>Home</button>

    </div>
  )
}

export default Display