import React  from 'react';
import {Slide} from "presa";
import styled from "styled-components";

import P5Wrapper from 'react-p5-wrapper';
import {H2, Code} from "presa/blocks";
import {primaryColor} from "../color";
import {backgroundFor} from "presa/lib/components/slide/background";

const InlineCode = styled.code`
  letter-spacing: -0.5px;
  background: rgba(60, 89, 255, 0.07);
  color: ${primaryColor};
  padding: 3px 8px;
  border-radius: 3px;
`;

function sketch(p) {
    let canvas;
    let t = 0;

    p.setup = function () {
        const container = document.querySelector('#some-id-bezier');
        canvas = p.createCanvas(container.clientWidth, container.clientHeight);

        p.noStroke();
        p.stroke(255, 18);
        p.noFill();

        p.background(0)
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        if (canvas) {
            p.draw();
        }
    };

    p.draw = function () {
        var x1 = p.width * p.noise(t + 15);
        var x2 = p.width * p.noise(t + 25);
        var x3 = p.width * p.noise(t + 35);
        var x4 = p.width * p.noise(t + 45);
        var y1 = p.height * p.noise(t + 55);
        var y2 = p.height * p.noise(t + 65);
        var y3 = p.height * p.noise(t + 75);
        var y4 = p.height * p.noise(t + 85);

        p.bezier(x1, y1, x2, y2, x3, y3, x4, y4);

        t += 0.005;
    };
};

export default function(props) {

    return (
        <Slide layout={false} {...props}>
            <div style={{ height: '100%' }} id='some-id-bezier'>
                <P5Wrapper sketch={sketch}/>
            </div>
        </Slide>
    );
}
