import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import './styles/square.scss';
import Piece from '../Piece/piece';

const SquareColor = {
    light: 'light',
    dark: 'dark',
};

function getSquareColor(row: number, col: number) {
    return (row + col) % 2 === 0 ? SquareColor.light : SquareColor.dark;
}

interface SquareProps {
    className?: string;
    column: number;
    row: number;
    pos: string;
    renderBoard: () => ReactNode[];
    setBoard: Dispatch<SetStateAction<ReactNode>>;
}

const Square: React.FC<SquareProps> = ({
                                           className,
                                           column,
                                           row,
                                           pos,
                                           renderBoard,
                                           setBoard,
                                       }) => {
    const [occupied, setOccupied] = useState(false);
    const squareColor = getSquareColor(row, column);

    const handlePieceDrop = () => {
        console.log('Dropped piece at position:', pos);
        // Here you can update the board state if needed
    };

    const handleSquareDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const piecePos = event.dataTransfer.getData('piecePos');
        console.log('Piece dropped at square:', pos);
        // Call the function to handle piece drop
        handlePieceDrop();
    };

    const handleSquareDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div
            className={`${className} ${squareColor}`}
            onDrop={handleSquareDrop}
            onDragOver={handleSquareDragOver}
        >
            <Piece
                occupied={occupied}
                setOccupied={setOccupied}
                pos={pos}
                handlePieceDrop={handlePieceDrop}
            />
        </div>
    );
};

export default Square;
