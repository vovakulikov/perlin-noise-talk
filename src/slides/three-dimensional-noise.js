import React from 'react';
import {Slide} from "presa";
import {H1, H3} from "presa/blocks";
import styled from "styled-components";
import PlainSlide from "../components/plain-slide";

const CustomH = styled(H1)`
	margin-bottom: 1em;
`;

const ThreeDemesionalNoise = (props) => (
    <Slide {...props} centered>
        <CustomH>Three dimensional noise is a just a slices of two dimensional</CustomH>
    </Slide>
);

export function ThreeDemesionalNoiseChart(props) {
    return (<PlainSlide {...props}>
        <img src="./images/3-dimension-noise.png" style={{ height: '100%' }} alt=""/>
    </PlainSlide>);
}

export default ThreeDemesionalNoise;
