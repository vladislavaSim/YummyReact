import React from 'react';

const Title = () => {
    return (
        <div className="title-holder">
            <h2>Menu</h2>
            <div className="sorting-box">
                Price
                <button id="low-price">low to high</button>
                <button id="high-price">high to low</button>
            </div>
        </div>
    )
}

export default Title;