import React from 'react';
import { Slide } from "presa";
import { H1, H2 } from "presa/blocks";

export default function PerlinNoiseIs(props) {
    return (
        <Slide {...props} centered>
            <H1>From Wiki</H1>
            <H2>
                Perlin noise is a procedural texture primitive, a type of gradient noise used by visual effects artists to increase the appearance of realism in computer graphics
            </H2>
        </Slide>
    );
}
