import React from 'react';


//components
import Videoheader from '../Components/Videohomeheader/Index';
import Features from '../Components/Features/Index';
import Imagefixed from '../Components/Imagefixed/Index';
import Subscribhome from '../Components/Subscribhome/Index';
import Galleryhome from '../Components/Offerhome/Index';
import Counterhome from '../Components/Counterhome/Index';

const home = () => {
    
    //running
    return(
    <div>
        <Videoheader /> 
        <Subscribhome />
        <Features />
        <Galleryhome />
        <Imagefixed />
        <Counterhome /> 
    </div>)


}
export default home ;