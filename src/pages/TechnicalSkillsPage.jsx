import styled from 'styled-components';
import React, { Component } from 'react';
import "../styling/BackgroundStyling.css";
import { FRAMEWORKS_AND_LIBRARIES_DESCRIPTION, FRAMEWORKS_AND_LIBRARIES_TITLE, PROGRAMMING_LANGUAGES_DESCRIPTION, PROGRAMMING_LANGUAGES_TITLE, TOOLS_DESCRIPTION, TOOLS_TITLE } from '../Utils';

const TechnicalSkillsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 975px) {
        justify-content: center;
        flex-direction: column;
    }
`;

const TextContainer = styled.div`
    height: 25rem;
    width: 15rem;
    background-color: black;
    color: white;
    opacity: 0.5;
    text-align: justify;
    padding: 1rem;
    @media (max-width: 975px) {
        height: auto;
    }
`;
const TechnicalSkillsPage = () => {
    return (
        <TechnicalSkillsContainer id="technical-skills-page-background">
            <TextContainer>
                <h3>{PROGRAMMING_LANGUAGES_TITLE}</h3>
                <p>{PROGRAMMING_LANGUAGES_DESCRIPTION}</p>
            </TextContainer>
            <TextContainer>
                <h3>{FRAMEWORKS_AND_LIBRARIES_TITLE}</h3>
                <p>{FRAMEWORKS_AND_LIBRARIES_DESCRIPTION}</p>
            </TextContainer>
            <TextContainer>
                <h3>{TOOLS_TITLE}</h3>
                <p>{TOOLS_DESCRIPTION}</p>
            </TextContainer>
        </TechnicalSkillsContainer>
    );
};

export default TechnicalSkillsPage;