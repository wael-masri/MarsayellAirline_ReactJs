
import './App.css';
import React, { Component, Switch } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';

//components imported
import Nav from '../Components/Nav/Index';
import Footer from '../Components/Footer/Index';
import Iconscrollup from '../Components/Iconscrollup/Index';
// basics pages
import Home from './index';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Shop from './Shop';
import Cart from './Cart';
import Item from './Item';
import Signin from './Signin';
import Admin from './Admin';
import PrivateRoute from './Privaterouter';
import PublicRoute from './Publicrouter';
class  App extends Component {
  
  render() {

  //running
  return (
    
     <BrowserRouter>
          <Nav />
          <Iconscrollup />
         
          <Route exact path='/' component={Home} />
          <Route exact path='/MarsayellAirline_ReactJs/' component={Home} />
        
          <Route path='/About' component={About} />
          <Route path='/Gallery' component={Gallery} />
          <Route path='/Contact' component={Contact} />
          <Route exact path='/Shop' component={Shop} />
          <Route path='/Cart' component={Cart} />
          <Route path='/Shop/:id' component={Item} />
          <PublicRoute restricted={true} component={Signin} path="/Signin" exact />
          <PrivateRoute component={Admin} path="/Admin" exact />
          
         

          <Footer />
    </BrowserRouter>
 
  );
}
}
export default App;
