import React from 'react'
import './Style.css';
const Map = () => {
    return (
        
    <div id="map-container-google-1"  >
              <iframe className='map' src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" >
              </iframe>
              <p className='p_below_map'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
      
    )
}

export default Map
