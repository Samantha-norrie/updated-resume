import styled from 'styled-components';
import React from 'react';
import '../styling/BackgroundStyling.css';
import { Slider } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { EDUCATION_PAGE_VALUE, EMPLOYMENT_HISTORY_PAGE_VALUE, EXTRACURRICULARS_PAGE_VALUE, LANDING_PAGE_VALUE, TECHNICAL_SKILLS_PAGE_VALUE } from '../Utils';

const SliderContainer = styled.div`
    height: 20rem;
    margin: 0%;
    align-items: center;

`;

const PageSlider = (props) => {
    const {pageValue} = props;
    const [currentPageValue, setCurrentPageValue]= useState(pageValue);
    const navigate = useNavigate();
    return (
        <SliderContainer>
            <Slider
                id="slider-styling"
                track={false}
                step={1}
                min={1}
                max={5}
                defaultValue={pageValue}
                orientation="vertical"
                size="small"
                onChangeCommitted={(e, value) => {
                  if(value === LANDING_PAGE_VALUE) {
                    navigate("/")
                  }
                  else if(value === EMPLOYMENT_HISTORY_PAGE_VALUE) {
                      navigate("/EmploymentHistory")
                  }
                  else if(value === TECHNICAL_SKILLS_PAGE_VALUE) {
                    navigate("/TechnicalSkills")
                  }
                  else if(value === EDUCATION_PAGE_VALUE) {
                    navigate("/Education")
                  }
                  else if(value === EXTRACURRICULARS_PAGE_VALUE) {
                    navigate("/Extracurriculars")
                  }
                }}
            />       
        </SliderContainer>
    );

};

export default PageSlider;