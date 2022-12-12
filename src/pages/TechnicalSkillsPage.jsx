import styled from 'styled-components';
import React, { Component } from 'react';
import "../styling/BackgroundStyling.css";

const TechnicalSkillsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const TextContainer = styled.div`
    height: 40rem;
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

            </TextContainer>
            <TextContainer>

            </TextContainer>
            <TextContainer>

            </TextContainer>
            <TextContainer>
                
            </TextContainer>
        </TechnicalSkillsContainer>
    );
};

export default TechnicalSkillsPage;