import React, { useEffect, useState } from 'react';

const Counter = function () {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('CounterComponent is Mounting...');
        return function () {
            console.log('Unmounting CounterComponent...');
        };
    }, []);
    useEffect(() => {
        console.log('Count got Updated!', count);
        return function () {
            console.log('Unmounting Previous Count - ', count);
        };
    }, [count]);
    return (
        <div>
            <p>Counter Component - {count}</p>
            <h3>Number is {count % 2 === 0 ? 'Even' : 'Odd'}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;
