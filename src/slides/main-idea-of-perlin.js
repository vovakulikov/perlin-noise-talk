import React from 'react';
import { Slide } from "presa";
import { H1, H2 } from "presa/blocks";

export default function MainIdea(props) {
    return (
        <Slide {...props} centered >
            <H2>
                Small changes to arguments on average result in small changes to the resulting value
            </H2>
        </Slide>
    );
}
