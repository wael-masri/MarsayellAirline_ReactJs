import React, { useState, useEffect } from "react";
import './Style.css';
import Title from '../Title/Index'
import axios from 'axios';
import AOS from 'aos';
const Features = () => {
    AOS.init({
        duration: 1700,
      }) 

    const [ featuree , setFeature] = useState([])

useEffect(
   () => { axios.get('Data/Data.json').then(res => { setFeature(res.data.featuress)}) 
    
}, [])

const featuresjson = featuree.map( (val) => {
    return (
        <div className='col-md-3 div_features' key={val.id}>
                        
        <h4 className='title'>{val.title}</h4>
        <p className='p_feat'>{val.description}</p>
    </div>
    )
} )

    return ( 
            <div className='container big_div' >
                <div className='space'></div>
                < Title title='Our Features'/>
                <div className='row' data-aos="flip-left">

                {featuresjson}
                 


                </div>

            </div>




        

)

}
export default Features ;