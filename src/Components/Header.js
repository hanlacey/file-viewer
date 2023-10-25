
import React from "react";
import styled from "styled-components";
import { faFolderTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 1em;
    padding: 1em;
    padding-left: 2.5em;
    background: #def0ff;
    color: #038cfc;
    font-size: 20pt;
    font-weight: 600;
`;

function Header() {
    return (
        <Container>
            <FontAwesomeIcon icon={faFolderTree} size="1x" style={{ marginRight: '10px' }} />
            File Explorer
        </Container>
    );
}

export default Header;