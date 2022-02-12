

import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Navbar from '../components/navbar/NavBar'

export default function Register() {

    useEffect(()=>{
        if(localStorage.getItem('user-infor')){
            history.push("/aboutus")
        }
    })
    
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const history = useHistory()
  

    async function signUp()
    {
        
        let item = {name, password, email}
        console.warn(item)

       let result = await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })

        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/aboutus")
        
    }
    
    return (
        <>
            <Navbar/>        
            <h1>Register Form</h1>
            
            <div class="form">    
                <label for="name">Full Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" />
                <label for="email">Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" />
                <label for="name">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" />
                <button onClick={signUp}>Sign Up</button>
            </div>   
        
        </>
    )
}



