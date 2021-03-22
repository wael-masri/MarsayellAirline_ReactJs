import React from 'react'
import Title from '../Title/Index';
import './Style.css';
import AOS from 'aos';
const Galleryhome = () => {
   
    AOS.init({
        duration: 1800,
      })   
   
    return (
        <div className='container ' >
           <Title title='Our Offers' />
           <div className='row' data-aos="slide-up">
           <div className='col-md-4 div_offers'  >
                    <h4 className='title_offers'>PREMIUM</h4>
                    <span className='price_offers'>$200 / year</span>

                    <ul className='ul'>
                        <li className='list_offers li'>Officia quaerat eaque neque</li>
                        <li className='list_offers li'>Possimus aut consequuntur incidunt</li>
                        <li className='list_offers li'>Lorem ipsum dolor sit amet</li>
                        <li className='list_offers li'>Consectetur adipisicing elit</li>
                        <li className='list_offers li'>Dolorum esse odio quas architecto sint</li>
                        
                    </ul>
                  
                    <button className='btn btn_offers' >Buy Now</button>
           </div>
                
                
                 <div className='col-md-4 div_offers'>
                    <h4 className='title_offers'>GOLD</h4>
                    <span className='price_offers'>$250 / year</span>

                    <ul className='ul'>
                        <li className='list_offers li'>Officia quaerat eaque neque</li>
                        <li className='list_offers li'>Possimus aut consequuntur incidunt</li>
                        <li className='list_offers li'>Lorem ipsum dolor sit amet</li>
                        <li className='list_offers li'>Consectetur adipisicing elit</li>
                        <li className='list_offers li'>Dolorum esse odio quas architecto sint</li>
                        
                    </ul>
                    <button className='btn btn_offers' >Buy Now</button>
                 </div>

                 <div className='col-md-4 div_offers'>
                    <h4 className='title_offers'>SILVER</h4>
                    <span className='price_offers'>$150 / year</span>

                    <ul className='ul'>
                        <li className='list_offers li'>Officia quaerat eaque neque</li>
                        <li className='list_offers li'>Possimus aut consequuntur incidunt</li>
                        <li className='list_offers li'>Lorem ipsum dolor sit amet</li>
                        <li className='list_offers li'>Consectetur adipisicing elit</li>
                        <li className='list_offers li'>Dolorum esse odio quas architecto sint</li>
                        
                    </ul>
                    <button className='btn btn_offers' >Buy Now</button>
                 </div>



           </div>
        
           <br />
           <br />
           <br />
        </div>
    )
}

export default Galleryhome
