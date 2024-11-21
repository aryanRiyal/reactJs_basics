import React, { useState, useEffect } from 'react';

import Square from './Square';

const NewBoard = function () {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const checkWinner = function () {
            for (let combo of winningCombos) {
                const [a, b, c] = combo;
                if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                    setWinner(state[a]);
                    return;
                }
            }
            if (state.every((cell) => cell !== null)) {
                setWinner('Draw');
            }
        };
        checkWinner();
    }, [state]);

    const handleClick = function (index) {
        if (state[index] || winner) return;
        const newState = state.slice();
        console.log('isXTurn - ', isXTurn);
        newState[index] = isXTurn ? 'X' : 'O';
        console.log('newState[index] - ', newState[index]);
        setState(newState);
        setXTurn(!isXTurn);
    };

    const handleReset = function () {
        setState(Array(9).fill(null));
        setWinner(null);
        setXTurn(true);
    };

    return (
        <div className='newBoard-container'>
            {winner ? (
                <>
                    <h2>{winner === 'Draw' ? "It's a Draw!" : `${winner} won the game!`}</h2>
                    <button onClick={() => handleReset()}>Play Again!</button>
                </>
            ) : (
                <>
                    <h2>{isXTurn ? 'X' : 'O'}'s Turn</h2>
                    <div className='newBoard'>
                        <div className='board-row'>
                            <Square onClick={() => handleClick(0)} value={state[0]} />
                            <Square onClick={() => handleClick(1)} value={state[1]} />
                            <Square onClick={() => handleClick(2)} value={state[2]} />
                        </div>
                        <div className='board-row'>
                            <Square onClick={() => handleClick(3)} value={state[3]} />
                            <Square onClick={() => handleClick(4)} value={state[4]} />
                            <Square onClick={() => handleClick(5)} value={state[5]} />
                        </div>
                        <div className='board-row'>
                            <Square onClick={() => handleClick(6)} value={state[6]} />
                            <Square onClick={() => handleClick(7)} value={state[7]} />
                            <Square onClick={() => handleClick(8)} value={state[8]} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default NewBoard;
