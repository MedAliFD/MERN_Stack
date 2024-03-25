import React,{useState} from 'react'

function PersonalCard(props) {
    const [age,setAge]=useState(props.age)
    const birth=()=>setAge(age+1)
  return (
    <div>
        <h1> {props.lastname}, {props.firstname}</h1>
        <p> Age:{age} </p>
        <p>Hair Color: {props.hairColor}</p>  
        <button onClick={birth}>BirthDay</button>          
    </div>
  )
}

export default PersonalCard


