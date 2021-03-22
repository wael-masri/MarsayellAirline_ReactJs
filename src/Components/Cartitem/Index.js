import React from 'react'
import {connect} from 'react-redux';
import {clearToCart} from '../../Actions/Actions';
import './Style.css';

//components imported
import Title from '../Title/Index';

const  Cartitem = (props) => {
  


//place order function
const  placeOrder = () => {
    const user =localStorage.getItem('login');
    if(user == null) {
    alert("Please login befor place order :)");
    }else{
        props.clearToCart();
    }
    }




    








  const item_cart = props.cartItems.map((val,index) => {
     
    return(

<div className=' big_div_items_cart' key={index}>

    <div className="sub_div_items_cart">
        <div className='row '>
            <div className='col-md-3'>
                <img src={val.product.image_link} alt='alt' className='img_items_cart' />
            </div>
            <div className='col-md-3'>
                <h4 className='h4_items_cart'>
                  {val.product.title}

                </h4>
            </div>
            <div className='col-md-3 div_price_pricetotal_cartitem'>
                <span className='span_items_cart_price'>
                   Price : ${val.product.price}
                </span>
                <br />
                <span className='span_items_cart_price '>
                   Total price : ${val.product.price * val.quantity}
                </span>
            </div>
            <div className='col-md-3 div_quantity_cartitem'>
                <span className='span_items_cart_price'>
                   Quantity:{val.quantity}
                </span>
            </div>
        </div>

    </div>
</div>
       
    )
})

    //running
    return (
            <div className='container'>
                <Title title='Cart Item' />

                {item_cart}

                <h2 className='h2_cart_total_prices'>
                   Total Order Price : ${props.total}
                </h2>
                <button 
                className=" btn btn_cart_order"
                onClick={() => placeOrder()}>Place Order</button>
                <br />
            </div>
    )
}

export default  connect((state) => {
 
  return{ 
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
  }
},{clearToCart})(Cartitem)
