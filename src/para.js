import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";
import {Button} from "react-bootstrap";


const Param=()=>{

const[data,setData]=useState("")

const param=useParams()
console.log(param)




const fetch2=async()=>{


    const url=await axios.get(`https://fakestoreapi.com/products/${param.id}`)
    setData(url?.data)
}

useEffect(()=>{
    fetch2()
})

return (

    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={data?.image} />
    <Card.Body>
      <Card.Title>{data?.title}</Card.Title>
      <Card.Text>
       {data?.description}
      </Card.Text>
      <Button variant="primary">Add to Cart</Button>
    </Card.Body>
  </Card>
  </>


)




}
export default Param