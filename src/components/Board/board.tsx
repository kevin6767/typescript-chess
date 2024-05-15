import React, {ReactNode} from 'react'
import {columns, rows} from '../Game/game'
import Square from '../Square/square'
import './styles/board.scss'

function mapValueToLetter(value: number): string {
    switch (value) {
        case 0:
            return 'a';
        case 1:
            return 'b';
        case 2:
            return 'c';
        case 3:
            return 'd';
        case 4:
            return 'e';
        case 5:
            return 'f';
        case 6:
            return 'g';
        case 7:
            return 'h';
        default:
            throw new Error(`Invalid value: ${value}`);
    }
}


const Board = () => {
    function renderBoard(): ReactNode[] {
        const squares: ReactNode[] = []
        for (let i: number = 0; i <= columns; i++) {
            for (let j: number = 0; j <= rows; j++) {
                squares.push(
                    <div key={i} className={'square-container'}>
                        <Square
                            // @ts-ignore
                            className={`square -${mapValueToLetter(i)} -${j + 1}`}
                            column={i}
                            // @ts-ignore
                            row={j}
                        />
                    </div>
                )
            }
        }
        return squares;
    }

    return <div className={'board-container'}>
        {renderBoard()}
    </div>
}

export default Board