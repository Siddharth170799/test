import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin=()=>{

const [data,setData]=useState('')
const [data1,setData1]=useState("")
const navigate=useNavigate()


const Signin=()=>{
    
const getval=localStorage.getItem("Key")
const getval2=JSON.parse(getval)
console.log(getval2)

if(getval2.email==data && getval2.password==data1){

    console.log("successful")
    navigate("/products")
}


}

return (
<>

    <input type="text" onChange={(e)=>setData(e.target.value)}/>
    <input type="text" onChange={(e)=>setData1(e.target.value)}/>
    <button onClick={Signin}>click here</button>
    </>
)



}

export default Signin

