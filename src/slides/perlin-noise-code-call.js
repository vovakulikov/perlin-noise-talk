import React from 'react';
import {Slide} from "presa";
import {H2, Code} from "presa/blocks";
import styled from "styled-components";
import {primaryColor} from "../color";

const InlineCode = styled.code`
  letter-spacing: -0.5px;
  background: rgba(60, 89, 255, 0.07);
  color: ${primaryColor};
  padding: 3px 8px;
  border-radius: 3px;
`;


export default function(props) {
    return (
        <Slide {...props} centered>
            <H2>API example</H2>

            <Code>{`const randomValue = noise(5)
const slightlyDifferentValue = noise(5+0.1)
const muchDifferentValue = noise(5+10)`}</Code>
        </Slide>
    );
}
