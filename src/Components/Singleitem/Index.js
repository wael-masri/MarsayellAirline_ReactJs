import React,{useEffect,useState} from 'react'
import {getById} from "../../Data/Functions";
import {connect} from 'react-redux';
import {addToCart} from '../../Actions/Actions';
import './Style.css';
const Singleitem = (props) => {
   
    const [ itemsingle , setitemsingle] = useState({
        
        quantity :1,
        single: {}
       })











// fetch data
    useEffect (  () => {
       

        getById(parseInt(props.id))
            .then(items => {
                setitemsingle({...itemsingle,
                    single : items
                    
                });
               
           } )
        
    },[])

    const product2 = itemsingle.single;
// if repeat order same info 
var istrue = false ;
const added = (product,quantity) => {
   props.cartItemscheck.map(item2 => {
        if( item2.product.title === itemsingle.single.title ){
             istrue = true ;
        } 
        
        
  })
  if(istrue){
      console.log("not added");
  }else{
    console.log(" added");
    props.addToCart(product,quantity);  
    istrue = false ;
  }

}

// increament quantity
const inc = () => {
   let qty = itemsingle.quantity + 1 ;
    setitemsingle({...itemsingle,
        quantity : qty})

}

// increament quantity
const dec = () => {
    if(itemsingle.quantity > 1){
    let qty = itemsingle.quantity - 1 ;
     setitemsingle({...itemsingle,
         quantity : qty})
     }
 
 }
 






//form display single item 

const product = () => {



 var qty= itemsingle.quantity;
   return(
       <div className='row big_div_singleitem'>
           <div className='col-md-6'>
           <a data-fancybox='gallery' href={itemsingle.single.image_link}>
               <img src={itemsingle.single.image_link} alt="image" className='img_singlitem' />
           </a>
           </div>

           <div className='col-md-6'>
              <h2 className='h2_singleitem'>{itemsingle.single.title}</h2>
              <h4 className='h4_singleitem'>{itemsingle.single.description}</h4>
              <h4 className='h4_singleitem_price'>${itemsingle.single.price}</h4>
              <h4 className='h4_singleitem_price'> Quantity : {itemsingle.quantity}</h4>
              <button className='btn btn_addtocart_dinglitem' onClick={() => inc()}>+</button> <button className='btn btn_addtocart_dinglitem' onClick={() => dec()}>-</button>
              <br /><br />
                        <p className='p_total_price_singleitem' >total : ${itemsingle.single.price * qty}</p>
              <button 
                    className="btn btn_addtocart_dinglitem"
                    onClick={ () => added(itemsingle.single,itemsingle.quantity) }>
                            Add to Cart
                        </button>
           </div>
       


       </div>
   )




}
 //running
    return (
        <div>
           
         {product()}
        </div>
    )
}



export default connect( (state) => {
    return{
        cartItemscheck: state.cart
    }
},{addToCart})(Singleitem)
