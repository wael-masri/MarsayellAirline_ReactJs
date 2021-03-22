import React from "react";

// type of action
import {
  add_to_cart,
  clear_all_cart,
  delete_from_cart,
} from "../Actions/Types";

//initioal state of reducer items
const initial = {cart: [],};
  
   
  


//reducer item
const Reducer = (state = initial, action) => {
  
  //for add to cart
  if (action.type == add_to_cart) {
    let new_state = {
        cart: [
          ...state.cart,
          {
            product: action.product,
            quantity: action.quantity,
          },
        ],
    };

    return new_state;
  } 
  //for delete item but not working
  else if (action.type == delete_from_cart) {
    const item_remove = action.index;
    let new_state = { ...state };
    delete new_state.cart[item_remove];
    return new_state;
  }
  // clear all from cart
  else if (action.type == clear_all_cart) {
    let new_state = { ...state };
    new_state.cart = [];
    return new_state;
  } 
  else {
    return state;
  }
}

export default Reducer;
