
import React  from 'react';
import {Slide, ControlledFragment} from "presa";
import styled from "styled-components";

import P5Wrapper from 'react-p5-wrapper';
import {H2, Code} from "presa/blocks";
import {primaryColor} from "../color";
import PlainSlide from "../components/plain-slide";

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
        var y = p.height * p.noise(t+5);
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

export function Explanation(props) {
    return (
        <Slide {...props} centered>
            <H2>That's happening cause we call <InlineCode>noise</InlineCode> function to calculate <InlineCode>x</InlineCode> and <InlineCode>y</InlineCode> value with same argument <InlineCode>t</InlineCode></H2>
            <Code>
                {`var x = width * noise(t);
var y = height * noise(t);`}
            </Code>
        </Slide>
    );
}

export function QuickFixChart(props) {
    return(
        <PlainSlide {...props}>
            <ControlledFragment numberOfSteps={2}>
                {(index) => {
                    if (index == 0 || index == -Infinity) {
                        return (<img style={{ height: '100%' }} src="./images/noise-explanation-3-hack-for-2-dimension.png"/>);
                    }

                    return (<img style={{ height: '100%' }} src="./images/noise-explanation-4-hack-for-2-dimension.png"/>);
                }}
            </ControlledFragment>
        </PlainSlide>
    );
}

export function QuickFix(props) {
    return (
        <Slide {...props} centered>
            <H2>For now we can add some offset to <InlineCode>y</InlineCode> noise-calculation</H2>
            <Code>
                {`var y = height * noise(t+5);`}
            </Code>
        </Slide>
    );
}
