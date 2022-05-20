import React from 'react';

const SideMenu = () => {
    return (
        <div className="sidebar">
            <ul className="types-list">
                <li className="food-type" id="Breakfasts">Breakfasts</li>
                <li className="food-type" id="Salads">Salads</li>
                <li className="food-type" id="Desserts">Desserts</li>
                <li className="food-type" id="Asian">Asian</li>
                <li className="food-type" id="European">European</li>
                <li className="food-type" id="All">All</li>
            </ul>
        </div>
    );
};

export default SideMenu;