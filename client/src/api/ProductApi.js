import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Product from '../components/Product';
//import bb from '../img/bb.jpg'



const Api = () =>{
    const [products, setProduct] = useState([]);
    const[loading, setLoading] = useState(false)
    const[error , setError]= useState(false);

   useEffect (()=>{
       const fetchData = async ()=>{
           try{
           const {data} = await axios.get('/api/products');
           setLoading(false);
            setProduct(data);
           }catch (err){
               setError(err.message);
               setLoading(false)
           }
           
       };
       fetchData();
   }, []);

return(
  <div>
      <div>
          {products.map((product)=>(
          <Product key ={product._id} product={product}></Product>))}
      </div>
  </div>
)
}

export default Api;
