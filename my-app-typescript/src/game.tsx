import React, { useState } from "react";
import { Board } from './board'

type GameHistoryState = {
    squares: Array<string | null>
}

export function Game() {

    const [history, setHistory] = useState<Array<GameHistoryState>>([{squares: Array<string | null>(9).fill(null)}])
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    function calculateWinner(squares: Array<string|null>) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function handleClick(index: number) {
        const tempHistory = history.slice(0, stepNumber + 1)
        const current = tempHistory[tempHistory.length - 1]
        const squares = current.squares.slice()
        if(calculateWinner(squares || squares[index])) {
            return
        }
        squares[index] = xIsNext ? 'X' : 'O'
        setHistory(history.concat([{squares: squares}]))
        setStepNumber(history.length)
        setXIsNext(!xIsNext)
    }

    function jumpTo(step: number) {
        setStepNumber(step)
        setXIsNext((step % 2) === 0)
    }

    const currentGameState = history[stepNumber];
    const winner = calculateWinner(currentGameState.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    squares={currentGameState.squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}