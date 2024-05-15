import React from "react"
import Board from '../Board/board'
import './styles/game.scss'

export const columns: number = 7
export const rows: number = 7

const Game = () => {
    return <div className={'game-container'}>
        <Board />
    </div>
}

export default Game