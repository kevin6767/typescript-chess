import React, {ReactElement} from 'react'
import KingLight from '../../assets/images/kingLight.svg'

interface PieceProps {
    pieceType: string,
    pieceColor: string
}

export const PIECE_TYPES = {
    king: {
        name: 'king',
    color: {
        Light: <KingLight/>,
    },
    },
    queen: 'queen',
    knight: 'knight',
    bishop: 'bishop',
    rook: 'rook',
    pawn: 'pawn',
}

const Piece: React.FC<PieceProps> = ({pieceType, pieceColor}): ReactElement => {

    const renderPiece = (pieceType: string, pieceColor: string) => {
        // @ts-ignore
        console.log(pieceType, pieceColor)
        // @ts-ignore
        const lookup: object[] = pieceType
        // @ts-ignore
        return PIECE_TYPES[lookup][pieceColor]
    }
    return <div className={'piece-container'}>
        <KingLight />
    </div>

}

export default Piece