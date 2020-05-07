
import React  from 'react';
import {Slide} from "presa";
import {Code} from "presa/blocks";

import P5Wrapper from 'react-p5-wrapper';

function sketch(p) {
    let canvas;
    let zOffset = 0;

    p.setup = function () {
        const container = document.querySelector('#some-id-cloud');
        canvas = p.createCanvas(container.clientWidth, container.clientHeight);

        p.noStroke();
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        if (canvas) {
            p.draw();
        }
    };

    p.draw = function () {
        for (var x = 0; x < p.width; x+=10) {
            for (var y = 0; y < p.height; y+=10) {
                var c = 255 * p.noise(0.01 * x, 0.01 * y, zOffset);
                p.fill(c);
                p.rect(x, y, 10, 10);
            }
        }

        zOffset += 0.005;
    };
};

const code = `let zOffset = 0.0; // Change 2-d perlin grid slightly fro animation in time
function draw() {
    for (var x = 0; x < width; x+=10) {
        for (var y = 0; y < height; y+=10) {
            var c = 255 * noise(0.01 * x, 0.01 * y, zOffset);
            p.fill(c);
            p.rect(x, y, 10, 10);
        }
    }

    zOffset += 0.005;
};`;

export function CloudCode(props) {
    return (<Slide {...props} centered>
        <Code>{code}</Code>
    </Slide>)
}

export default function(props) {

    return (
        <Slide layout={false} {...props}>
            <div style={{ height: '100%' }} id='some-id-cloud'>
                <P5Wrapper sketch={sketch}/>
            </div>
        </Slide>
    );
}
