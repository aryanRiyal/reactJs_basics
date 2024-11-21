/*
import React, { useState } from 'react';

import Square from './Square';

const Board = function () {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setXTurn] = useState(true);

    const checkWinner = function () {
        const possibleWinners = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let it of possibleWinners) {
            const [a, b, c] = it;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };

    const checkDraw = function () {
        for (let it of state) {
            if (it === null) {
                return false;
            }
        }
        return true;
    };

    const isWinner = checkWinner();
    const isDraw = checkDraw();

    const handleClick = function (index) {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : 'O';
        setState(copyState);
        setXTurn(!isXTurn);
    };

    const handleReset = function () {
        setState(Array(9).fill(null));
        setXTurn(true);
    };

    return (
        <div className='board-container'>
            {isWinner ? (
                <>
                    <h2>{isWinner} won the game!</h2>
                    <button onClick={() => handleReset()}>Play Again!</button>
                </>
            ) : (
                <>
                    {isDraw ? (
                        <>
                            <h2>It's a Draw!</h2>
                            <button onClick={() => handleReset()}>Play Again!</button>
                        </>
                    ) : (
                        <>
                            <h2>{isXTurn ? 'X' : 'O'}'s Turn</h2>
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
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Board;
*/
