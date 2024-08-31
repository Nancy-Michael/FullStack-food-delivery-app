import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext';

function FoodItem({ id, name, image, price, description }) {


    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-img' src={url + "/images/" + image} alt="food-img" />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='add' /> :
                    <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='remove-btn' />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add-btn" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className='food-item-des'>{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
