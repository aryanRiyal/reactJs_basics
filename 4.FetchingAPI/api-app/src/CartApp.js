import './App.css';
import Item from './cartComponents/Item';
import Cart from './cartComponents/Cart';

const CartApp = function () {
    return (
        <div className='CartApp'>
            <Item id={1} name='MacBook Pro' price={3199} />
            <Item id={2} name='LED TV' price={2150} />
            <Item id={3} name='Iphone' price={899} />
            <Cart />
        </div>
    );
};

export default CartApp;
