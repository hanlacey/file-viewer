import React from "react";
import styled from "styled-components";


const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10em;
    width: 10em;
    border-radius: 10px;
    margin: 10px;
    background: #f0f2f2;
    box-shadow: 0px 0px 12px -14px rgba(0,0,0,1);
    color:#00779e
`

function FileCard({ item }) {
    return (
        <Card >
            <h3 data-testid="file-card-name" >{item.name}</h3>
            <div>{item.type}</div>
            <div>Added: {item.added}</div>

        </Card>)
}

export default FileCard;