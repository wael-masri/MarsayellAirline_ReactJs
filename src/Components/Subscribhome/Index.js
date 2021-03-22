import React from 'react'
import './Style.css'
const Subscribhome = () => {
    return (
        <div className='container '>
            <div className='subscrib_big_div row'>
                <div className='col-md-6'>
                    <p className='text_subscribe'>Hurry up! New courses will start on
                    <br />October 17, 2021
                    </p>
                </div>
                <div className='col-md-6'>
                    <div className="input-group mb-3 div_input">
                            <input type="text" className="form-control input_sub" placeholder="Your Email"  />
                           
                            <div className="input-group-append">
                                <button className="btn btn_sub" type="button">Subscribe</button>
                            </div>

                            
                    </div>
                    <span className='span_below_input'>I've read and accept the Privacy Policy.</span>
                </div>
            </div>  
        </div>
    )
}

export default Subscribhome;
