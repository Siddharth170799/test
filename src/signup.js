import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const SignUp=()=>{

const [fullname,setData]=useState("")
const [email,setData1]=useState("")
const [password,setdata2]=useState("")
const navigate=useNavigate()



const Click=()=>{

let obj={

    FirstName:fullname,
    email:email,
    password:password
}

localStorage.setItem("Key",JSON.stringify(obj))
navigate("/signin")



}

return (


    <>
    <div style={{margin:"10px"}}><input onChange={(e)=>setData(e.target.value)} type="text"/></div>
    <div><input onChange={(e)=>setData1(e.target.value)} type="text"/></div>
    <div><input onChange={(e)=>setdata2(e.target.value)} type="text"/></div>
    <button onClick={Click}>Click Here</button>
    
    
    
    </>
)





}

export default SignUp