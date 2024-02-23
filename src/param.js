import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";




const Hello=()=>{

    



const [data,setData]=useState()
const param=useParams()


async function getdata(){

    const getinfo= await axios.get(`https://fakestoreapi.com/products/${param.id}`)
    setData(getinfo?.data)

}




useEffect(()=>{
    getdata()
})

let productsFromStore = JSON.parse(localStorage.getItem('products'))||[] 
let handleCart = ()=>{

       let existingProduct =  productsFromStore.find((product)=>{
            return product.id===data.id
        })

        if(existingProduct){
            return 
        }
        productsFromStore.push(data)

        localStorage.setItem("products",JSON.stringify(productsFromStore))
}


return (

       <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={data?.image} />
    <Card.Body>
      <Card.Title>{data?.title}</Card.Title>
      <Card.Text>
       {data?.description}
      </Card.Text>
      <Button onClick={handleCart} variant="primary">Add to Cart</Button>
    </Card.Body>
  </Card>
  </>
)





}

export default Hello