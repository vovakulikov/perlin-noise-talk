import React from 'react';
import {Slide} from "presa";
import { Title } from 'presa/blocks'
import P5Wrapper from "react-p5-wrapper";
import styled from 'styled-components'

const DeckTitle = styled(Title)`
  line-height: 0.95;
  margin-top: 90px;
  font-size: 3em;
  
`

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 180px;
  font-weight: bold;
  font-size: 24px;
  align-items: flex-end;
  color: white;
`

const Author = styled.div`
  border-bottom: 2px solid white;
  padding-top: 10px;
`

const TwitterHandle = styled.div`
  font-size: 20px;
`

const CentredContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5em 5em;
  position: relative;
  color: white;
`;

const MainWrapper = styled.div`
    position: relative;
    height: 100%;
`;

const SketchContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
`;

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

export const PlainLayout = (children) => (
    <MainWrapper>
        <SketchContainer id='some-id-cloud'>
            <P5Wrapper sketch={sketch}/>
        </SketchContainer>

        <CentredContent>
            {children}
        </CentredContent>
    </MainWrapper>
);

const IntroSlide = (props) => {
    return (
        <Slide {...props} layout={PlainLayout}>

            <DeckTitle color="white">
                Art of↝<br/> Perlin Noise
            </DeckTitle>

            <Contacts color="white">
                <Author>
                    Vova Kulikov<br /> knowledge Sharing
                </Author>

                <TwitterHandle>@_vovakulikov · wrike.com</TwitterHandle>
            </Contacts>
        </Slide>
    )
};

export default IntroSlide;
