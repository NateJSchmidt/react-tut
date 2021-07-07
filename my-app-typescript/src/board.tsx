import { Square } from './square';

type BoardProps = {
    squares: Array<string | null>
    onClick(index: number): void
}

export function Board(props: BoardProps) {

    function renderSquare(index: number) {
        return (
            <Square
                value={props.squares[index] || ''}
                onClick={() => props.onClick(index)}
            />
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}