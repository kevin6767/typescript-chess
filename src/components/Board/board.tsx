import React, {ReactNode, useEffect} from 'react'
import {columns, rows} from '../Game/game'
import Square from '../Square/square'
import './styles/board.scss'

function mapValueToLetter(value: number): string {
    switch (value) {
        case 1:
            return 'a';
        case 2:
            return 'b';
        case 3:
            return 'c';
        case 4:
            return 'd';
        case 5:
            return 'e';
        case 6:
            return 'f';
        case 7:
            return 'g';
        case 8:
            return 'h';
        default:
            throw new Error(`Invalid value: ${value}`);
    }
}


const Board = () => {
    const [board, setBoard] = React.useState<ReactNode>([])

    function renderBoard(): ReactNode[] {
        const newBoard: ReactNode[] = [];

        for (let i: number = 1; i <= columns; i++) {
            const columnContent: ReactNode[] = [];

            for (let j: number = 1; j <= rows; j++) {
                columnContent.push(
                    <div key={`${i}-${j}`} className={'square-container'}>
                        <Square
                            className={`square -${mapValueToLetter(i)} -${9 - j}`}
                            column={i}
                            row={j}
                            pos={`${mapValueToLetter(i)}${9 - j}`}
                            renderBoard={renderBoard}
                            setBoard={setBoard}
                        />
                    </div>
                );
            }

            newBoard.push(
                <div key={`column-${i}`} className={'column-container'}>
                    {columnContent}
                </div>
            );
        }

        return newBoard
    }


    useEffect(() => {
        setBoard(renderBoard())
    }, [])

    return <div className={'board-container'}>
        {board}
    </div>
}

export default Board