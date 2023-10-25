import React, { useEffect, useState } from "react";
import styled from "styled-components";
import filesJson from '../files.json'
import FileCard from "./FileCard";
import FolderCard from "./FolderCard";

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #f2f8fa;
`;
const MenuButton = styled.button`
    outline: none;
    border: none;
    padding: 1em;
    width: 100%;
    background-color: ${props => props.selected ? '#91a7c9' : '#f2f8fa'};
    color: ${props => props.selected ? 'white' : 'black'};
    font-size: 14px
`;

const MenuText = styled.div`
    width: 100%;
    font-size: 14px;

`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    background: #f0f2f2;
    width: 100vw;
    height: 100vh;
    background: white;
`;

const FileContainer = styled.div`
    display:flex;
    flex-direction: row;
    padding: 2em;
    background: #f0f2f2;
    width: 100vw;
    height: 100vh;
    background: white;
`;

function Explorer() {
    const filteredFiles = filesJson.filter(item => item.type !== 'folder');
    const filteredFolders = filesJson.filter(item => item.type === 'folder');
    const [sortCriteria, setSortCriteria] = useState('recent');
    const [files, setFiles] = useState(filteredFiles)
    const [folders, setFolders] = useState(filteredFolders)

    useEffect(() => {
        sortFiles();
    }, [sortCriteria]);

    const getFiles = () => {
        return (
            files.map((item, index) => {
                return <FileCard item={item} key={index} />
            })
        )
    }

    const getFolders = () => {
        return (
            folders.map((item, index) => {
                return <FolderCard item={item} key={index} />
            })
        )
    }

    const sortFiles = () => {
        const sortedFiles = [...files];
        sortedFiles.sort((a, b) => {
            switch (sortCriteria) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'recent':
                    return new Date(b.added) - new Date(a.added);
                case 'type':
                    return a.type.localeCompare(b.type);
                default:
                    return 0;
            }
        });
        setFiles(sortedFiles);
    };

    return (
        <Container>
            <Menu>
                <MenuText> Sort by:</MenuText>
                <MenuButton selected={sortCriteria === 'recent'} onClick={() => { setSortCriteria('recent') }}>Most Recent</MenuButton>
                <MenuButton selected={sortCriteria === 'name'} onClick={() => { setSortCriteria('name') }}>Name</MenuButton>
                <MenuButton selected={sortCriteria === 'type'} onClick={() => { setSortCriteria('type') }}>Type</MenuButton>
            </Menu>
            <FileContainer>
                {getFolders()}
                {getFiles()}
            </FileContainer>
        </Container>)
}

export default Explorer;