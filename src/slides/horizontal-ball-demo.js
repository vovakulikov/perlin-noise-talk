
import React  from 'react';
import { Slide } from "presa";

import P5Wrapper from 'react-p5-wrapper';
import CodeSlide from '../components/code-slide';

function sketch(p) {
    let canvas;
    let t = 0;

    p.setup = function () {
        const container = document.querySelector('#some-id-h-ball');
        canvas = p.createCanvas(container.clientWidth, container.clientHeight);

        p.noStroke();
        p.background(0, 5);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        if (canvas) {
            p.draw();
        }
    };

    p.draw = function () {
        p.background(0, 10);

        var x = p.width * p.noise(t);
        var y = p.height / 2;

        p.noStroke();
        p.fill(255, 255, 255);
        p.ellipse(x, y, 120, 120);

        t = t + 0.01;
    };
};

export default function(props) {

    return (
        <Slide layout={false} {...props}>
            <div style={{ height: '100%' }} id='some-id-h-ball'>
                <P5Wrapper sketch={sketch}/>
            </div>
        </Slide>
    );
}

const code = `function setup() {
 canvas = p.createCanvas();

 noStroke();
 background(0, 5);
};

let time = 0;

function draw () {
 background(0, 5);

 var x = width * noise(time);
 var y = height / 2;

 noStroke();
 fill(255, 255, 255);
 ellipse(x, y, 120, 120);

 time = time + 0.01;
};`;

const highlightSettings = {
    0: { lines: [8], subTitle: () => 'Argument to pass to perlin noise (means we are going through time axe in noise function)' },
    1: { lines: [13], subTitle: () => 'Calculate x coordinate by one dimension perlin noise function' },
};

export function CodeDemo(props) {
    return (
        <CodeSlide
            {...props}
            code={code}
            lightMap={highlightSettings}
        />
    );
};
