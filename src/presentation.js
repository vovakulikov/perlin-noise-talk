import React from 'react';
import { Presentation } from "presa";

import { baseTextColor } from "./color";

// Slides
import Intro from './slides/intro';
import Agenda from './slides/agenda';
import PerlinNoiseIs from './slides/perlin-noise-is';
import PrefaceOfRandom from './slides/preface-of-random';
import NormalDefinition from './slides/normal-definition';
import Special from './slides/special-thing-of-perlin-noise';
import InteractiveNoiseChart from './slides/interactive-noise-chart'
import ClassicPerlinNoiseCloud from './slides/classic-perlin-noise-cloud'
import RandomBall, { QuickFix, Explanation } from './slides/random-ball'
import BrokenBall from './slides/broken-ball'
import BezierExample from './slides/bezier-example'
import TwoDimensionalNoise from './slides/two-dimension-noise'
import TwoDimensionalNoiseDemo from './slides/two-dimensional-demo'
import FixedTwoDimensionalNoiseDemo from './slides/fixed-two-dimensional-noise-demo'
import SecondTwoDimensionalNoiseDemo from './slides/second-two-dimensional-demo'
import ReachDemo from './slides/reach-noise-demo'
import LiveDemo from './slides/live-editor-demo-link'

export default function PitchDesk() {
    return (
     <Presentation
        name="Perlin noise"
        tableOfContents
        useFullscreenAPI
        theme={{ textColor: baseTextColor }}>

         <Intro name="The first one" />

         <Agenda name={'Agenda'}/>

         <PerlinNoiseIs name={'Wiki definition'}/>

         <NormalDefinition name={'The normal definition'}/>

         <PrefaceOfRandom name={'Preface'}/>

         <InteractiveNoiseChart name={'Interactive Chart'}/>

         <Special name={'Perlin is pure'} />

         <ClassicPerlinNoiseCloud name={'Classic cloud'}/>

         <BrokenBall name={'Broken Ball'}/>

         <Explanation name={'Explanation of problem '}/>

         <QuickFix name={'Fix ball'}/>

         <RandomBall name={'Crazy ball'}/>

         <BezierExample name={'Bezier ex'}/>

         <TwoDimensionalNoise name={'Two dimensional noise'}/>

         <TwoDimensionalNoiseDemo name={'Two dimensional noise ex'}/>

         <FixedTwoDimensionalNoiseDemo name={'Fixed two dimensional noise ex'}/>

         <SecondTwoDimensionalNoiseDemo name={'Second two dimensional noise ex'}/>

         <ReachDemo name={'reach noise demo'}/>

         <LiveDemo name={'live demo link'} />

    </Presentation>);
}
