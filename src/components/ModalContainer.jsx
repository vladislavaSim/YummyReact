import React from 'react';
import { useState } from 'react';

const ModalContainer = () => {
    const [isDesplayed, setIsDesplayed] = useState(false)

    function toggleDisplay() {
        return isDesplayed ? 'none' : 'block' 
    }
    return (
        <section className="modal-container" 
        style={{display: toggleDisplay}}>
            <div className="modal-box">
                <div className="modal-header">Cart
                    <button className="close-btn">X</button>
                </div>
                <div className="cart-list">
                    <ul className="order-list">

                    </ul>
                    <div className="order-box">
                        <div className="total-price"></div>
                        <button className="order">Make an order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModalContainer;