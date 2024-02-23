import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row ,Col } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";




const Fetch=()=>{

const [data,setData]=useState([])
const navigate=useNavigate()



const Url=async()=>{

const apiurl= await axios.get("https://fakestoreapi.com/products/")
setData(apiurl?.data)
navigate("/products")

}
console.log(data)
useEffect(()=>{
    Url()
},[])


return (
 <>
  {data ? ( 
  <Row>{
    data.map((item)=>(

            <Col md={3}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item?.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={`/products/${item.id}`}>
              <Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
          </Card>
            </Col>
        ))}
  </Row>
  ):(
  <div>Loading</div>
  )
  }



</>
);
};


export default Fetch;



{/* // return (
//         <>
//             {data ? (
//                 <Row>
//                     {data.map((item, index) => (
//                         <Col key={index}>
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src={item.image} /> {/* Use item.image for the image source */}
//                                 <Card.Body>
//                                     <Card.Title>{item.title}</Card.Title> {/* Use item.title for the card title */}
//                                     <Card.Text>
//                                         {item.description} {/* Use item.description for the card description */}
//                                     </Card.Text>
//                                     <Button variant="primary">Go somewhere</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             ) : (
//                 <div>Loading</div>
//             )}
//         </>
//     );
// }; */}

