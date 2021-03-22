import React from 'react'
import {logout} from './Utils';
const Admin = () => {
   
 const lougout = () => {
    localStorage.removeItem('register');
    logout();
 }  
   
   
   
    return (
        <div className='container'>
           <h2 style={{color:'silver'}}>Hello wael masri useer</h2>
           <a onClick={() => lougout()} href='/' className='btn btn-danger'>Loug out</a>
        </div>
    )
}

export default Admin
