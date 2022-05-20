import React from 'react';

function Header(props) {
    return (
            <header>
                <div className="logo">Yummy Place</div>
                <div className="cart-box">
                    <button className="cart">Cart</button>
                    <p className="cart-number"></p>
                </div>
            </header>
    );
}

export default Header;