import styled from 'styled-components';
import React, { Component } from 'react';
import Title from 'antd/lib/skeleton/Title';

const ResumeDetails = (props) => {
    const {title, employer, startDate, endDate, description} = props;
    return (
        <>
            <h3>{title}</h3>
            {employer &&
                <p>{employer}</p>
            }
            <p>{startDate}-{endDate ? endDate != null: "Present"}</p>
            <p>{description}</p>
        </>
    );
}


export default ResumeDetails;