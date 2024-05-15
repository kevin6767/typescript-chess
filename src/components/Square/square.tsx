import React from 'react'
import './styles/square.scss'
import Piece, {PIECE_TYPES} from '../Piece/piece'

const SquareColor = {
    light: 'light',
    dark: 'dark',
}

function getSquareColor(row: number, col: number): typeof SquareColor {
    // Check if the sum of row and col is even or odd to determine the color
    // @ts-ignore
    return (row + col) % 2 === 0 ? SquareColor.light : SquareColor.dark;
}


interface SquareProps {
    className?: string,
    column: number,
    row: number
}

const Square: React.FC<SquareProps> = ({
    className,
    column,
    row
}) => {
    let str = SquareColor.light
    str = str[0].toUpperCase() + str.slice(1)
    // @ts-ignore
    console.log(str)
    return <div className={`${className} ${getSquareColor(row, column)}` }>
        <Piece
            // @ts-ignore
            pieceType={PIECE_TYPES.king.name} pieceColor={str} />
    </div>
}

export default Square