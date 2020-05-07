import React from 'react';
import PlainSlide from "../components/plain-slide";
import {ControlledFragment} from "presa";

export default function (props) {
    return(
        <PlainSlide {...props}>
            <ControlledFragment numberOfSteps={2}>
                {(index) => {
                    if (index == 0 || index == -Infinity) {
                        return (<img style={{ height: '100%' }} src="./images/2-dimension-noise-1.png"/>);
                    }

                    return (<img style={{ height: '100%' }} src="./images/2-dimension-noise-2.png"/>);
                }}
            </ControlledFragment>
        </PlainSlide>
    );
}
