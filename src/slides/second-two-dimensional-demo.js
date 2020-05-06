import React  from 'react';
import {Slide} from "presa";

import P5Wrapper from 'react-p5-wrapper';

function sketch(p) {
    let canvas;
    let frames = 0;

    p.setup = function () {
        const container = document.querySelector('#some-id-two-d-s');
        canvas = p.createCanvas(container.clientWidth, container.clientHeight);

        p.background(0);
        p.stroke(0);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        if (canvas) {
            p.draw();
        }
    };

    p.draw = function () {
        p.clear();
        p.translate(p.width/2, p.height/2);
        var r = p.min(p.width, p.height) * 0.35;
        var noiseMax = 8;
        var points = 100;
        var rings = 70;

        p.noiseDetail(5);

        p.stroke(255);
        p.noFill();

        for(var j = 0; j <= rings; j=j+1) {
            var rad = (r / rings) * (rings - j);

            p.beginShape();

            for (var i = 0; i < points; i = i + 1) {
                var angle = i * p.TWO_PI / points;
                var xOff = p.map(p.cos(angle), -1, 1, 0, noiseMax);
                var yOff = p.map(p.sin(angle), -1, 1, 0, noiseMax);

                var offset = p.map(p.noise(xOff, yOff + (j * 0.1), frames * 0.003), 0, 1, 0, rad / 2);
                var x = (rad + offset) * p.cos(angle);
                var y = (rad + offset) * p.sin(angle);

                p.vertex(x, y);
            }
            p.stroke(j / rings * 175 + 120);
            p.endShape(p.CLOSE);
        }

        frames++;
    };
};

export default function(props) {

    return (
        <Slide layout={false} {...props}>
            <div style={{ height: '100%' }} id='some-id-two-d-s'>
                <P5Wrapper sketch={sketch}/>
            </div>
        </Slide>
    );
}
