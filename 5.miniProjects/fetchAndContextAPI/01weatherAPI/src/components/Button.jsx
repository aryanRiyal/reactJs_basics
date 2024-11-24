import React from 'react';

const Button = function (props) {
    return (
        <button className='btn' onClick={props.onClick}>
            {props.value}
        </button>
    );
};

export default Button;
