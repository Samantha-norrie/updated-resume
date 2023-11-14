import styled from 'styled-components';
import React from 'react';
import '../styling/BackgroundStyling.css';
import { EDUCATION_PAGE_VALUE, PageContainer, PageSliderContainer } from '../Utils';
import PageSlider from '../components/PageSlider';

const EducationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
`;

const TextContainer = styled.div`
    width: 30rem;
    background-color: black;
    color: white;
    opacity: 0.5;
    text-align: justify;
    padding: 1rem;
    @media (max-width: 975px) {
        height: auto;
    }
`;

const UVicTextContainer = styled
const EducationPage = () => {
    return (
        <PageContainer>
            <PageSliderContainer>
                <PageSlider
                    pageValue={EDUCATION_PAGE_VALUE}
                />
            </PageSliderContainer>
            <EducationContainer>

            </EducationContainer>
        </PageContainer>
    )
}