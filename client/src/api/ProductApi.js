import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Product from '../components/Product';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import  Paper from '@material-ui/core';
//import bb from '../img/bb.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


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

   const classes = useStyles();
return(
    <Container>
 <div className={classes.root}>
 <Grid container direction="row" spacing={5} >
     
         
          {products.map((product)=>(
              
              <Grid key ={product._id} item xs={5}>  
            
         <Product  product={product}></Product>
        
         </Grid>
         
         ))}
      </Grid>
     
  </div>
  </Container>
)
}

export default Api;
