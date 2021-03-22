import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Title from '../Title/Index';
import './Style.css';
const Shopitem = () => {
//from data in item_cart json    
const [item , setitem] = useState([])


//fetch data from file json in public folder
useEffect( () =>  {
   axios.get('/Data/Data.json').then(res => { setitem(res.data.item_shopping)})
  }, [])   
   
  
  
  const items = item.map(value => {
    return(
      <div className='col-md-4 big_div_items_shop' key={value.id}>
                  
      <div className="sub_div_items_shop">
          <img src={value.image_link} alt='alt' className='img_items' />
          <h4 className='h4_items_shop'>
          {value.title}
         
          </h4>
       
          <p className='p_items_shop'>
          {value.description}
          </p >
          <span className='span_items_shop_price'>
              Price : ${value.price}
          </span>
          <span >
             <Link to={"/Shop/" + value.id} className='btn btn_items_shop'>Details</Link>
          </span>

      </div>
     </div>
















      //   <div className="card col-md-4" key={value.id} >
      //   <img className="card-img-top" src={value.image_link} alt="Card image cap" />
      //   <div className="card-body">
      //     <h5 className="card-title">{value.title}</h5>
      //     <p className="card-text">{value.description}</p>
      //     <Link to={"/Shop/" + value.id} className="btn btn-primary">Details</Link>
      //   </div>
      // </div>
    )
  })
   
   
   
   
   
   
   
   
    return (
      <div className='container'>
       <Title title="Our Shop" />
        <div className='row' >
         
            {items}
            
        </div>
        
        <br />
        <br />
        </div>
    )
}

export default Shopitem;
