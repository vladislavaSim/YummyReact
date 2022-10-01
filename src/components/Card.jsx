import React from 'react';

const Card = (obj) => {
    return (
        <div className='food-card'>
            <div className="img-holder">
               <img src={obj.img}/>
                <button className='add'>Add</button>
            </div>
            <div className="food-info">
                <p className="food-title">{obj.foodName}</p>
                <p className="food-price">{obj.foodPrice + ' UAH'}</p>
            </div>
        </div>
    );
};

export default Card;