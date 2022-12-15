import styled from 'styled-components';
import React from 'react';
import PageSlider from '../components/PageSlider';
import "../styling/BackgroundStyling.css";
import {INTRO_DESCRIPTION_TEXT, INTRO_TITLE_TEXT, TECHNICAL_SKILLS_BUTTON, TITLE_TEXT , LANDING_PAGE_VALUE, PageContainer} from '../Utils';


const IntroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const IntroInfoContainer = styled.div`
    background-color: black;
    color: white;
    opacity: 0.5;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 20% 70% 10;
    padding: 1rem;
    width: 35rem;
`;

const TitleText = styled.h1`
    grid-row-start: 1;
    grid-row-end: 2;
`;

const IntroDescriptionText = styled.p`
    grid-row-start: 2;
    grid-row-end: 3;
    text-align: justify;
`;

const PageButton = styled.button`
    background-color: black;
    color: white;
    border-color: black;
    border-radius: 20px;
    opacity: 0.5;
    padding: 1rem 2rem;
    margin: 1rem;
`;

const PageButtonText = styled.p`
    opacity: 1.0;
    color: white;
`;

const PageSliderContainer = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LandingPage = () => {
    return (
        <PageContainer id="landing-page-background">
            <PageSliderContainer>
                <PageSlider
                    pageValue={LANDING_PAGE_VALUE}
                />         
            </PageSliderContainer>       
            <IntroContainer>
                <IntroInfoContainer>
                    <TitleText>{INTRO_TITLE_TEXT}</TitleText>
                    <IntroDescriptionText>{INTRO_DESCRIPTION_TEXT}</IntroDescriptionText>
                </IntroInfoContainer>
            </IntroContainer>
        </PageContainer>
    )
};

export default LandingPage;
