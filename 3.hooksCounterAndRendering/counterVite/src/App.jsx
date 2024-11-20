import { useState } from "react";
import "./App.css";

function App() {
    const [counter, setCounter] = useState(10); //error
    // let counter = 7;
    // let [counter, setCounter] = useState(7);

    const addValue = function () {
        if (counter < 20) {
            setCounter(counter + 1);

            // Interview Question
            //What happens if we repeat the above statement
            setCounter(counter + 1);
            setCounter(counter + 1);
            setCounter(counter + 1);
            setCounter(counter + 1);
            // In this case useState send updates in batches so its working on the same counter value again and again so the result will be counter + 1 instead of counter + 4
            // So what happens in case we want to really update the counter 4 times or n times, then we use the callback given in the useState
            setCounter((prevCounter) => prevCounter + 1);
            setCounter((prevCounter) => prevCounter + 1);
            setCounter((prevCounter) => prevCounter + 1);
            setCounter((prevCounter) => prevCounter + 1);
            // When we use callback then it is using the value after the completion using another call, the trick here is how react handles or propagates the state

            // In case of const we have to use the setCounter instead of directly changing the value of counter
            // counter = counter + 1;
            // setCounter(counter);
            // console.log("Add, Counter Value: ", counter);
        } else {
            console.warn("Maximum Limit for Add Value is 20");
        }
    };

    const removeValue = function () {
        if (counter > 0) {
            setCounter(counter - 1);

            // In case of const we have to use the setCounter instead of directly changing the value of counter
            // counter = counter - 1;
            // setCounter(counter);
            // console.log("Remove, Counter Value: ", counter);
        } else {
            console.warn("Minimum Limit for Remove Value is 0");
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
