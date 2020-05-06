import React  from 'react';
import {Slide} from "presa";

import P5Wrapper from 'react-p5-wrapper';

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

export default function(props) {

    return (
        <Slide layout={false} {...props}>
            <div style={{ height: '100%' }} id='some-id-two-d'>
                <P5Wrapper sketch={sketch}/>
            </div>
        </Slide>
    );
}
