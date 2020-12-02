import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
//import { Link } from 'react-router-dom';
//import Rating from './Rating';
//import image from '../images/bb.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Product(props) {
  const classes = useStyles()
  const { product } = props;
  return (
    
    <Card>
    <div key={product._id} className={classes.paper} >
      
        <img  src={product.image} alt={product.name} />
      
      <div>
        
          <h2>{product.name}</h2>
       
        
        <div >
          <div>${product.price}</div>
          <div>
           
          </div>
        </div>
      </div>
      </div>
      </Card>
    
  );
}