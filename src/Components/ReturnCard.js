import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-betweem;
    height: 9.7em;
    width: 9.7em;
    margin: 10px;
    background: white;
    border-radius: 6px;
    border: 2px solid #6e9ce6;
    background: ${props => props.isPressed ? '#6e9ce6' : 'white'};
    color: ${props => props.isPressed ? 'white' : '#6e9ce6'};

`

function ReturnCard({ onClick }) {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };

    useEffect(() => {
        // reset isPressed when the component is unmounted
        return () => {
            setIsPressed(false);
        };
    }, []);

    return (
        <Card
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}  // reset on mouse leave in case the mouse button is released outside the Card
            onClick={onClick}
            isPressed={isPressed}
        >
            <h2>Return</h2>
            <FontAwesomeIcon icon={faChevronLeft} size="3x" color={isPressed ? "white" : "#6e9ce6"} />
        </Card>)
}

export default ReturnCard;