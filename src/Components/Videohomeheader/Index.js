import { Fragment } from "react"
import './Style.css';
import video from '../../Videos/video1.mp4'
const videoheader = () => {


    return ( 
        
            <div className=' div_vid'>
<video autoPlay muted loop id="myVideo" >
  <source src={video} type="video/mp4" />
  Your browser does not support HTML5 video.
</video>

<div className="content">
  <h1 className='h1_video_home'>Marsayell Airline</h1>
  <p className='p_video_home'>We continue to discover the world together.</p>
  
</div>


            </div>




        

)

}
export default videoheader ;