import React from 'react';
import {Slide} from "presa";
import {H1, H3} from "presa/blocks";
import styled from "styled-components";

const CustomH = styled(H1)`
	margin-bottom: 1em;
`;

const TwoDemesionalNoise = (props) => (
    <Slide {...props} centered>
        <CustomH>Two dimensional noise is a grid</CustomH>

        <img src="./images/two-dimension-noise.png"/>
    </Slide>
);

export default TwoDemesionalNoise;
