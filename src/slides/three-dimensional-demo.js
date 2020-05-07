
import React  from 'react';
import {ControlledFragment, Slide} from "presa";
import styled from 'styled-components';

import P5Wrapper from 'react-p5-wrapper';
import {H1} from "presa/blocks";

function sketch(p) {
    var cols, rows;
    var scl = 20;
    var w = 1400;
    var h = 1000;
    let canvas;

    var flying = 0;

    var terrain = [];

    p.setup = function () {
        const container = document.querySelector('#some-id-vertex');
        canvas = p.createCanvas(container.clientWidth, container.clientHeight, p.WEBGL);

        cols = w / scl;
        rows = h / scl;

        for (var x = 0; x < cols; x++) {
            terrain[x] = [];
            for (var y = 0; y < rows; y++) {
                terrain[x][y] = 0; //specify a default value for now
            }
        }
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        if (canvas) {
            p.draw();
        }
    };

    p.draw = function () {
        flying -= 0.1;
        var yoff = flying;

        for (var y = 0; y < rows; y++) {
            var xoff = 0;

            for (var x = 0; x < cols; x++) {
                terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -100, 100);
                xoff += 0.2;
            }
            yoff += 0.2;
        }

        p.background(0);
        p.translate(0, 50);
        p.rotateX(p.PI / 3);
        p.fill(200, 200, 200, 50);
        p.translate(-w / 2, -h / 2);

        for (var y = 0; y < rows - 1; y++) {
            p.beginShape(p.TRIANGLE_STRIP);
            for (var x = 0; x < cols; x++) {
                p.vertex(x * scl, y * scl, terrain[x][y]);
                p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
            }
            p.endShape();
        }
    };
};

const H = styled(H1)`
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 5em;
    transform: translate(-50%, -50%);
`;

export default function(props) {

    return (
        <Slide layout={false} {...props}>
            <ControlledFragment numberOfSteps={1}>
                {(index) => {
                    return (
                        <div style={{ height: '100%', position: 'relative;' }} id='some-id-vertex'>
                            { index != -Infinity && <H>Thanks</H>}
                            <P5Wrapper sketch={sketch}/>
                        </div>
                    );
                }}
            </ControlledFragment>
        </Slide>
    );
}
