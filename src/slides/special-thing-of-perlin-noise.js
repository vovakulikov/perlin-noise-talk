import React from 'react';
import {Slide} from "presa";
import { H1 } from "presa/lib/blocks";
import styled from 'styled-components';
import {primaryColor} from "../color";

const List = styled.ul`
  font-size: 26px;
  text-align: left;
  padding-top: 15px;
  color: #333333;

  li {
    margin-bottom: 32px;
  }
`;

const InlineCode = styled.code`
  letter-spacing: -0.5px;
  background: rgba(60, 89, 255, 0.07);
  color: ${primaryColor};
  padding: 3px 8px;
  border-radius: 3px;
`;

export default function (props) {
    return (
        <Slide {...props}>

            <H1>Features</H1>

            <List>
                <li>
                    Perlin Noise is a <bold>pure</bold> function (Its return value is the same for the same arguments)
                </li>

                <li>
                    We expect to get closer y-values for closer x-values inputted to <InlineCode>noise()</InlineCode>.
                    For example noise(5) and noise(10) may give very different values, but noise(5) and noise(5.5) will probably be comparatively closer to each other, and noise(5) and noise(5.001) will be very close to each other.
                </li>
            </List>
        </Slide>
    );
}
