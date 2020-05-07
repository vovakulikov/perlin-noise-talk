import React from 'react';
import {Slide} from "presa";
import { H1, H3 } from "presa/blocks";
import List from "../components/list";

const Agenda = (props) => (
    <Slide {...props}>
        <H1>What are we going to talk about </H1>

        <List>
            <li>Perlin Noise</li>
            <li>Flow field</li>
        </List>
    </Slide>
);

export default Agenda;
