import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";






const Project =()=>{

    const [signin,setSignin]=useState(true)
   
const navigate=useNavigate()
    const nameRef= useRef()
    const emailRef=useRef()
    const passwordRef=useRef()



    function signIn(){

        const userDetails1=localStorage.getItem("User")
        const userDetails=JSON.parse(userDetails1)
        console.log(userDetails)
  
        const currentEmail=emailRef.current.value;
        console.log(currentEmail)
        const currentPassword=passwordRef.current.value;
        console.log(currentPassword)

        if(currentEmail==userDetails.email && currentPassword==userDetails.password){
            navigate('/dashboard')
            console.log("succesfull")
           


        }else{
           console.log("unsuccessfull")
        }
        
    }

    function signUp(){

       

        const currentName= nameRef.current.value;
        console.log(currentName)
        const currentEmail=emailRef.current.value;
        console.log(currentEmail)
        const currentPassword=passwordRef.current.value;
        console.log(currentPassword)

        localStorage.setItem("User",JSON.stringify({name:currentName,email:currentEmail,password:currentPassword}))

        setSignin(true)
        

    }


    return(
        <>
       
        <div style={{textAlign:"center",margin:"15px"}}>
      <div style={{fontSize:"50px"}}> {signin ? "Sign In":"Sign Up" } </div>
       <div> { !signin ? <><label>Full Name</label> <input type="text" ref={nameRef}/></>: ""} </div>
        <div style={{margin:"15px"}}><label>Email</label> <input type="text" ref={emailRef}/></div>
        <div style={{margin:"15px"}}><label>Password</label> <input type="text" ref={passwordRef}/></div>
        <button style={{background:"blue",color:"black",fontSize:"20px"}} onClick={signin ? ()=>signIn():()=>signUp()}>{signin ? "Sign In":"Sign Up"}</button>
        <div onClick={()=>setSignin(!signin)}>{signin ? "Sign Up":"Sign In"}</div>
        </div> 
        </>
    )

}

export default Project