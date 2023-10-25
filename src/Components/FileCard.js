import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10em;
    width: 10em;
    border-radius: 6px;
    margin: 10px;
    background: #f0f2f2;
    box-shadow: 0px 0px 12px -14px rgba(0,0,0,1);
    color: #7489a6;
    `
const Thumbnail = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    background: #6e9ce6;
    color: white;
    height: 30%;
    width: 100%;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    font-size: 20px
`

const Description = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    height: 70%;
`

function FileCard({ item }) {
    return (
        <Card >
            <Thumbnail>{item.type}</Thumbnail>
            <Description>
                <div data-testid="file-card-name">{item.name}</div>
                <div>Added: {item.added}</div>
            </Description>

        </Card>)
}

export default FileCard;