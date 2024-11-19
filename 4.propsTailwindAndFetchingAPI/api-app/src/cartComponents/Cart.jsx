import React from 'react';
import { useCart } from '../context/Cart';
// import { CartContext } from '../context/Cart';

const Cart = function () {
    // const cart = useContext(CartContext);
    const cart = useCart();
    const total = cart.items.reduce((a, b) => a + b.price, 0);
    return (
        <div className='cart'>
            <h2>Cart</h2>
            {cart &&
                cart.items.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            <h5>Total Bill: ${total}</h5>
        </div>
    );
};

export default Cart;
