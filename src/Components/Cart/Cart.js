import React, { useContext } from 'react';
import './Cart.css'
import { AppContext } from '../../AppContext';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(AppContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      
        {cartItems.map(item => (
          <div key={item.id}>

                <hr />
                <div className="cartItems-format cartitems-format-main">
                   <img src={item.image} alt={item.title} width="50" />
                   <p>{item.title}</p>
                   <p>{item.price}</p>
                   <button className='cartitems-quantity'>{item.quantity}</button>
                   <p>${item.price * item.quantity}</p>
                   <div className='add-remove'>
                       <button onClick={() => removeFromCart(item.id)}>-</button>
                          <span>{item.quantity}</span>
                        <button onClick={() => addToCart(item.id)}>+</button>
                   </div>
                </div>
          </div>
        ))}
      
      <hr />
      
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>SubTotal</p>
                    <p>${cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code ,Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text"  placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Cart;

