import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 1em;
    padding: 1em;
    padding-left: 2.5em;
    background: #def0ff;
    color: navy;
    font-size: 20pt;
    font-weight: 600;
`;

function Header() {
    return (
        <Container>
            File Explorer
        </Container>
    );
}

export default Header;