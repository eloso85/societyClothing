import React,{useState, useEffect} from 'react';
import axios from 'axios'



const Api = () =>{
    const [products, setProduct] = useState([]);

   useEffect (()=>{
       const fetchData = async ()=>{
           const {data} = await axios.get('/api/products')
           setProduct(data);
           console.log(data)

       };
       fetchData()
   },[])
console.log(products[0])
return(
   <>
   
<h3>{products.name}</h3>

   </>
)
}

export default Api;
