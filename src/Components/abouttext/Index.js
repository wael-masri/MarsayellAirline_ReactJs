import React from 'react'
import './Style.css';

//components imported
import Title from '../Title/Index';

const Abouttext = () => {
   
   
   
   
   
   
   //running
    return (
        <div className='container'>
            
            <Title title='Cadet Pilot' />
            <p className='text_about'>MA is inviting applications from young, 
            motivated, hardworking, determined and creative Lebanese 
            Nationals to be trained under the MA Cadet Pilot Training Program, 
            to become qualified First Officers (Co-Pilots). They will be required 
            eventually to work as part of the Flight Crew (Pilots) on modern aircrafts 
            of MA is new state of the art fleet.
            </p>
            
            <Title title='Cabin Crew' />
            <p className='text_about'>Your role will include looking after 
            our passengers and ensuring their comfort , safety and security, while providing 
            excellent customer services throughout their flight.
            </p>

            <Title title='Aircroft Technician' />
            <p className='text_about'>We are looking for a young, enthusiastic,
            Lebanese, male or female Aircraft Technician to join marsayell Aircraft 
            services Company
             (MASCO), the aircraft maintenance company of MA
            </p>


             <Title title='FREQUENTLY ASK QUESTIONS' />
             <div className='row'>
                 <div className='col-md-6 div_qts_about' data-aos="fade-right">
                     <h5 className='h5_qts_about'>CAN I ACCEPT BOTH PAYPAL AND STRIPE?</h5>
                     <p className='p_qts_about'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Aliquam assumenda eum blanditiis perferendis.
                     </p>
                 </div>

                 <div className='col-md-6 div_qts_about' data-aos="fade-left">
                     <h5 className='h5_qts_about'>WHERE ARE YOU FROM?</h5>
                     <p className='p_qts_about'>Voluptatum nobis obcaecati perferendis dolor totam unde dolores
                          quod maxime corporis officia et. Distinctio assumenda minima maiores.
                     </p>
                 </div>

                 <div className='col-md-6 div_qts_about' data-aos="fade-right">
                     <h5 className='h5_qts_about'>WHAT AVAILABLE IS REFUND PERIOD?</h5>
                     <p className='p_qts_about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                          assumenda eum blanditiis perferendis.
                     </p>
                 </div>
                
                 <div className='col-md-6 div_qts_about' data-aos="fade-left">
                     <h5 className='h5_qts_about' >WHAT IS YOUR OPENING TIME?</h5>
                     <p className='p_qts_about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam 
                         assumenda eum blanditiis perferendis.
                     </p>
                 </div>

                 <div className='col-md-6 div_qts_about' data-aos="fade-right">
                     <h5 className='h5_qts_about'>CAN I ACCEPT BOTH PAYPAL AND STRIPE?</h5>
                     <p className='p_qts_about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam 
                         assumenda eum blanditiis perferendis.
                     </p>
                 </div>

                 <div className='col-md-6 div_qts_about' data-aos="fade-left">
                     <h5 className='h5_qts_about'>CAN I ACCEPT BOTH PAYPAL AND STRIPE?</h5>
                     <p className='p_qts_about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                          assumenda eum blanditiis perferendis.
                     </p>
                 </div>

             </div> 
        </div> ) 
}

export default Abouttext
