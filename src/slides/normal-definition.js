import React from 'react';
import { Slide } from "presa";
import { H1, H2 } from "presa/blocks";
import Code from "presa/lib/blocks/code";

export default function NormalDefinition(props) {
    return (
        <Slide {...props} centered >
            <H2>
                This noise function is just our source of pseudo-random numbers that depend on certain parameters
            </H2>

            <Code>
                {`var value = noise(time) //One dimensional noise
var value = noise(x, y) //Two dimensional
var value = noise(x, y, z) //And three dimensional space
                `}
            </Code>
        </Slide>
    );
}
