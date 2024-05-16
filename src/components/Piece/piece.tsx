import React, {ReactComponentElement, ReactElement, useState} from 'react'
// @ts-ignore
import {ReactComponent as KingLight} from '../../assets/images/kinglight.svg'

interface PieceProps {
    occupied: boolean;
    setOccupied: React.Dispatch<React.SetStateAction<boolean>>;
    pos: string; // Add pos property
    handlePieceDrop: () => void;
}


const Piece: React.FC<PieceProps> = ({ pos, handlePieceDrop }): ReactElement | null => {

    const handlePieceDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        // Hide the original element being dragged
        event.currentTarget.style.opacity = '0';

        // Set the original element as the drag image
        event.dataTransfer.setDragImage(event.currentTarget, 0, 0);

        event.currentTarget.style.cursor = 'grabbing'; // Change cursor to grabbing hand icon
    };

    const handlePieceDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
        // Show the original element after the drag operation ends
        event.currentTarget.style.opacity = '1';
        event.currentTarget.style.cursor = 'pointer'; // Reset cursor to default pointer

        // Set dragging state to false
    };

    return (
        <div
            className="piece-container"
            onDragStart={handlePieceDragStart}
            onDragEnd={handlePieceDragEnd}
            style={{ cursor: 'pointer' }} // Set initial cursor style to pointer
            draggable={true}
        >
            {pos === 'e1' && <KingLight />}
        </div>
    );
};

export default Piece;
