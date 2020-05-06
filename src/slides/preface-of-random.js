import React from 'react';
import styled from "styled-components";
import {Slide} from "presa";
import {H2, Code} from "presa/lib/blocks";
import { primaryColor } from "../color";

const InlineCode = styled.code`
  letter-spacing: -0.5px;
  background: rgba(60, 89, 255, 0.07);
  color: ${primaryColor};
  padding: 3px 8px;
  border-radius: 3px;
`;

export default function (props) {
    return (
        <Slide centered {...props}>
            <H2>Almost like <InlineCode>Math.random()</InlineCode> but no...</H2>
        </Slide>
    );
}
