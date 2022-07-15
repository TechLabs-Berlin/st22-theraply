import React from "react";
import styled from "styled-components";

const Styles = styled.div`

position: absolute;
width: 611px;
height 80px;
left: 951px;
top: 486px;

font-family: 'Lobster';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 80px;
color: #0E073;

.h6 {

position: absolute;
width: 692px;
height: 287px;
left: 960px;
top: 603px;

font-family: 'Hind';
font-style: normal;
font-weight: 200;
line-height: 10px;
color: #0E073; 

};

.one {

position: absolute;



font-family: 'Hind';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
color: #0E0E73;

};

`;

export const MiddlePart = () => (
    <Styles>
        <h2>The easy way to Therapy</h2>

        <h6>Finding a therapy place can be an arduous and lengthy
            process. <br></br>
            This complicates mental health efforts for those who have managed <br></br>
            to take the step of seeking therapy in the first place.</h6>

        <div className="one">
            <p>
                Search
            </p>
            <p>
                Our filters will guide you in your search to find you a therapist 
                according to your preferences
            </p>
        </div>

    </Styles>
);

export default MiddlePart; 