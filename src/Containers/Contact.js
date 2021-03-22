import React from 'react';

//components imported
import Contactform from '../Components/Contactform/Index';
import Map from '../Components/Map/Index';
import Title from '../Components/Title/Index';


const contact = () => {
  
    //running
    return(
    <div className="container">
          <Title title="Contact Us"/>
          <Map />
          <Contactform />
    </div>)
}

export default contact ;