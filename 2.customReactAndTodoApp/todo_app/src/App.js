import React, { useState } from 'react';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import Counter from './components/Counter';
import Timer from './components/Timer';

import './style.css';

function App() {
    const [isVisible, setVisible] = useState(true);
    const [isOn, setOn] = useState(true);
    return (
        <div className='todo-container'>
            {isVisible ? <Counter /> : <></>}
            <button onClick={() => setVisible(!isVisible)}>Toggle</button>
            {isOn ? <Timer /> : <></>}
            <button onClick={() => setOn(!isOn)}>On/Off</button>
            <Header title='Todo App' />
            <div>
                <TodoItem text='Eat' />
                <TodoItem completed='true' text='Code' />
                <TodoItem text='Gym' />
                <TodoItem completed='true' text='Shopping' />
                <TodoItem text='Rest' />
            </div>
            <Button />
        </div>
    );
}

export default App;
