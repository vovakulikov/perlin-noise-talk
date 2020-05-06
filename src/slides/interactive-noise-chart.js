import React, {useRef, useState} from 'react';
import {Slide} from "presa";

import P5Wrapper from 'react-p5-wrapper';

function sketch(p) {
    let rotation = 0;
    let canvas;

    p.setup = function () {
        const container = document.querySelector('#some-id');
        canvas = p.createCanvas(container.clientWidth, container.clientHeight);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        if (canvas) {
            p.draw();
        }
    };

    p.draw = function () {
        p.background(0);
        p.noFill();
        p.stroke(255);

        p.beginShape();
        for (var x = 0; x < p.width; x++) {
            var nx = p.map(x, 0, p.width, 0, 10);
            var y = p.height/2 * p.noise(nx);
            p.vertex(x, y);
        }

        p.endShape();

        p.beginShape();

        for (var x = 0; x < p.width; x++) {
            var nx = p.map(x, 0, p.width, 0, 10);
            var y = p.map(p.random(), 0, 1, p.height/2, p.height - 50)
            p.vertex(x, y);
        }


        p.endShape();

        p.noLoop();
    };
};

export default function(props) {
    const [counter, setCounter] = useState(0);

    return (
        <Slide layout={false} {...props}>
            <div onClick={() => setCounter((c) => c + 1)} style={{ height: '100%' }} id='some-id'>
                <P5Wrapper sketch={sketch} counter={counter}/>
            </div>
        </Slide>
    );
}
