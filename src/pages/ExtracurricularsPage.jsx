import styled from 'styled-components';
import React from 'react';
import "../styling/BackgroundStyling.css";
import ResumeDetails from '../components/ResumeDetails';
import PageSlider from '../components/PageSlider';
import { EXTRACURRICULARS_BLURB, JCURA_DESCRIPTION, JCURA_START_DATE, JCURA_TITLE, VIKELABS_DESCRIPTION, VIKELABS_START_DATE, VIKELABS_TITLE , PageContainer, EXTRACURRICULARS_PAGE_VALUE, PageSliderContainer} from '../Utils';

const ExtracurricularsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    @media (max-width: 975px) {
        flex-direction: column;
        justify-content: center;
    }

`;
const TextContainer = styled.div`
    height: 40rem;
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
const ExtracurricularsPage = () => {
    return (
        <PageContainer id="extracurriculars-page-background">
            <PageSliderContainer>
                <PageSlider
                    pageValue={EXTRACURRICULARS_PAGE_VALUE}
                />         
            </PageSliderContainer>
            <ExtracurricularsContainer>
                <TextContainer>
                    <h2>Extracurriculars</h2>
                    <p>{EXTRACURRICULARS_BLURB}</p>
                    <ResumeDetails
                        title={JCURA_TITLE}
                        startDate={JCURA_START_DATE}
                        description={JCURA_DESCRIPTION}
                    />
                </TextContainer>
                <TextContainer>
                    <ResumeDetails
                        title={VIKELABS_TITLE}
                        startDate={VIKELABS_START_DATE}
                        description={VIKELABS_DESCRIPTION}
                    />
                </TextContainer>
            </ExtracurricularsContainer>
        </PageContainer>
    );
}

export default ExtracurricularsPage;