import { useState } from 'react';
import './App.css';

function App() {
    // let counter = 7;
    // const [counter, setCounter] = useState(7); //error
    let [counter, setCounter] = useState(7);

    const addValue = function () {
        if (counter < 20) {
            counter = counter + 1;
            setCounter(counter);
            console.log('Add, Counter Value: ', counter);
        } else {
            console.warn('Maximum Limit for Add Value is 20');
        }
    };

    const removeValue = function () {
        if (counter > 0) {
            counter = counter - 1;
            setCounter(counter);
            console.log('Remove, Counter Value: ', counter);
        } else {
            console.warn('Minimum Limit for Remove Value is 0');
        }
    };

    return (
        <>
            <h1>React Basics</h1>
            <h2>Counter Value: {counter}</h2>

            <button onClick={addValue}>Add Value {counter}</button>
            <br />
            <button onClick={removeValue}>Remove Value {counter}</button>
            <p>Footer: {counter}</p>
        </>
    );
}

export default App;
