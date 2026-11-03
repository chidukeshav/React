import axios from 'axios'
import React, { useState } from 'react'

const App4 = () => {

    let[state,setState]=useState({
        user:"",
        password:"",
        gender:""

    })
    let {user,password,gender}=state
    let handleChange=(e)=>{
       let{name,value}=e.target
       setState({...state,[name]:value})
        
    }
    let handleSubmit=async(e)=>{
        // e.preventDefault()
        // console.log({...state})
        try{
            let payload={user,password,gender}
            axios.post("https://localhost:4000/user", payload)
        }catch(err){
                console.log(err);
                
        }

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">USER NAME</label>
            <input type="text" name="user" id="" onChange={handleChange}/>
            <label htmlFor="">PASSWORD</label>
            <input type="password" name='password' id=''  onChange={handleChange}/>
            <label htmlFor="">GENDER</label>
            MALE<input type='radio' name='gender' value="MALE" onChange={handleChange}></input>
            FEMALE<input type='radio' name='gender' value="FEMALE" onChange={handleChange}></input>
            <input type="submit" value="SUBMIT" />
        </form>
    </div>
  )
}

export default App4

