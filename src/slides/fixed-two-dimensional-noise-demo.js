import React  from 'react';
import {Slide} from "presa";

import P5Wrapper from 'react-p5-wrapper';
import CodeSlide from "../components/code-slide";

function sketch(p) {
    let canvas;
    const noiseMax = 1;
    let t = 0;

    p.setup = function () {
        const container = document.querySelector('#some-id-two-d');
        canvas = p.createCanvas(container.clientWidth, container.clientHeight);

        p.noStroke();
        p.stroke(0, 15);
        p.noFill();
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        if (canvas) {
            p.draw();
        }
    };

    p.draw = function () {
        p.translate(p.width/2, p.height/2);
        p.beginShape();
        for (var i = 0; i < 200; i++) {
            var ang = p.map(i, 0, 200, 0, p.TWO_PI);

            var xOff = p.map(p.cos(ang), -1, 1, 0, noiseMax);
            var yOff = p.map(p.sin(ang), -1, 1, 0, noiseMax);

            var rad = p.map(p.noise(xOff, yOff, t), 0, 1, p.height * 0.1, p.height * 0.5);

            var x = rad * p.cos(ang);
            var y = rad  * p.sin(ang);

            p.curveVertex(x, y);
        }
        p.endShape(p.CLOSE);

        t += 0.01;
    };
};

const code = `const noiseMax = 1;
let t = 0;

function draw () {
        translate(width/2, height/2);
        beginShape();
        
        for (var i = 0; i < 200; i++) {
            var ang = map(i, 0, 200, 0, TWO_PI);

            var xOff = map(cos(ang), -1, 1, 0, noiseMax);
            var yOff = map(sin(ang), -1, 1, 0, noiseMax);

            var rad = noise(xOff, yOff, t);

            var x = rad * cos(ang);
            var y = rad * sin(ang);

            curveVertex(x, y);
        }

        endShape(CLOSE);

        t += 0.01;
    };`;

const highlightSettings = {
    0: { lines: [5, 6], subTitle:  () => 'Move origin point to center of canvas' },
    1: { lines: [8], subTitle:  () => 'Create 200 points in a circle.' },
    2: { lines: [9], subTitle:  () => 'Map index of point to angler between 0 and 2 PI' },
    3: { lines: [11,12], subTitle:  () => 'Map x and y offsets between 0 and noiseMax (1) Cause to Perlin noise cant pass negative values ' },
    4: { lines: [14], subTitle:  () => 'Calculate radius according our offsets and noise' },
    5: { lines: [16,17], subTitle:  () => 'Convert polar coordinates to cartesian' },
};

export function CodeExample (props) {
    return (
        <CodeSlide
            {...props}
            code={code}
            lightMap={highlightSettings}
        />
    );
}

export default function(props) {

    return (
        <Slide layout={false} {...props}>
            <div style={{ height: '100%' }} id='some-id-two-d'>
                <P5Wrapper sketch={sketch}/>
            </div>
        </Slide>
    );
}
