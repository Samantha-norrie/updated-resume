import styled from 'styled-components';
import React from 'react';
import "../styling/BackgroundStyling.css";
import { FRAMEWORKS_AND_LIBRARIES_DESCRIPTION, FRAMEWORKS_AND_LIBRARIES_TITLE, PROGRAMMING_LANGUAGES_DESCRIPTION, PROGRAMMING_LANGUAGES_TITLE, TECHNICAL_SKILLS_PAGE_VALUE, TOOLS_DESCRIPTION, TOOLS_TITLE, PageContainer, PageSliderContainer} from '../Utils';
import PageSlider from '../components/PageSlider';

const TechnicalSkillsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;

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
        <PageContainer id="technical-skills-page-background">
            <PageSliderContainer>
                <PageSlider
                    pageValue={TECHNICAL_SKILLS_PAGE_VALUE}
                />           
            </PageSliderContainer>
            <TechnicalSkillsContainer>
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
        </PageContainer>
    );
};

export default TechnicalSkillsPage;