
import React from 'react';
import { Slide } from "presa";
import styled from "styled-components";
import {primaryColor} from "../color";

const FinalLink = styled.a`
  font-size: 32px;
  font-weight: 500;
  text-decoration: underline;
  color: ${primaryColor};
  padding: 0 8px;
  transition: all 0.2s ease;

  &:hover {
    background: ${primaryColor};
    color: white;
  }
`;

export default function(props) {
    return (
        <Slide {...props} centered>
            <FinalLink href='https://editor.p5js.org/vovakulikov/sketches/nptMB7HJo'>Live Demo</FinalLink>
        </Slide>

    );
}
