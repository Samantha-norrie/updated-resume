import styled from 'styled-components';
import React from 'react';
import "../styling/BackgroundStyling.css";
import ResumeDetails from '../components/ResumeDetails';
import PageSlider from '../components/PageSlider';
import { GIFBIT_END_DATE, GIFTBIT_DESCRIPTION, GIFTBIT_EMPLOYER, GIFTBIT_JOB_TITLE, GIFTBIT_START_DATE, JOB_HISTORY_BLURB, TA_DESCRIPTION, TA_EMPLOYER, TA_JOB_TITLE, TA_START_DATE, TELEDYNE_FLIR_DESCRIPTION, TELEDYNE_FLIR_EMPLOYER, TELEDYNE_FLIR_END_DATE, TELEDYNE_FLIR_START_DATE, TELEDYNE_FLIR_TITLE, TECHNICAL_SKILLS_PAGE_VALUE, PageContainer, PageSliderContainer, EMPLOYMENT_HISTORY_PAGE_VALUE} from '../Utils';

const EmploymentHistoryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
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

const EmploymentHistoryPage = () => {
    return (
        <PageContainer id="employment-history-page-background">
            <PageSliderContainer>
                <PageSlider
                    pageValue={EMPLOYMENT_HISTORY_PAGE_VALUE}
                />   
            </PageSliderContainer>
            <EmploymentHistoryContainer>
                <TextContainer>
                    <h2>Job History</h2>
                    <p>{JOB_HISTORY_BLURB}</p>
                    <ResumeDetails
                        title={TA_JOB_TITLE}
                        employer={TA_EMPLOYER}
                        startDate={TA_START_DATE}
                        description={TA_DESCRIPTION}
                    />
                </TextContainer>
                <TextContainer>
                    <ResumeDetails
                        title={GIFTBIT_JOB_TITLE}
                        employer={GIFTBIT_EMPLOYER}
                        startDate={GIFTBIT_START_DATE}
                        endDate={GIFBIT_END_DATE}
                        description={GIFTBIT_DESCRIPTION}
                    />
                    <ResumeDetails
                        title={TELEDYNE_FLIR_TITLE}
                        employer={TELEDYNE_FLIR_EMPLOYER}
                        startDate={TELEDYNE_FLIR_START_DATE}
                        endDate={TELEDYNE_FLIR_END_DATE}
                        description={TELEDYNE_FLIR_DESCRIPTION}
                    />
                </TextContainer>
            </EmploymentHistoryContainer>
        </PageContainer>
    );
};

export default EmploymentHistoryPage;
