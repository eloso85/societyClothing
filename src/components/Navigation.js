import React from 'react';
import {Link} from 'react-router-dom';
import classes from '../styles/Navigation.module.css'
function Navigation(){
    return(
        <>
       
       
         <nav>  
                <ul className={classes.ul}>
                    <li><Link to="/">Home</Link></li>
                    <li style={{float:'right'}}><Link to="/newrelease">New Release</Link></li>
                    <li style={{float:'right'}}><Link to="/sale">Sale</Link></li>
                    <li style={{float:'right'}}><Link to="/about">About</Link></li>
                    <li style={{float:'right'}}><Link to="/contact">Contact</Link></li>
                </ul>
                
                
        </nav>
        
         </>
    )
}
 export default Navigation