import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-regular-svg-icons'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    height: 9.7em;
    width: 9.7em;
    margin: 10px;
    background: white;
    border-radius: 10px;
    border: 3px solid #91a7c9;
    box-shadow: 0px 0px 12px -14px rgba(0,0,0,1);
    color: #00779e
`

function FolderCard({ item }) {
    return (
        <Card onClick={() => { console.log(item.name) }}>
            <h3>{item.name}</h3>
            <FontAwesomeIcon icon={faFolder} size="3x" color="#91a7c9" />
        </Card>)
}

export default FolderCard;