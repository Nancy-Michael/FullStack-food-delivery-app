import React from 'react'
import './FoodDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay({ category }) {

    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display'>
            <h1>Top Dishes</h1>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return <FoodItem key={index}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            price={item.price} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
