import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Iconshop = (props) => {
   
   
    return (
        <Fragment>
             <Link to='/Cart' className='icon_shop_link'>
           
             <i  className="fa ico">&#xf07a;</i>
            <span className='badge badge-danger'>{props.quantity}</span>
            </Link>
        </Fragment>
    )
}

export default connect((state) => {
    
 return { quantity: state.cart.reduce((total, item) => total + parseInt(item.quantity) , 0)}

} )(Iconshop)
