import React from 'react'
import Title from '../Title/Index';
import './Style.css';
import AOS from 'aos';
import profile1 from '../../Images/teams/profile1.jpg';
import profile2 from '../../Images/teams/profile2.jpg';
import profile3 from '../../Images/teams/profile3.jpg';
const Teamsabout = () => {
   
    AOS.init({
        duration: 2000,
      })  
   
   
    return (
        <div className='container'>
            <Title title='Our Teams' />
            <div className='row' data-aos="fade-right">
                <div className='col-md-4 div_team'>
                <img className='img_teams' src={profile1} alt="Logo" />
                <h4 className='h4_team_about'>JEAN SMITH</h4>
                <span className='span_team_about'>SKATEBOARD TRAINER</span>
                <div>
                <a href="#" class="fa fa-facebook fb_about"></a>
                <a href="#" class="fa fa-twitter fb_about"></a>
                <a href="#" class="fa fa-instagram fb_about"></a>
                </div>

                </div>
                <div className='col-md-4 div_team '>
                <img className='img_teams' src={profile2} alt="Logo" />
                <h4 className='h4_team_about'>BOB CARRY</h4>
                <span className='span_team_about'>SKATEBOARD TRAINER</span>
                <div>
                <a href="#" class="fa fa-facebook fb_about"></a>
                <a href="#" class="fa fa-twitter fb_about"></a>
                <a href="#" class="fa fa-instagram fb_about"></a>
                </div>
                </div>
                <div className='col-md-4 div_team'>
                <img className='img_teams' src={profile3} alt="Logo" /> 
                <h4 className='h4_team_about'>Sally FISHER</h4>
                <span className='span_team_about'>SKATEBOARD TRAINER</span>
                <div>
                <a href="#" class="fa fa-facebook fb_about"></a>
                <a href="#" class="fa fa-twitter fb_about"></a>
                <a href="#" class="fa fa-instagram fb_about"></a>
                </div>
                </div>



            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Teamsabout
