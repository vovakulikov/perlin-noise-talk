
import React  from 'react';
import {Slide} from "presa";

import P5Wrapper from 'react-p5-wrapper';

function sketch(p) {
    let canvas;
    let t = 0;

    p.setup = function () {
        const container = document.querySelector('#some-id-ball');
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
        p.background(0, 5);

        var x = p.width * p.noise(t);
        var y = p.height * p.noise(t);
        var r = 255 * p.noise(t+10);
        var g = 255 * p.noise(t+15);
        var b = 255 * p.noise(t+20);

        p.noStroke();
        p.fill(r, g, b);
        p.ellipse(x, y, 120, 120);

        t = t + 0.01;
    };
};

export default function(props) {

    return (
        <Slide layout={false} {...props}>
            <div style={{ height: '100%' }} id='some-id-ball'>
                <P5Wrapper sketch={sketch}/>
            </div>
        </Slide>
    );
}
