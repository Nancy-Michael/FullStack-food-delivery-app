import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/Context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index} >
                                <div className='cart-items-title cart-items-item'>
                                    <img src={url + "/images/" + item.image} alt="item-img" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}

            </div>

            <div className="cart-bottom">
                <div className='cart-total'>
                    <h2>Cart Totals</h2>

                    <div>
                        <div className="cart-toatal-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-toatal-details">
                            <p>Deleviry Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-toatal-details">
                            <b>Total</b>
                            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
                        </div>
                        <hr />
                        <button onClick={() => navigate('/order')}>Proceed To Checkout</button>
                    </div>
                </div>
                <div className="promo-code">
                    <div className="promo-code-input">
                        <input type="text" placeholder='Enter Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
