import React from 'react';
import logo from '../../Images/logo.png';
import './Style.css';
import {Link} from 'react-router-dom';
import Iconshop from '../Iconshop/Index';

const nav = () => {


//func if logged or not hide sign in 
const showhello = () => {
  const user =localStorage.getItem('login');
  const client = JSON.parse(localStorage.getItem('register'));
  if(user == null) {
    return( <Link className="nav-link signin_link_menu" to="/Signin">Sign In</Link>)
  }else{
    return( <Link className="nav-link signin_link_menu" to="/Admin">Hello {client.name}</Link>)
  }

}















    return(
    <nav className="navbar navbar-expand-lg navbar-dark  opacity_nav" id='navitems'>
      <div className='container'>
    <a className="navbar-brand" href="#"><img src={logo} className="logo_nav" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav_size_small_media" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <Link className="nav-link" to="/">Home1 </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Shop">Shop</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
       
      </ul>
      <span className="navbar-text">
        {showhello()}
      </span>
      <span className="navbar-text">
       <Iconshop />
      </span>
    </div>
    </div>
        </nav>
        )


}
export default nav ;
