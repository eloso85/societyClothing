import React,{useState, useEffect} from 'react';
import productss from "../api/ProductApi"
const url = productss;

const Api = () =>{
    const [product, setProduct] = useState([]);

   const getProduct = async()=>{
       const response = await fetch(url);
       const productData = await response.json();
       console.log(productData);
   };

   useEffect(()=>{
       getProduct();
   })

return(
   <>
   
    <h3>github users</h3>

   </>
)
}

export default Api;
