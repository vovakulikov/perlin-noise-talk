import React from 'react';
import {ControlledFragment, Slide} from "presa";
import { H1, H2 } from "presa/blocks";
import PlainSlide from "../components/plain-slide";

export default function MainIdea(props) {
    return (
        <Slide {...props} centered >
            <H2>
                Small changes to arguments on average result in small changes to the resulting value
            </H2>
        </Slide>
    );
}

export function RelationChart(props) {
    return(
        <PlainSlide {...props}>
            <ControlledFragment numberOfSteps={2}>
                {(index) => {
                    if (index == 0 || index == -Infinity) {
                        return (<img style={{ height: '100%' }} src="./images/noise-explanation-1.png"/>);
                    }

                    return (<img style={{ height: '100%' }} src="./images/noise-explanation-2-joke.png"/>);
                }}
            </ControlledFragment>
        </PlainSlide>
    );
}

export function CreateNoiseFuncCharts(props) {
    return(
        <PlainSlide {...props}>
            <ControlledFragment numberOfSteps={6}>
                {(index) => {
                    if (index == 0 || index == -Infinity) {
                        return (<img style={{ height: '100%' }} src="./images/build-a-noise-1.png"/>);
                    }

                    if (index == 1) {
                        return (<img style={{ height: '100%' }} src="./images/build-noise-2.png"/>);
                    }

                    if (index == 2) {
                        return (<img style={{ height: '100%' }} src="./images/build-noise-3.png"/>);
                    }

                    if (index == 3) {
                        return (<img style={{ height: '100%' }} src="./images/build-noise-4.png"/>);
                    }

                    if (index == 4) {
                        return (<img style={{ height: '100%' }} src="./images/build-a-noise-5.png"/>);
                    }

                    return (<img style={{ height: '100%' }} src="./images/build-a-noise-6.png"/>);
                }}
            </ControlledFragment>
        </PlainSlide>
    );
}
