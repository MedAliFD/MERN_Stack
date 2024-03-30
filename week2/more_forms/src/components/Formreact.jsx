// Work in progress for validation password

import React, { useState } from 'react'



const Formreact = () => {
  

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmpassword]=useState("");
    const [lengtherrorfirst,setErrorfirst]=useState("")
    const [lengtherrorlast,setErrorlast]=useState("")
    const [error1,setError1]=useState("")
    const [error2,setError2]=useState("")
    const [error3,setError3]=useState("")
    const [error4,setError4]=useState("")

    // Validation & Errors


    const validatefirst=(e)=>{
      setFirstname(e.target.value)
      if(e.target.value.length < 2){
        setErrorfirst("that field must be at least 2 characters")
      }else{setErrorfirst("")}
    }

    const validatelast=(e)=>{
      setErrorlast(e.target.value)
      if(e.target.value.length < 2){
        setErrorlast("that field must be at least 2 characters")
      }else{setErrorlast("")}
    }

    
    const validmail=(e)=>{
      setEmail(e.target.value)
      if(e.target.value.length < 5){
        setError2("that field must be at least 5 characters")
      }else{setError2("")}
      
    }
    const userpassword=(e)=>{
      setPassword(e.target.value)
        if(e.target.value.length < 8){
          setError3("that field must be at least 8 characters")
        }else{setError3("")}
      }
      // confirm password error
    const conpassword=(e)=>{
      setConfirmpassword(e.target.value)
          
        if(e.target.value.confirmpassword = userpassword.value){
          setError4("doesn'tmatch the password !")
        }else{setError4("")}
      }

    const createuser=(e)=>{
      e.preventDefault();
      if(firstname.length>2){
        setErrorfirst("that field must be at least 2 characters")
      }else{setErrorfirst("")}
    }
    
  return (
    
      <div>
        <form onSubmit={(e)=>{createuser(e)}}>

          <label >First Name : </label>
          <input  onChange={(e)=>{validatefirst(e)}} />  
          <p style={{color:"red"}}>{lengtherrorfirst}</p> 

          <label >Last Name : </label>
          <input  onChange={(e)=>{validatelast(e)}} />
          <p style={{color:"red"}}>{lengtherrorlast}</p> 

          <label >Email : </label>
          <input type='email' onChange={(e)=>{validmail(e)}} /><br />
          <p style={{color:"red"}}>{error2}</p>

          <label >Password : </label>
          <input type='password' onChange={(e)=>{userpassword(e)}} /><br />
          <p style={{color:"red"}}>{error3}</p>

          <label >Confirm Password : </label>
          <input type='password' onChange={(e)=>{conpassword(e.target.value)}} /><br />
          <p style={{color:"red"}}>{error4}</p>   


          <button >Submit</button>   
        </form>
      </div>
    
  )
}

export default Formreact