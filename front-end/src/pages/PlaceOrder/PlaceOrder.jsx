import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/Context/StoreContext'

function PlaceOrder() {

    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                <input type="email" placeholder='Email address' />
                <input type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type="text" placeholder='Phone number' />
            </div>
            <div className="place-order-right">
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
                        <button>Proceed To Payment</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
