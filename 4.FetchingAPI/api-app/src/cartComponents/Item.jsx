import React from 'react';
import { useCart } from '../context/Cart';
// import { CartContext } from '../context/Cart';

const Item = function (props) {
    const cart = useCart();
    // const cart = useContext(CartContext);
    console.log('Cart - ', cart);
    return (
        <div className='item-card'>
            <h4>{props.name}</h4>
            <p>Price: ${props.price}</p>
            <button
                onClick={() => {
                    cart.setItems([
                        ...cart.items,
                        { id: props.id, name: props.name, price: props.price }
                    ]);
                }}
                className='item-button'
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Item;
