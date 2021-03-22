import React from 'react'
import CountUp from 'react-countup';
import './Style.css';
import AOS from 'aos';
const Counterhome = () => {

    AOS.init({
        duration: 1500,
      })  
    return (
        <div className='container big_div_counter'>
         <div className='row' data-aos="zoom-in">
            <div className='col-md-3 div_counter'>
            <CountUp end={40} className='count' duration={5} />
            <span className='pluce_span'>+</span>
            <h5 className='title_counter'>Year of Experience</h5>
            </div>
            <div className='col-md-3 div_counter'>
            <CountUp end={30} className='count' duration={5} /> 
            <span className='pluce_span'>+</span>  
            <h5 className='title_counter'>Expert Trainer</h5>  
            </div>
            <div className='col-md-3 div_counter'>
            <CountUp end={4} className='count' duration={5} />
            <span className='pluce_span'>+</span>
            <h5 className='title_counter'>Number of Trainer</h5>
            </div>
            <div className='col-md-3 div_counter'>
            <CountUp end={1500} className='count' duration={5} />
            <span className='pluce_span'>+</span>
            <h5 className='title_counter'>Number of Members</h5>
            </div>





         </div>
            
        </div>
    )
}

export default Counterhome
