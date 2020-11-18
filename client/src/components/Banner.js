//import { render } from '@testing-library/react';
import React from 'react';
import classes from '../styles/Banner.module.css'
function Banner(){
    
    return(<>
     <div className={classes.banner_img}>
        <div className={classes.banner_text}>
        <h1 >
         $ocietyClothing
         </h1>
        </div> 
    </div>
    
    </>)
}

export default Banner 